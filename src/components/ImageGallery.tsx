'use client'

import { Box, Modal, ModalContent, ModalOverlay, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons'
import type { PropertyImagesWithImage } from '@/types/properties'

export const ImageGallery = ({
  images,
  isOpen,
  onClose,
  transitionDuration = 300, // default transition duration in milliseconds
}: ImageGalleryProps) => {
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0)
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleClickNext()
      } else if (event.key === 'ArrowLeft') {
        handleClickPrevious()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentImageIdx])

  const changeImage = (newIdx: number) => {
    setIsTransitioning(true) // Start fading out

    setTimeout(() => {
      setCurrentImageIdx(newIdx) // Change the image after half of the transition duration

      setTimeout(() => {
        setIsTransitioning(false) // Start fading in
      }, transitionDuration / 2)
    }, transitionDuration / 2)
  }

  const handleClickNext = () => {
    const nextIdx =
      currentImageIdx + 1 >= images.length ? 0 : currentImageIdx + 1
    changeImage(nextIdx)
  }

  const handleClickPrevious = () => {
    const prevIdx =
      currentImageIdx - 1 < 0 ? images.length - 1 : currentImageIdx - 1
    changeImage(prevIdx)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onEsc={onClose}
      size="full"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <Box position={'relative'} maxH={'100%'} w={'100%'} overflow={'hidden'}>
          {images.map((image, idx) => (
            <Box
              position="relative"
              key={image.image.id}
              boxSize="100%"
              overflow={'hidden'}
              display={'grid'}
            >
              <Image
                alt={image.image.caption || ''}
                src={image.image.url}
                objectFit={'cover'}
                justifySelf={'center'}
                alignSelf={'center'}
                display={idx === currentImageIdx ? 'block' : 'none'}
                style={{
                  transition: `all ${transitionDuration}ms`,
                  opacity: isTransitioning ? 0 : 1,
                }}
              />
            </Box>
          ))}
          <Box
            position={'absolute'}
            top={'50%'}
            left={'50px'}
            translateX={'-50%'}
            onClick={handleClickPrevious}
          >
            <ArrowBackIcon boxSize={'50px'} />
          </Box>
          <Box
            position={'absolute'}
            top={'50%'}
            right={'50px'}
            translateX={'-50%'}
            onClick={handleClickNext}
          >
            <ArrowForwardIcon boxSize={'50px'} />
          </Box>
          <Box
            position={'absolute'}
            top={'20px'}
            right={'20px'}
            onClick={onClose}
          >
            <CloseIcon />
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}

export interface ImageGalleryProps {
  images: PropertyImagesWithImage[]
  isOpen: boolean
  onClose: () => void
  transitionDuration?: number
}
