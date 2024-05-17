import { FormidableError, parseForm } from '@/lib/parse-form'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export const config = {
  api: {
    bodyParser: false,
  },
}

interface Data {
  name: string
}
// Export the API route with Next.js specific handler
export async function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { fields, files } = await parseForm(req)
    console.log({ fields, files })
    const file = files.media
    const url = Array.isArray(file) ? file.map(f => f.filepath) : 'chupala'
    return NextResponse.json({ data: { url } }, { status: 200 })
  } catch (error) {
    if (error instanceof FormidableError) {
      return NextResponse.json(
        { data: null, error: error.message },
        { status: error.httpCode ?? 400 },
      )
    } else {
      console.error(error)
      return NextResponse.json(
        { data: null, error: 'Internal server error' },
        { status: 500 },
      )
    }
  }
}
