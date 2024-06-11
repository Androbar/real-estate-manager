import type { PropertyWithContacts } from '@/types/properties'
import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react'

export default function ClientPage({
  property,
}: {
  property: PropertyWithContacts
}) {
  return (
    <Container maxW="6xl" p={5} position="relative">
      <VStack spacing={4} align="start">
        {property.contacts.map(contact => (
          <Box
            key={contact.id}
            p={4}
            borderWidth={1}
            borderRadius={8}
            boxShadow="md"
          >
            <Flex justifyContent="space-between" mb={2}>
              <Text fontWeight="bold">{contact.name}</Text>
              <Text>{new Date(contact.createdAt).toLocaleString()}</Text>
            </Flex>
            <Text>{contact.message}</Text>
            {contact.email && <Text>Email: {contact.email}</Text>}
            {contact.phone && <Text>Phone: {contact.phone}</Text>}
          </Box>
        ))}
      </VStack>
    </Container>
  )
}
