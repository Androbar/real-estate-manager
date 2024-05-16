import { NextResponse, type NextRequest } from 'next/server'
import multer from 'multer'
import nextConnect from 'next-connect'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(
  request: NextRequest,
  { params }: { params: { propertyId: string } },
) {
  const { propertyId } = params
  console.log(request.headers)
  const body = await request.formData()
  console.log('body', body)
  // parse the files from body.propertyImages[n].image.file
  // and assign filename and url to propertyImages[n].image
  // remove the key 'file' from body.propertyImages[n].image.file
  // also move the image to the public/images/properties folder
  // add the key 'url' to body.propertyImages[n].image
  // Example of handling file uploads and modifying the request body
  // for (let i = 0; i < body.propertyImages.length; i++) {
  //   const file: File = body.propertyImages[i].image.file // Your original file object
  //   console.log('file', file)
  //   if (!file) {
  //     continue
  //   }
  //   // const buffer = Buffer.from(await file.arrayBuffer())
  //   // const filename = body.propertyImages[i].image.filename
  //   // const fileUrl = `public/uploads/${filename}`
  //   // try {
  //   //   await writeFile(path.join(process.cwd(), fileUrl), buffer)
  //   // } catch (error) {
  //   //   console.log('Error occured ', error)
  //   //   return NextResponse.json({ Message: 'Failed', status: 500 })
  //   // }

  //   // // Update body with new filename and URL, remove 'file' key
  //   // body.propertyImages[i].image.url = fileUrl
  //   // delete body.propertyImages[i].image.file // Remove the 'file' key
  // }
  // console.log('new body', body)
  // const updatedProperty = await prisma?.property.update({
  //   where: {
  //     id: parseInt(propertyId),
  //   },
  //   data: body,
  // })

  // return NextResponse.json({ data: { ...updatedProperty } })
  return NextResponse.json({
    data: { test: `test for property id ${propertyId}` },
  })
}
