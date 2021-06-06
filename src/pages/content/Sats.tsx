import { useState } from 'react'
import { Heading, Input } from '@chakra-ui/react'

export const Sats = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event) => setValue(event.target.value)
  return (
    <Heading as="h1" fontSize="8xl" textAlign="center" pb="8">
      <Input
        value={value}
        onChange={handleChange}
        variant="unstyled"
        display="inline-block"
        fontSize="8xl"
        fontWeight="bold"
        height="24"
      />
      {value === '1' ? ' sat' : ' sats'} = $0.0004
    </Heading>
  )
}
