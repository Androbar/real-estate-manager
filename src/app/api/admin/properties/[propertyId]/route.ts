import { writeFile } from 'fs/promises'
import { type NextRequest, NextResponse } from 'next/server'
import { format } from 'date-fns'
import path from 'path'
import { mkdirSync } from 'fs'

export async function POST(req: NextRequest) {
  const form = await req.formData()

  // I have to prepare the data for update the property and the files at the same times
  const files: File[] | null = form.getAll('files') as unknown as File[]
  if (files) {
    for (const file of files) {
      const path = await saveFile(file)
      console.log('path', path)
    }
  }

  return NextResponse.json({ message: 'Files Created' })
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
