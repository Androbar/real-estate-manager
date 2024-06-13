import ContactUs from '@/components/client/ContactUs'
import { Container, Heading, HStack, Text } from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <>
      <Container maxW="6xl" py={6}>
        <Heading>Contact us</Heading>
      </Container>
      <ContactUs />
      <Container maxW="6xl" py={6}>
        <HStack spacing={8} justifyContent={'center'}>
          <HStack>
            <FaPhone size={20} />
            <Text as="a" href="tel:+11234567890">
              +1 123 456 7890
            </Text>
          </HStack>
          <HStack>
            <FaMapMarkerAlt size={20} />
            <Text>123 Main St, Anytown USA</Text>
          </HStack>
          <HStack>
            <FaEnvelope size={20} />
            <Text as="a" href="mailto:contact@example.com">
              contact@example.com
            </Text>
          </HStack>
        </HStack>
      </Container>
      <Container maxW="100%" px={0}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185678459418!3d40.75891057932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1682435758088!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </>
  )
}

export default ContactPage
