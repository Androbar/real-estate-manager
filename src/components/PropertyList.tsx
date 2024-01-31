'use client'

import { useProperties } from '@/hooks/useProperties';
import { Box } from '@chakra-ui/react';
import { Property } from '@prisma/client';

export const PropertiesList = ({properties}: {properties: Property[]}) => {
  return (
    <Box>
      {properties.map((property: Property) => (
        <div key={property.id}>
          <h1>{property.name}</h1>
          <p>{property.address}</p>
          <p>poperty card</p>
        </div>
      ))}
    </Box>
  );
};
