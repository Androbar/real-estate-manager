'use client'

import { PropertiesFilter } from '@/components/PropertiesFilter'
import { PropertiesList } from '@/components/PropertyList'
import { Grid, GridItem } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { PropertyListMap } from '../PropertyListMap'
import type { Property } from '@prisma/client'
import { usePropertiesFilterParams } from '@/hooks/useFilteredProperties'

const PropertiesPage = ({
  maxPrice = 1000000,
  maxSize = 1000,
}: {
  maxPrice?: number
  maxSize?: number
}) => {
  const defaultFilterParams = {
    propertyType: '',
    operationType: '',
  }
  const { filterParams, setFilterParams, properties, isLoading, isError } =
    usePropertiesFilterParams(defaultFilterParams)

  const searchParams = useSearchParams()
  const isMapView = searchParams.get('map') === 'true'

  return (
    <Grid templateColumns={'repeat(12, 1fr)'} gap={6}>
      <GridItem colSpan={3}>
        <PropertiesFilter
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          maxPrice={maxPrice}
          maxSize={maxSize}
        />
      </GridItem>
      <GridItem colSpan={9}>
        {isLoading && <div>Loading...</div>}
        {isError && <div>An error occurred</div>}
        {!isLoading && !isError && !properties.length && (
          <div>No properties found</div>
        )}
        {!isLoading && !isError && properties.length && (
          <ListMapSwitcher isMapView={isMapView} properties={properties} />
        )}
      </GridItem>
    </Grid>
  )
}

const ListMapSwitcher = ({
  isMapView,
  properties,
}: {
  isMapView: boolean
  properties: Property[]
}) => {
  if (isMapView) {
    return <PropertyListMap properties={properties} />
  }
  return <PropertiesList properties={properties} />
}

export default PropertiesPage
