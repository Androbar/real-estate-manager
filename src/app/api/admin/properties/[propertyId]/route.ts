import { writeFile } from 'fs/promises'
import { type NextRequest, NextResponse } from 'next/server'
import { format } from 'date-fns'
import path from 'path'
import { mkdirSync } from 'fs'
import prisma from '@/lib/prismaClient'
import { getServerSideSession } from '@/hoc/server-auth'

export async function POST(req: NextRequest) {
  const session = await getServerSideSession()
  if (!session) {
    return NextResponse.redirect('/404')
  }
  const form = await req.formData()

  // I have to prepare the data for update the property and the files at the same times
  const property = JSON.parse(form.get('body') as string)
  const {
    name,
    slug,
    description,
    address,
    location,
    latitude,
    longitude,
    city,
    operationType,
    price,
    expenses,
    currency,
    type,
    areaTotal,
    areaCovered,
    roomsTotal,
    bathrooms,
    rooms,
    yearsBuilt,
    propertyFacing,
    orientation,
    carport,
    ownerId,
    availableAsOf,
    constructionYear,
    buildingCondition,
    streetFrontageWidth,
    numberOfFrontages,
    coveredParkingSpaces,
    outdoorParkingSpaces,
    surroundingsType,
    livingArea,
    livingRoomSurface,
    kitchenType,
    kitchenSurface,
    bedrooms,
    bedroom1Surface,
    bedroom2Surface,
    bedroom3Surface,
    bedroom4Surface,
    bedroom5Surface,
    showerRooms,
    toilets,
    officeSurface,
    office,
    professionalSpaceSurface,
    attic,
    furnished,
    heatingType,
    surfaceOfThePlot,
    connectionToSewerNetwork,
    gasWaterElectricity,
    gardenSurface,
    terraceSurface,
    elevator,
    accessibleForDisabled,
    tvCable,
    visioPhone,
    swimmingPool,
    totalGroundFloorBuildable,
    floodZoneType,
    propertyImages,
  } = property
  const files: File[] | null = form.getAll('files') as unknown as File[]
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const filePath = await saveFile(file)

      const image = await prisma.image.create({
        data: {
          filename: file.name,
          url: filePath,
          caption: propertyImages[i]?.image.caption,
          propertyImages: {
            create: {
              propertyId: property.id,
              order: parseInt(propertyImages[i].order as string),
            },
          },
        },
      })
      console.log('image.filename', image.filename)
    }
  }
  await prisma.property.update({
    where: {
      id: property.id,
      ownerId: parseInt(session.user.id),
    },
    data: {
      name,
      slug,
      description,
      address,
      location,
      latitude,
      longitude,
      city,
      operationType,
      price: parseFloat(price as string),
      expenses: parseFloat(expenses as string),
      currency,
      type,
      areaTotal: parseFloat(areaTotal as string),
      areaCovered: parseFloat(areaCovered as string),
      roomsTotal: parseInt(roomsTotal as string),
      bathrooms: parseInt(bathrooms as string),
      rooms: parseInt(rooms as string),
      yearsBuilt: parseInt(yearsBuilt as string),
      propertyFacing,
      orientation,
      carport: parseInt(carport as string),
      ownerId,
      availableAsOf,
      constructionYear: parseInt(constructionYear as string),
      buildingCondition,
      streetFrontageWidth: parseInt(streetFrontageWidth as string),
      numberOfFrontages: parseInt(numberOfFrontages as string),
      coveredParkingSpaces: parseInt(coveredParkingSpaces as string),
      outdoorParkingSpaces: parseInt(outdoorParkingSpaces as string),
      surroundingsType,
      livingArea: parseInt(livingArea as string),
      livingRoomSurface: parseInt(livingRoomSurface as string),
      kitchenType,
      kitchenSurface: parseInt(kitchenSurface as string),
      bedrooms: parseInt(bedrooms as string),
      bedroom1Surface: parseInt(bedroom1Surface as string),
      bedroom2Surface: parseInt(bedroom2Surface as string),
      bedroom3Surface: parseInt(bedroom3Surface as string),
      bedroom4Surface: parseInt(bedroom4Surface as string),
      bedroom5Surface: parseInt(bedroom5Surface as string),
      showerRooms: parseInt(showerRooms as string),
      toilets: parseInt(toilets as string),
      officeSurface: parseInt(officeSurface as string),
      office,
      professionalSpaceSurface: parseInt(professionalSpaceSurface as string),
      attic,
      furnished,
      heatingType,
      surfaceOfThePlot: parseInt(surfaceOfThePlot as string),
      connectionToSewerNetwork,
      gasWaterElectricity,
      gardenSurface: parseInt(gardenSurface as string),
      terraceSurface: parseInt(terraceSurface as string),
      elevator,
      accessibleForDisabled,
      tvCable,
      visioPhone,
      swimmingPool,
      totalGroundFloorBuildable: parseInt(totalGroundFloorBuildable as string),
      floodZoneType,
    },
  })
  return NextResponse.json({ message: 'Files Created' })
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { propertyId: string } },
) {
  const session = await getServerSideSession()
  if (!session) {
    return NextResponse.json({ message: 'Not authenticated', status: 401 })
  }
  const property = await prisma.property.findUnique({
    where: {
      id: parseInt(params.propertyId),
      ownerId: parseInt(session.user.id),
    },
  })
  if (!property) {
    return NextResponse.json({ message: 'Property not found', status: 404 })
  }
  await prisma.property.delete({
    where: {
      id: parseInt(params.propertyId),
    },
  })
}

const saveFile = async (file: File) => {
  const path = getPath(file.name)
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  await writeFile(path, buffer)
  return path
}

// TODO: this only works on my pc, have to see how to handle the folder structure
// on a production server, maybe store the files in a complete different folder
// outside the project so it doesn't get deleted on redeploy
const getPath = (filename: string) => {
  const currentDate = new Date()
  const formattedDate = format(currentDate, 'yyyy-MM-dd') // Using date-fns to format the date
  const uploadDir = path.join(process.env.FILES_DIR ?? '', formattedDate)
  mkdirSync(uploadDir, { recursive: true })
  return path.join(uploadDir, filename)
}
