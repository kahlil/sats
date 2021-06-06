import {
  Container,
  Divider,
  Heading,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react'
import { Paragraph } from './sats-ui/Paragraph'

export const UseCases = () => (
  <>
    <Container>
      <Heading as="h2" fontSize="2xl" mb={4} textAlign="center">
        What can I do with Sats?
      </Heading>

      <Paragraph>
        Besides stacking and saving them, which is a prime use case, there are
        many things you can do with them.
      </Paragraph>

      <Paragraph>
        The key to unleashing major super powers of the satoshi is the ⚡️
        <strong>Lightning Network</strong>!
      </Paragraph>

      <Paragraph>
        The ⚡️Lightning Network is a Layer 2 network on top of the main Bitcoin
        network that allows for <strong>instant transmissions of sats</strong>{' '}
        at very low fees.
      </Paragraph>

      <Paragraph>
        <UnorderedList>
          <ListItem>
            You can use sats to buy coupons on Bitrefill for almost anything.
            Amazon, Netflix, supermarkets, IKEA PlayStation. You can literally
            live on sats if you want.
          </ListItem>

          <ListItem>
            You can tip your favorite Bitcoin content creator, they typically
            have a Lightning invoice on their websites.
          </ListItem>

          <ListItem>
            You can use{' '}
            <Link href="https://sphinx.chat/" color="blue.300" isExternal>
              Sphinx Chat
            </Link>{' '}
            to chat with a tribe of people around a subject or a creator and
            stream sats to creators.
          </ListItem>
        </UnorderedList>
        you can tip your favorite Bitcoin content creator you can use Sphinx
        Chat to chat with people and stream Sats to creators, you can use apps
        like Breez or Podfriend to stream Sats to any podcast that uses
        Podcasting 2.0.
      </Paragraph>
    </Container>
    <Divider />
  </>
)
