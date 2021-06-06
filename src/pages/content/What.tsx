import Image from 'next/image'
import { Container, Heading, Link, Box, Divider } from '@chakra-ui/react'

import { Paragraph } from './sats-ui/Paragraph'

export const What = () => (
  <>
    <Container>
      <Heading as="h2" fontSize="2xl" mb={4} textAlign="center" id="what">
        What are sats?
      </Heading>

      <Paragraph>
        Sat is short for satoshi. A satoshi is currently the smallest unit of a{' '}
        <Link
          href="https://en.bitcoin.it/wiki/Bitcoin"
          isExternal
          color="blue.300"
        >
          Bitcoin
          <Box display="inline-block" position="relative" top="5px">
            <Image src="/btc.png" alt="Bitcoin" width="18" height="18" />
          </Box>
        </Link>{' '}
        recorded on the block chain. 100,000,000 satoshi are one Bitcoin. The
        unit has been named in collective homage to the original creator of
        Bitcoin,{' '}
        <Link
          href="https://en.bitcoin.it/wiki/Satoshi_Nakamoto"
          isExternal
          color="blue.300"
        >
          Satoshi Nakamoto
        </Link>
        .
      </Paragraph>

      <Paragraph>
        When you buy Bitcoin for a few hundred bucks, you buy a fraction of a
        Bitcoin, <strong>you are buying sats</strong>. That is why many
        Bitcoiners talk about{' '}
        <Link
          href="https://twitter.com/search?q=%22stacking%20sats%22&src=typed_query"
          color="blue.300"
          isExternal
        >
          stacking sats
        </Link>{' '}
        when they buy more Bitcoin.
      </Paragraph>
    </Container>
    <Divider />
  </>
)
