'use client'

import { PropertiesFilter } from '@/components/PropertiesFilter'
import { PropertiesList } from '@/components/PropertyList'
import { useProperties } from '@/hooks/useProperties'
import { Grid, GridItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { PropertyListMap } from '../PropertyListMap'
import type { Property } from '@prisma/client'

export type FilterParams = {
  priceMin?: string
  priceMax?: string
  propertyType?: string
  operationType?: string
  sizeMin?: string
  sizeMax?: string
  bedrooms?: string
  bathrooms?: string
}

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
  const [filterParams, setFilterParams] =
    useState<FilterParams>(defaultFilterParams)
  const { data, isLoading, isError } = useProperties(filterParams)
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
        {!isLoading && !isError && !data?.data.length && (
          <div>No properties found</div>
        )}
        {!isLoading && !isError && data?.data.length && (
          <ListMapSwitcher isMapView={isMapView} properties={data?.data} />
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
