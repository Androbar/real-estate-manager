'use client'

import { Grid, GridItem, Heading } from '@chakra-ui/react'
import type { Property } from '@prisma/client'
import { PropertyCard } from './PropertyCard'

export const PropertiesListFeatured = ({
  properties,
}: {
  properties: Property[]
}) => {
  return (
    <>
      <Heading as="h2" size="md" my={4}>
        Featured Properties
      </Heading>
      <Grid
        templateColumns={'repeat(12, 1fr)'}
        templateRows={'repeat(2, 1fr)'}
        gap={6}
      >
        {properties?.map((property: Property, index: number) => (
          <GridItem
            key={property.id}
            rowSpan={index === 0 ? 2 : 1}
            colSpan={index === 0 ? 6 : 3}
          >
            <PropertyCard property={property} />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
