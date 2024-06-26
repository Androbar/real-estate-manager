import { ContactForm } from '@/components/ContactForm'
import { PropertyImages } from '@/components/PropertyImages'
import { MAX_WIDTH, PROPERTY_TYPES } from '@/constants'
import prisma from '@/lib/prismaClient'
import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BiSolidCarGarage } from 'react-icons/bi'
import { CiCalendar } from 'react-icons/ci'
import { FaShower } from 'react-icons/fa'
import { LuBuilding } from 'react-icons/lu'
import { MdOutlineBed, MdOutlineMeetingRoom } from 'react-icons/md'
import { PiHouse } from 'react-icons/pi'
import { RxDimensions } from 'react-icons/rx'
import dynamic from 'next/dynamic'
import { PropertyFullAttributes } from '@/components/PropertyFullAttributes'
import { PropertyPriceInformation } from '@/components/PropertyPriceInformation'

const PropertyMap = dynamic(
  async () => await import('@/components/PropertyMap'),
  {
    ssr: false,
  },
)

const PropertyServerComponent = async ({ slug }: { slug: string }) => {
  const property = await prisma.property.findUnique({
    where: { slug },
    include: {
      propertyImages: {
        include: {
          image: true,
        },
      },
    },
  })

  if (!property) {
    return <div>Property not found</div>
  }
  // const location = property.location ? property.location.split(':') : null
  // const latitude = location ? parseFloat(location[0]) : null
  // const longitude = location ? parseFloat(location[1]) : null
  const latitude = property.latitude ? parseFloat(property.latitude) : null
  const longitude = property.longitude ? parseFloat(property.longitude) : null
  return (
    <Container maxW={MAX_WIDTH} p={4} m={'0 auto'}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 12, lg: 8 }}>
          <Box w={'100%'}>
            <PropertyImages images={property.propertyImages} />
            <HStack justifyContent={'space-between'} alignItems={'stretch'}>
              <VStack gap={0}>
                <Heading as="h1" mt={5}>
                  {property.name}
                </Heading>
                <Text as="span">{property.address}</Text>
              </VStack>
              <VStack
                gap={0}
                alignItems={'center'}
                justifyContent={'center'}
                gridGap={1}
              >
                <HStack alignItems={'center'}>
                  {renderPropertyTypeIcon(property.type)}
                  <Text>{PROPERTY_TYPES[property.type].label}</Text>
                </HStack>
                <HStack>
                  <Text>For {property.operationType}</Text>
                </HStack>
              </VStack>
            </HStack>
            <Divider my={5} />
            <HStack gap={{ base: 2, md: 5 }}>
              <HStack gap={{ base: 1, md: 2 }}>
                <Box h={{ base: '15px', md: '25px' }} minW={'15px'}>
                  <RxDimensions size={'100%'} />
                </Box>{' '}
                <Text fontSize={{ base: 'xs', md: 'md' }}>
                  {property.areaTotal}m2
                </Text>
              </HStack>
              <HStack gap={{ base: 1, md: 2 }}>
                <Box h={{ base: '15px', md: '25px' }} minW={'15px'}>
                  <MdOutlineMeetingRoom size={'100%'} />
                </Box>{' '}
                <Text fontSize={{ base: 'xs', md: 'md' }}>
                  {property.roomsTotal}
                </Text>
              </HStack>
              <HStack gap={{ base: 1, md: 2 }}>
                <Box h={{ base: '15px', md: '25px' }} minW={'15px'}>
                  <FaShower size={'100%'} />
                </Box>{' '}
                <Text fontSize={{ base: 'xs', md: 'md' }}>
                  {property.bathrooms}
                </Text>
              </HStack>
              <HStack gap={{ base: 1, md: 2 }}>
                <Box h={{ base: '15px', md: '25px' }} minW={'15px'}>
                  <MdOutlineBed size={'100%'} />
                </Box>{' '}
                <Text fontSize={{ base: 'xs', md: 'md' }}>
                  {property.rooms}
                </Text>
              </HStack>
              <HStack gap={{ base: 1, md: 2 }}>
                <Box h={{ base: '15px', md: '25px' }} minW={'15px'}>
                  <BiSolidCarGarage size={'100%'} />
                </Box>{' '}
                <Text fontSize={{ base: 'xs', md: 'md' }}>
                  {property.carport}
                </Text>
              </HStack>
              <HStack gap={{ base: 1, md: 2 }}>
                <Box h={{ base: '15px', md: '25px' }} minW={'15px'}>
                  <CiCalendar size={'100%'} />
                </Box>{' '}
                <Text fontSize={{ base: 'xs', md: 'md' }}>
                  {property.yearsBuilt} Years
                </Text>
              </HStack>
            </HStack>
            <Divider my={5} />
            <Heading size={'md'} mb={3}>
              About this property
            </Heading>
            <Text>{property.description}</Text>
            <Divider my={5} />
            <PropertyMap latitude={latitude} longitude={longitude} />
            <Divider my={5} />
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Overview</Tab>
                <Tab>Price</Tab>
                <Tab>Requirements</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <PropertyFullAttributes property={property} />
                </TabPanel>
                <TabPanel>
                  <PropertyPriceInformation property={property} />
                </TabPanel>
                <TabPanel>
                  <Text>Other requirements list</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <ContactForm propertyId={property.id} />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default PropertyServerComponent

const renderPropertyTypeIcon = (
  type: 'HOUSE' | 'APARTMENT' | 'OFFICE' | 'WAREHOUSE' | 'LAND',
) => {
  switch (type) {
    case 'HOUSE':
      return <PiHouse size={'25px'} />
    case 'APARTMENT':
      return <LuBuilding size={'25px'} />
  }
}
