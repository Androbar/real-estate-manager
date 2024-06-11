import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react'
import type { Property } from '@prisma/client'
import prisma from '@/lib/prismaClient'

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  propertyToDelete: Property | null
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  propertyToDelete,
}: DeleteModalProps) => {
  const handleDelete = async () => {
    if (propertyToDelete) {
      await prisma.property.delete({
        where: {
          id: propertyToDelete.id,
        },
      })
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Property</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {propertyToDelete && (
            <Text>
              Are you sure you want to delete the property &quot;
              {propertyToDelete.name}&quot;?
            </Text>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="ghost" onClick={handleDelete}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteModal
