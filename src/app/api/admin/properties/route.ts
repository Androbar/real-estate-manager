import { writeFile } from 'fs/promises'
import { type NextRequest, NextResponse } from 'next/server'
import { format } from 'date-fns'
import path from 'path'
import prisma from '@/lib/prismaClient'
import fs from 'fs'

export async function POST(req: NextRequest) {
  const form = await req.formData()

  // I have to prepare the data for update the property and the files at the same times
  const property = JSON.parse(form.get('body') as string)
  const {
    name,
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

  const slug = await generateUniqueSlug(name as string)

  const newProperty = await prisma.property.create({
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

  const files: File[] | null = form.getAll('files') as unknown as File[]
  const propertyImagesIds = []
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
              propertyId: newProperty.id,
              order: parseInt(propertyImages[i].order as string),
            },
          },
        },
      })
      propertyImagesIds.push(image.id)
      console.log('image.filename', image.filename)
    }
  }

  return NextResponse.json({ message: 'Files Created' })
}

const saveFile = async (file: File): Promise<string> => {
  const { filePath, relativeFilePath } = getPath(file.name)
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  await writeFile(filePath, buffer)
  return relativeFilePath
}

type Paths = {
  filePath: string
  relativeFilePath: string
}

const getPath = (filename: string): Paths => {
  const currentDate = new Date()
  const formattedDate = format(currentDate, 'yyyy-MM-dd')
  const uploadDirBaseFolder = path.join(
    process.env.ROOT_DIR ?? '',
    process.env.FILES_DIR ?? '',
  )
  const uploadDir = path.join(uploadDirBaseFolder, formattedDate)
  const uploadDirPath = path.join(process.env.FILES_DIR ?? '', formattedDate)
  fs.mkdirSync(uploadDir, { recursive: true })

  let filePath = path.join(uploadDir, filename)
  let relativeFilePath = path.join(uploadDirPath, filename)

  let count = 1
  const fileExtension = path.extname(filename)
  const baseName = path.basename(filename, fileExtension)

  while (fs.existsSync(filePath)) {
    const newFilename = `${baseName}-${count}${fileExtension}`
    filePath = path.join(uploadDir, newFilename)
    relativeFilePath = path.join(uploadDirPath, newFilename)
    count += 1
  }

  return { filePath, relativeFilePath }
}

const slugify = (name: string): string => {
  return name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
}

const generateUniqueSlug = async (name: string): Promise<string> => {
  const slug = slugify(name)
  let uniqueSlug = slug
  let count = 1

  // Check if the slug already exists
  let existingProperty = await prisma.property.findUnique({
    where: { slug: uniqueSlug },
  })

  // If the slug exists, append a numeric suffix and check again
  while (existingProperty) {
    uniqueSlug = `${slug}-${count}`
    count += 1

    existingProperty = await prisma.property.findUnique({
      where: { slug: uniqueSlug },
    })
  }

  return uniqueSlug
}
