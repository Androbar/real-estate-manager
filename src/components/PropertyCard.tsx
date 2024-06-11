import { OPERATION_TYPES, PROPERTY_IMAGES, PROPERTY_TYPES } from '@/constants'
import type { BookmarkProperty } from '@/types/properties'
import { formatNumber } from '@/utils/utils'
import {
  Card,
  Link,
  Image,
  Text,
  CardBody,
  Heading,
  Badge,
  HStack,
  Divider,
  Box,
  Grid,
  IconButton,
  Tooltip,
} from '@chakra-ui/react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import type { Property } from '@prisma/client'

export const PropertyCard = ({
  property,
  doubleSize,
  isBookmarked,
  addBookMark,
  removeBookMark,
}: {
  property: Property
  doubleSize?: boolean
  isBookmarked?: boolean
  addBookMark?: (item: BookmarkProperty) => void
  removeBookMark?: (id: string) => void
}) => {
  const image = PROPERTY_IMAGES[0]
  return (
    <Link
      href={`/properties/${property.slug}`}
      _hover={{ textDecoration: 'none' }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}
        _hover={{
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
        }}
      >
        <CardBody p={0}>
          {doubleSize ? (
            <Box position={'relative'} padding={'0.75%'}>
              <Image
                alt={image.caption}
                src={image.url}
                position={'absolute'}
              />
            </Box>
          ) : (
            <Box position={'relative'}>
              <Image
                alt={image.caption}
                src={image.url}
                w={'100%'}
                h={'200px'}
                objectFit={'cover'}
              />
              <Box position={'absolute'} top={2} right={2} zIndex={1}>
                <Tooltip
                  label={
                    isBookmarked ? 'Remove from Bookmark' : 'Add to Bookmark'
                  }
                >
                  <IconButton
                    aria-label={
                      isBookmarked ? 'Remove from Bookmark' : 'Add to Bookmark'
                    }
                    icon={isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
                    onClick={
                      isBookmarked
                        ? () => removeBookMark?.(property.id.toString())
                        : () =>
                            addBookMark?.({
                              id: property.id.toString(),
                              title: property.name,
                            })
                    }
                  />
                </Tooltip>
              </Box>
              <Box
                position={'absolute'}
                bottom={0}
                right={0}
                w={'100%'}
                zIndex={1}
              >
                <HStack gap={2} justifyContent={'flex-end'} p={1}>
                  <Badge
                    colorScheme={OPERATION_TYPES[property.operationType].color}
                    p={1}
                  >
                    {property.operationType}
                  </Badge>
                  <Badge
                    colorScheme={PROPERTY_TYPES[property.type].color}
                    p={1}
                  >
                    {property.type}
                  </Badge>
                </HStack>
              </Box>
            </Box>
          )}
          <Box p={3}>
            <Heading size="sm" mt={3} noOfLines={1}>
              {property.name}
            </Heading>
            <Text fontSize={'xs'} color={'gray.500'}>
              {property.address} - {property.city}
            </Text>
            <HStack alignItems={'center'} gap={1}>
              <Text>
                $ {formatNumber(property.price)}
                {property.price &&
                  property.operationType === 'RENT' &&
                  '/Month'}
              </Text>
            </HStack>
            <Divider my={2} />
            <Box fontSize={'xs'}>
              <Grid templateColumns={'repeat(2, 1fr)'} gap={1}>
                {property.rooms !== null ? (
                  property.rooms > 1 ? (
                    <Text>{property.rooms} Bedrooms</Text>
                  ) : (
                    <Text>{property.rooms} Bedroom</Text>
                  )
                ) : null}
                {property.bathrooms !== null ? (
                  property.bathrooms > 1 ? (
                    <Text>{property.bathrooms} Bathrooms</Text>
                  ) : (
                    <Text>{property.bathrooms} Bathroom</Text>
                  )
                ) : null}
                {property.carport !== null ? (
                  property.carport > 1 ? (
                    <Text>{property.carport} Garages</Text>
                  ) : (
                    <Text>{property.carport} Garage</Text>
                  )
                ) : null}
                <Text>Area {property.areaTotal} m2</Text>
              </Grid>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Link>
  )
}
