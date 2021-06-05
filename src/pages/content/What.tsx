import Image from 'next/image'
import { Container, Heading, Text, Link, Box, Divider } from '@chakra-ui/react'

export const What = () => (
  <>
    <Container centerContent>
      <Heading as="h2" fontSize="2xl" mb={4}>
        What are Sats?
      </Heading>
      <Text>
        Sat is short for Satoshi. A Satoshi is the smallest unit of a{' '}
        <Link href="https://bitcoin.org" isExternal color="blue.300">
          #Bitcoin
          <Box display="inline-block" position="relative" top="5px">
            <Image src="/btc.png" alt="Bitcoin" width="18" height="18" />
          </Box>
        </Link>
        . 100,000,000 Satoshi are one Bitcoin. It is named after{' '}
        <strong>Satoshi Nakamoto</strong>, the creator (or creator group) of the
        Bitcoin protocol. When you buy Bitcoin for a few hundred bucks for
        instance, you buy a fraction of a Bitcoin,{' '}
        <strong>you are buying Satoshis</strong>. That is why many Bitcoiners
        talk about{' '}
        <Link
          href="https://twitter.com/search?q=%22stacking%20sats%22&src=typed_query"
          color="blue.300"
          isExternal
        >
          stacking sats
        </Link>{' '}
        when they buy more Bitcoin.
      </Text>
    </Container>
    <Divider />
  </>
)
