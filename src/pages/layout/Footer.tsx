import { Text, Link } from '@chakra-ui/react'

export const Footer = () => (
  <Text textAlign="center">
    Made with ✨ by{' '}
    <Link
      href="https://www.kahlillechelt.com"
      isExternal
      textDecoration="underline"
    >
      Kahlil Lechelt
    </Link>{' '}
    &bull;{' '}
    <Link
      href="https://github.com/kahlil/dark"
      isExternal
      textDecoration="underline"
    >
      github/kahlil/dark
    </Link>{' '}
    &bull;{' '}
    <Link
      href="https://twitter.com/kahliltweets"
      isExternal
      textDecoration="underline"
    >
      @kahliltweets
    </Link>
  </Text>
)
