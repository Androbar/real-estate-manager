import { Box, Heading, Text } from '@chakra-ui/react'
import type { Property } from '@prisma/client'

const INFORMATION_TEXT = {
  SALE: 'Price',
  RENT: 'Monthly Rent',
} as const

export const PropertyPriceInformation = ({
  property,
}: {
  property: Property
}) => {
  return (
    <Box>
      <Heading size="md">Price Information</Heading>
      <Text>
        {INFORMATION_TEXT[property.operationType]}: ${property.price}
      </Text>
    </Box>
  )
}
