import prisma from "@/lib/prismaClient";
import { OperationType, PropertyType } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const priceMin = request.nextUrl.searchParams.get('priceMin');
  const priceMax = request.nextUrl.searchParams.get('priceMax');
  const propertyType = request.nextUrl.searchParams.get('propertyType');
  const operationType = request.nextUrl.searchParams.get('operationType');
  const sizeMin = request.nextUrl.searchParams.get('sizeMin');
  const sizeMax = request.nextUrl.searchParams.get('sizeMax');
  const bedrooms = request.nextUrl.searchParams.get('bedrooms');
  const bathrooms = request.nextUrl.searchParams.get('bathrooms');

  const priceQuery = priceMin && priceMax ? {
    gte: parseInt(priceMin),
    lte: parseInt(priceMax),
  } : priceMin ? { gte: parseInt(priceMin) } : priceMax ? { lte: parseInt(priceMax) } : null

  const sizeQuery = sizeMin && sizeMax ? {
    gte: parseInt(sizeMin),
    lte: parseInt(sizeMax),
  } : sizeMin ? { gte: parseInt(sizeMin) } : sizeMax ? { lte: parseInt(sizeMax) } : null

  const operationTypeQuery: OperationType | {} = operationType ? operationType : {}
  const typeQuery: PropertyType | {} = propertyType ? propertyType : {}

  const data = await prisma.property.findMany({
    where: {
      price: { ...priceQuery },
      type: typeQuery,
      operationType: operationTypeQuery,
      areaCovered: {...sizeQuery},
      ...(bedrooms && {bedrooms: parseInt(bedrooms)}),
      ...(bathrooms && {bathrooms: parseInt(bathrooms)}),
    }
  })

  return Response.json({ data })
}
