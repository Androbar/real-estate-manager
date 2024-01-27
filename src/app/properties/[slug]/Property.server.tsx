// src/app/properties/[slug]/Property.server.tsx
import { ContactForm } from "@/components/ContactForm";
import { PropertyImages } from "@/components/PropertyImages";
// import PropertyMap from "@/components/PropertyMap";
import { MAX_WIDTH, PROPERTY_IMAGES, PROPERTY_TYPES } from "@/constants";
import prisma from "@/lib/prismaClient";
import { Box, Container, Divider, Grid, GridItem, HStack, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { BiSolidCarGarage } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { FaShower } from "react-icons/fa";
import { LuBuilding } from "react-icons/lu";
import { MdOutlineBed, MdOutlineMeetingRoom } from "react-icons/md";
import { PiHouse } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";
import dynamic from 'next/dynamic';
import { PropertyFullAttributes } from "@/components/PropertyFullAttributes";

const PropertyMap = dynamic(() => import('@/components/PropertyMap'), { ssr: false });

const PropertyServerComponent = async ({ slug }: { slug: string }) => {
  const property = await prisma.property.findUnique({
    where: { slug },
  });

  if (!property) {
    return <div>Property not found</div>;
  }
  const location = property.location ? property.location.split(',') : null;
  const latitude = location ? parseFloat(location[0]) : null;
  const longitude = location ? parseFloat(location[1]) : null;

  return (
    <Container maxW={MAX_WIDTH} p={4} m={'0 auto'}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={8}>
          <Box w={'100%'}>
            <PropertyImages images={PROPERTY_IMAGES} />
            <HStack justifyContent={'space-between'} alignItems={'stretch'}>
              <VStack gap={0}>
                <Heading as='h1' mt={5}>{property.name}</Heading>
                <Text as="span">{property.address}</Text>
              </VStack>
              <VStack gap={0}>
                <HStack alignItems={'space-between'}>
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
            <Divider my={5} />
            <PropertyMap latitude={latitude} longitude={longitude} />
            <Divider my={5} />
            <Tabs isFitted variant='enclosed'>
              <TabList mb='1em'>
                <Tab>Overview</Tab>
                <Tab>Price</Tab>
                <Tab>Requirements</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <PropertyFullAttributes property={property} />
                </TabPanel>
                <TabPanel>
                  <Text>two!</Text>
                </TabPanel>
                <TabPanel>
                  <Text>two!</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <ContactForm propertyId={property.id} />
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