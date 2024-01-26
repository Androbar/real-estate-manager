
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

export const PropertyImages = ({ images }: {
  images: {
    id: number;
    filename: string;
    url: string;
    caption: string;
    order: number;
  }[]
}) => {
  const shownImages = images.slice(0, 3).sort((a, b) => a.order - b.order);
  const firstImage = shownImages.shift();
  return (
    <Box position="relative" width="full" overflow={'hidden'} borderRadius={'10px'}>
      <Grid gridTemplateColumns={'1fr 1fr'} gridTemplateRows={'200px 200px'} gap={2}>
        <GridItem colSpan={1} rowSpan={2}>
          <Box position="relative" boxSize="100%" overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Image alt={firstImage?.caption} src={firstImage?.url} objectFit={'cover'} />
          </Box>
        </GridItem>
        {shownImages.map(image => (
          <GridItem colSpan={1} rowSpan={1}>
            <Box key={image.id} position="relative" boxSize="100%" overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Image alt={image.caption} src={image.url} objectFit={'cover'} />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}