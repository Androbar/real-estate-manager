import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaUserFriends, FaHandshake, FaGlobeAmericas } from 'react-icons/fa'

const AboutUsPage = () => {
  return (
    <Box>
      <Flex direction="column" align="center" mt={8}>
        <Heading as="h1" size="4xl" mb={6}>
          About Us
        </Heading>
        <Text fontSize="xl" mb={8}>
          Learn more about our company and our mission
        </Text>
      </Flex>

      <Flex justify="center" mb={12}>
        <Image
          src="https://via.placeholder.com/1980x400?text=Company+Image"
          alt="Company Image"
          h={{ base: 300, md: 400 }}
        />
      </Flex>

      <Container maxW="6xl">
        <Flex
          justify="space-around"
          mb={12}
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 4, md: 2 }}
        >
          <VStack textAlign="center">
            <FaUserFriends size={40} />
            <Heading as="h2" size="md" mb={2}>
              Our Team
            </Heading>
            <Text>
              We have a dedicated team of professionals committed to excellence.
            </Text>
          </VStack>
          <VStack textAlign="center">
            <FaHandshake size={40} />
            <Heading as="h2" size="md" mb={2}>
              Our Values
            </Heading>
            <Text>
              We value integrity, innovation, and customer satisfaction.
            </Text>
          </VStack>
          <VStack textAlign="center">
            <FaGlobeAmericas size={40} />
            <Heading as="h2" size="md" mb={2}>
              Our Reach
            </Heading>
            <Text>
              We have a global presence and serve customers worldwide.
            </Text>
          </VStack>
        </Flex>
      </Container>

      <Container maxW="6xl" mb={12}>
        <Heading
          as="h2"
          size="xl"
          mb={6}
          textAlign={{ base: 'center', md: 'left' }}
        >
          Our Team
        </Heading>
        <Grid
          gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gridRowGap={6}
          gridColumnGap={4}
        >
          <VStack textAlign="center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member"
              borderRadius="full"
            />
            <Text fontWeight="bold">John Doe</Text>
            <Text>CEO</Text>
          </VStack>
          <VStack textAlign="center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member"
              borderRadius="full"
            />
            <Text fontWeight="bold">Jane Smith</Text>
            <Text>CTO</Text>
          </VStack>
          <VStack textAlign="center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member"
              borderRadius="full"
            />
            <Text fontWeight="bold">Bob Johnson</Text>
            <Text>CFO</Text>
          </VStack>
          <VStack textAlign="center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member"
              borderRadius="full"
            />
            <Text fontWeight="bold">Alice Williams</Text>
            <Text>Marketing Manager</Text>
          </VStack>
          <VStack textAlign="center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member"
              borderRadius="full"
            />
            <Text fontWeight="bold">Tom Davis</Text>
            <Text>Sales Director</Text>
          </VStack>
          <VStack textAlign="center">
            <Image
              src="https://via.placeholder.com/150"
              alt="Team Member"
              borderRadius="full"
            />
            <Text fontWeight="bold">Sarah Wilson</Text>
            <Text>HR Manager</Text>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutUsPage
