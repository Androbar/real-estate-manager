'use client'

import { Badge, Box, Card, CardBody, Divider, Grid, GridItem, HStack, Heading, Link, Text } from '@chakra-ui/react';
import { Property } from '@prisma/client';
import { Image } from '@chakra-ui/react'
import { PROPERTY_IMAGES } from '@/constants';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { formatNumber } from '@/utils/utils';
import { PropertyCard } from './PropertyCard';

export const PropertiesList = ({properties}: {properties: Property[]}) => {
  return (
    <Grid templateColumns={'repeat(12, 1fr)'} gap={6}>
      {properties?.map((property: Property) => (
        <GridItem key={property.id} colSpan={4}>
          <PropertyCard property={property} />
        </GridItem>
      ))}
    </Grid>
  );
};
