'use client'
import {
  Container,
  Button,
  useDisclosure,
  Grid,
  GridItem,
  Box,
  Tooltip,
  Icon,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DeleteModal from '@/components/client/DeleteModal'
import type { ExtendedSession } from '@/types/auth'
import { FaPlus } from 'react-icons/fa'
import type { PropertyWithContacts } from '@/types/properties'

export default function EditPropertiesClientPage({
  session,
  properties,
}: {
  session: ExtendedSession
  properties: PropertyWithContacts[]
}) {
  const router = useRouter()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [propertyToDelete, setPropertyToDelete] =
    useState<PropertyWithContacts | null>(null)

  const handleDelete = (property: PropertyWithContacts) => {
    setPropertyToDelete(property)
    onOpen()
  }

  return (
    <Container maxW="6xl" p={5} position="relative">
      <Tooltip label="add a new property" aria-label="add a new property">
        <Button
          as={Box}
          position="fixed"
          bottom={6}
          right={6}
          bg="green.400"
          color="white"
          borderRadius="full"
          p={8}
          onClick={() => {
            router.push('/admin/properties/new')
          }}
          transition={'0.2s ease-in-out'}
          _hover={{
            bg: 'green.500',
            cursor: 'pointer',
          }}
        >
          <Icon as={FaPlus} />
        </Button>
      </Tooltip>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
        px={5}
        py={5}
        borderY={'1px solid black'}
      >
        <GridItem display={'flex'} alignItems={'center'}>
          Name
        </GridItem>
        <GridItem display={'flex'} alignItems={'center'}>
          Address
        </GridItem>
        <GridItem display={'flex'} alignItems={'center'}>
          Operation Type
        </GridItem>
        <GridItem display={'flex'} alignItems={'center'}>
          Property Type
        </GridItem>
      </Grid>

      {properties.map((property, index) => (
        <Grid
          templateColumns="repeat(5, 1fr)"
          bgColor={index % 2 === 0 ? 'white' : 'gray.500'}
          gap={4}
          key={index}
          px={5}
        >
          <GridItem display={'flex'} alignItems={'center'}>
            {property.name}
          </GridItem>
          <GridItem display={'flex'} alignItems={'center'}>
            {property.address}
          </GridItem>
          <GridItem display={'flex'} alignItems={'center'}>
            {property.operationType}
          </GridItem>
          <GridItem display={'flex'} alignItems={'center'}>
            {property.type}
          </GridItem>
          <GridItem display={'flex'} alignItems={'center'} gap={4} m={4}>
            <Button
              onClick={() => {
                router.push(`/admin/properties/${property.id}/contacts`)
              }}
            >
              Contacts ({property?.contacts?.length || 0})
            </Button>
            <Button
              onClick={() => {
                router.push(`/admin/properties/${property.id}`)
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                handleDelete(property)
              }}
            >
              Delete
            </Button>
          </GridItem>
        </Grid>
      ))}
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        propertyToDelete={propertyToDelete}
      />
    </Container>
  )
}
