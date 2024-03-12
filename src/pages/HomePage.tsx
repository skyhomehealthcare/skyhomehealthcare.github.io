import React from 'react'
import { Stack, Text } from '@fluentui/react'
import Header from '../components/common/header'
import Footer from '../components/common/footer'

function HomePage() {
  return (
    <div>
      <Header image={'banner1'} />
      <Stack
        horizontal
        tokens={{ childrenGap: 20, padding: 40 }}
        horizontalAlign="space-between"
      >
        <Stack className="subHeader" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="superLarge">Care You Can Trust</Text>
        </Stack>
        <Stack className="body" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="large">
            Our team of professionals are dedicated to offering tailored care
            right at your doorstep. Whether you're recuperating from surgery,
            battling an illness, or managing a chronic condition, we're here,
            every step of the way, to support you in achieving your highest
            wellness.
          </Text>
        </Stack>
      </Stack>
      <Footer />
    </div>
  )
}

export default HomePage
