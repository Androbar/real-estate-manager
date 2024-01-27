// src/app/properties/[slug]/Property.server.tsx
import { ContactForm } from "@/components/ContactForm";
import { PropertyImages } from "@/components/PropertyImages";
import { MAX_WIDTH, PROPERTY_IMAGES, PROPERTY_TYPES } from "@/constants";
import prisma from "@/lib/prismaClient";
import { Box, Container, Divider, Grid, GridItem, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { BiSolidCarGarage } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { FaShower } from "react-icons/fa";
import { LuBuilding } from "react-icons/lu";
import { MdOutlineAttachMoney, MdOutlineBed, MdOutlineMeetingRoom } from "react-icons/md";
import { PiHouse } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";

const PropertyServerComponent = async ({ slug }: { slug: string }) => {
  const property = await prisma.property.findUnique({
    where: { slug },
  });

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <Container maxW={MAX_WIDTH} p={4} m={'0 auto'}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={8}>
          <Box w={'100%'}>
            <PropertyImages images={PROPERTY_IMAGES} />
            <HStack justifyContent={'space-between'}>
              <VStack gap={0}>
                <Heading as='h1' mt={5}>{property.name}</Heading>
                <Text as="span">{property.address}</Text>
              </VStack>
              <VStack gap={0}>
                <HStack>
                  {renderPropertyTypeIcon(property.type)}
                  <Text>{PROPERTY_TYPES[property.type].label}</Text>
                </HStack>
                <HStack>
                  <Text>{property.operationType}</Text>
                </HStack>
              </VStack>
            </HStack>
            <Divider my={5} />
            <HStack gap={5}>
              <HStack><RxDimensions size={25} /> <Text>{property.areaTotal}m2</Text></HStack>
              <HStack><MdOutlineMeetingRoom size={25} /> <Text>{property.roomsTotal}</Text></HStack>
              <HStack><FaShower size={25} /> <Text>{property.bathrooms}</Text></HStack>
              <HStack><MdOutlineBed size={25} /> <Text>{property.rooms}</Text></HStack>
              <HStack><BiSolidCarGarage size={25} /> <Text>{property.carport}</Text></HStack>
              <HStack><CiCalendar size={25} /> <Text>{property.yearsBuilt} Years</Text></HStack>
            </HStack>
            <Divider my={5} />
            <Heading size={'md'} mb={3}>About this property</Heading>
            <Text>{property.description}</Text>
            <Text>Address: {property.address}</Text>
            <Text>Tabs con diferentes categorias con informacion</Text>
            <Text>Overview, precio, detalles, mapa, requisitos</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <ContactForm />
        </GridItem>

      </Grid>


    </Container>
  );
}

export default PropertyServerComponent;

const renderPropertyTypeIcon = (type: 'HOUSE' | 'APARTMENT' | 'OFFICE' | 'WAREHOUSE' | 'LAND') => {
  switch (type) {
    case 'HOUSE':
      return <PiHouse />;
    case 'APARTMENT':
      return <LuBuilding />;
  }
}