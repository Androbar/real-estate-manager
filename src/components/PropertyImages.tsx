'use client'

import { Box, Grid, GridItem, useDisclosure, Image } from '@chakra-ui/react'
import { ImageGallery } from './ImageGallery'

export const PropertyImages = ({
  images,
}: {
  images: Array<{
    id: number
    filename: string
    url: string
    caption: string
    order: number
  }>
}) => {
  const shownImages = images.slice(0, 3).sort((a, b) => a.order - b.order)
  const firstImage = shownImages.shift()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      position="relative"
      width="full"
      overflow={'hidden'}
      borderRadius={'10px'}
      onClick={onOpen}
      cursor={'pointer'}
    >
      <Grid
        gridTemplateColumns={'1fr 1fr'}
        gridTemplateRows={'200px 200px'}
        gap={2}
      >
        <GridItem colSpan={1} rowSpan={2}>
          <Box
            position="relative"
            boxSize="100%"
            overflow={'hidden'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Image
              alt={firstImage?.caption}
              src={firstImage?.url}
              objectFit={'cover'}
            />
          </Box>
        </GridItem>
        {shownImages.map(image => (
          <GridItem colSpan={1} rowSpan={1} key={image.id}>
            <Box
              position="relative"
              boxSize="100%"
              overflow={'hidden'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image alt={image.caption} src={image.url} objectFit={'cover'} />
            </Box>
          </GridItem>
        ))}
      </Grid>
      <ImageGallery images={images} isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
