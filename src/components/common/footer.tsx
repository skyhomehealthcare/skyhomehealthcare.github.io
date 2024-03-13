import React from 'react'
import { Stack, Text } from '@fluentui/react'

const Footer: React.FC = () => {
  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      tokens={{ childrenGap: 60 }}
      styles={{
        root: {
          background: '#292929',
          color: 'white',
          padding: 40,
        },
      }}
      wrap
    >
      <Stack tokens={{ childrenGap: 10 }}>
        <Text variant="xLarge" styles={{ root: { color: 'white' } }}>
          Contact
        </Text>
        <Text styles={{ root: { color: 'white' } }}>
          info@skyhomehealthcarellc.com{' '}
        </Text>
        <Text styles={{ root: { color: 'white' } }}>Phone: (571) 833-8342</Text>
        <Text styles={{ root: { color: 'white' } }}>Fax: (703) 995-0297</Text>
      </Stack>
      <Stack tokens={{ childrenGap: 10 }} styles={{ root: { width: '20%' } }}>
        <Text variant="xLarge" styles={{ root: { color: 'white' } }}>
          Non-Descrimination Policy
        </Text>
        <Text styles={{ root: { color: 'white' } }}>
          Our commitment is to services delivered in an inclusive, respectful
          environment, free from any form of discrimination based on race,
          color, religion, age, gender identity and expression, sexual
          orientation, disability status, or any other characteristic protected
          by law.
        </Text>
      </Stack>
      <Stack tokens={{ childrenGap: 10 }}>
        <Text variant="xLarge" styles={{ root: { color: 'white' } }}>
          Hours
        </Text>
        <Text styles={{ root: { color: 'white' } }}>
          Monday – Friday: 9:00am – 5:00pm
        </Text>
        <Text styles={{ root: { color: 'white' } }}>
          On-Call Clinician Available 24/7
        </Text>
      </Stack>
    </Stack>
  )
}

export default Footer
