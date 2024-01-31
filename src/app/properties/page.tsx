'use client'

import { PropertiesFilter } from '@/components/PropertiesFilter';
import { PropertiesList } from '@/components/PropertyList';
import { useProperties } from '@/hooks/useProperties';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';

export type FilterParams = {
  priceMin?: string;
  priceMax?: string;
  propertyType?: string;
  operationType?: string;
  sizeMin?: string;
  sizeMax?: string;
  bedrooms?: string;
  bathrooms?: string;
}

const PropertiesPage: React.FC = () => {
  const [filterParams, setFilterParams] = useState<FilterParams>({});

  const { data, isLoading, isError } = useProperties(filterParams);

  return (
    <Grid templateColumns={'repeat(12, 1fr)'} gap={6}>
      <GridItem colSpan={3}>
        <PropertiesFilter
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />
      </GridItem>
      <GridItem colSpan={9}>
        {isLoading && <div>Loading...</div>}
        {isError && <div>An error occurred</div>}
        {!isLoading &&!isError &&!data?.data.length && <div>No properties found</div>}
        {!isLoading &&!isError && data?.data.length && <PropertiesList properties={data?.data} />}
      </GridItem>
    </Grid>
  )
};

export default PropertiesPage;