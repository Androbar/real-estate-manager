// src/app/properties/[slug]/Property.server.tsx
import { ContactForm } from "@/components/ContactForm";
import { ImageGallery } from "@/components/ImageGallery";
import { PropertyImages } from "@/components/PropertyImages";
import { MAX_WIDTH, PROPERTY_IMAGES } from "@/constants";
import prisma from "@/lib/prismaClient";
import { Box, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const PropertyServerComponent = async ({ slug }: { slug: string }) => {
  const property = await prisma.property.findUnique({
    where: { slug },
  });

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <Container maxW={MAX_WIDTH} p={4} m={'0 auto'}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={8}>
          <Box w={'100%'}>
            <PropertyImages images={PROPERTY_IMAGES} />
            <Heading as='h1'>{property.name}</Heading>
            <Text>Atributos con iconos dependiendo de que haya</Text>
            <Text>Descripción: {property.description}</Text>
            <Text>Direccion: {property.address}</Text>
            <Text>Tabs con diferentes categorias con informacion</Text>
            <Text>Overview, precio, detalles, mapa, requisitos</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <ContactForm />
        </GridItem>

      </Grid>


    </Container>
  );
}

export default PropertyServerComponent;
