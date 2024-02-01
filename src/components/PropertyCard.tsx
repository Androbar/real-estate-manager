import { PROPERTY_IMAGES } from "@/constants";
import { formatNumber } from "@/utils/utils";
import { Card,Link, Image,Text, CardBody, Heading, Badge, HStack, Divider, Box } from "@chakra-ui/react";
import { Property } from "@prisma/client";
import { MdOutlineAttachMoney } from "react-icons/md";

export const PropertyCard = ({property}: {property: Property}) => {
    const image = PROPERTY_IMAGES[0]
    return (
      <Link href={`/properties/${property.slug}`} _hover={{textDecoration: 'none'}}>
        <Card
          sx={{cursor: 'pointer', transition: 'all 0.2s ease-in-out'}}
          _hover={{
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.2)'
          }}
        >
          <CardBody p={0}>
            <Box>
              <Image alt={image.caption} src={image.url} w={'100%'} h={'150px'} objectFit={'cover'}/>
            </Box>
            <Box p={3}>
              <Heading size='sm' mt={3}>{property.name}</Heading>
              <Badge colorScheme={property.operationType === 'SALE' ? 'green': 'purple'}>For {property.operationType}</Badge>
              <Text>{property.address} - {property.city}</Text>
              <HStack alignItems={'center'} gap={1}>
                <MdOutlineAttachMoney size={25}/>
                <Text>{formatNumber(property.price)}{property.price && property.operationType === 'RENT' && '/Month'}</Text>
              </HStack>
              <Divider />
              <Text>For control of filters</Text>
              <Text>Property Type: {property.type}</Text>
              <Text>Property Size: {property.areaTotal}</Text>
              <Text>Bedrooms: {property.bedrooms}</Text>
              <Text>Bathrooms: {property.bathrooms}</Text>
            </Box>
          </CardBody>
        </Card>
      </Link>
    );
  };