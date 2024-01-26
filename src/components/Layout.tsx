// components/Layout.tsx

import React, { ReactNode } from 'react';
import { Box, Container, HStack, Link } from '@chakra-ui/react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW="6xl">
      <Box w={('100%')} bg={'#cecece'}>
        <HStack p={4}>
          <Link href='/'>Home</Link>
          <Link href='/map'>Map</Link>
          <Link href='/properties'>Properties</Link>
        </HStack>
      </Box>
      {children}
    </Container>
  );
};

export default Layout;