import prisma from '@/lib/prismaClient'
import { type OperationType, type PropertyType } from '@prisma/client'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const priceMin = request.nextUrl.searchParams.get('priceMin')
  const priceMax = request.nextUrl.searchParams.get('priceMax')
  const propertyType = request.nextUrl.searchParams.get('propertyType')
  const operationType = request.nextUrl.searchParams.get('operationType')
  const sizeMin = request.nextUrl.searchParams.get('sizeMin')
  const sizeMax = request.nextUrl.searchParams.get('sizeMax')
  const bedrooms = request.nextUrl.searchParams.get('bedrooms')
  const bathrooms = request.nextUrl.searchParams.get('bathrooms')

  const priceQuery =
    priceMin && priceMax
      ? {
          gte: parseInt(priceMin),
          lte: parseInt(priceMax),
        }
      : priceMin
        ? { gte: parseInt(priceMin) }
        : priceMax
          ? { lte: parseInt(priceMax) }
          : null

  const sizeQuery =
    sizeMin && sizeMax
      ? {
          gte: parseInt(sizeMin),
          lte: parseInt(sizeMax),
        }
      : sizeMin
        ? { gte: parseInt(sizeMin) }
        : sizeMax
          ? { lte: parseInt(sizeMax) }
          : null

  const operationTypeQuery: OperationType | null =
    isArrayStringLiteralType<OperationType>(operationType, ['RENT', 'SALE'])
      ? operationType
      : null

  const typeQuery: PropertyType | null = isArrayStringLiteralType<PropertyType>(
    propertyType,
    ['APARTMENT', 'HOUSE', 'OFFICE', 'WAREHOUSE', 'LAND'],
  )
    ? propertyType
    : null

  const data = await prisma.property.findMany({
    where: {
      price: { ...priceQuery },
      ...(typeQuery && { type: typeQuery }),
      ...(operationTypeQuery && { operationType: operationTypeQuery }),
      areaCovered: { ...sizeQuery },
      ...(bedrooms && { bedrooms: parseInt(bedrooms) }),
      ...(bathrooms && { bathrooms: parseInt(bathrooms) }),
    },
  })

  return Response.json({ data })
}

function isArrayStringLiteralType<T extends OperationType | PropertyType>(
  value: string | null,
  stringArray: string[],
): value is T {
  if (!value) return false
  return stringArray.includes(value)
}
