import { Text, Link, HStack } from '@chakra-ui/react'

export const Header = () => (
  <HStack spacing="8" px="8" py="0" backgroundColor="blue.700">
    <Text fontSize="4xl" fontWeight="200">
      &#x24C8;
    </Text>
    <Text>
      <Link href="#what">What</Link>
    </Text>
    <Text>
      <Link href="#where">Where</Link>
    </Text>
    <Text>
      <Link href="#use-cases">Use Cases</Link>
    </Text>
  </HStack>
)
