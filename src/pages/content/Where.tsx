import { Box, Container, Divider, Heading, Link } from '@chakra-ui/react'
import { Tweet } from 'react-twitter-widgets'

import { Paragraph } from './sats-ui/Paragraph'

export const Where = () => (
  <>
    <Container>
      <Heading as="h2" fontSize="2xl" my={4} textAlign="center">
        Where can I get Sats?
      </Heading>

      <Paragraph>
        You can get sats anywhere you can buy Bitcoin. Cryptocurrency exchanges
        allow you to buy sats but the best place to buy them is at services that
        focus on Bitcoin and automatic DCA
      </Paragraph>

      <Heading as="h3" fontSize="xl" mb={4} mt="6" textAlign="center">
        What is Auto-DCA?
      </Heading>

      <Paragraph>
        DCA stands for Dollar Cost Averaging a popular investment strategy among
        Bitcoiners. A better name for it is{' '}
        <strong>Automatic Recurring Purchases</strong> (the term was{' '}
        <Link
          href="https://www.youtube.com/watch?v=ADwwKPCGW9U&t=254s"
          color="blue.300"
        >
          coined by Cory Klippsten
        </Link>{' '}
        the founder of Swan Bitcoin). DCA is a trading term and trading is not
        what stacking sats is about.
      </Paragraph>

      <Paragraph>
        Stacking sats is about accumulating Bitcoin. Automatic Recurring
        Purchases is strategy that has worked very well for many Bitcoiners so
        far. There are a few services that allow you to do this in a very
        convenient way. Find a handy list of services in the following tweet for
        Automatic Recurring Purchases of Bitcoin in your country.
      </Paragraph>

      <Box p={1}>
        <Tweet tweetId={'1397006749815566344'} options={{ theme: 'light' }} />
      </Box>
    </Container>
    <Divider />
  </>
)
