import { Container, Divider, Heading, Text } from '@chakra-ui/react'

export const UseCases = () => (
  <>
    <Container centerContent>
      <Heading as="h2" fontSize="2xl" mb={4}>
        What can I do with Sats?
      </Heading>
      <Text>
        Besides stacking and saving them, which is a prime use case by the way
        there are many things you can do with them.
      </Text>
      <Text>
        First of all you can just stack them and be happy. But key to unleashing
        other major use cases is the ⚡️Lightning Network!
      </Text>
      <Text>
        The ⚡️Lightning Network is a Layer 2 network on top of the main Bitcoin
        protocol that allows for near instant transmissions of Sats at very low
        fees. You use it to buy coupons on Bitrefill you can tip your favorite
        Bitcoin content creator you can use Sphinx Chat to chat with people and
        stream Sats to creators, you can use apps like Breez or Podfriend to
        stream Sats to any podcast that uses Podcasting 2.0.
      </Text>
    </Container>
    <Divider />
  </>
)
