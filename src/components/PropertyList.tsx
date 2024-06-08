'use client'

import { Grid, GridItem } from '@chakra-ui/react'
import type { Property } from '@prisma/client'
import { PropertyCard } from './PropertyCard'

export const PropertiesList = ({ properties }: { properties: Property[] }) => {
  return (
    <Grid templateColumns={'repeat(12, 1fr)'} gap={6}>
      {properties?.map((property: Property) => (
        <GridItem key={property.id} colSpan={4}>
          <PropertyCard property={property} />
        </GridItem>
      ))}
    </Grid>
  )
}
