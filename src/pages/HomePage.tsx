import { Stack, Text } from '@fluentui/react'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import useMediaQuery from '../components/UseMediaQuery'

function HomePage() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div>
      <Header image={'banner1'} />
      <Stack
        horizontal
        tokens={{
          childrenGap: isMobile ? 0 : 20,
          padding: isMobile ? 20 : 40,
        }}
        horizontalAlign="space-between"
      >
        <Stack
          className="subHeader"
          tokens={{
            childrenGap: isMobile ? 0 : 20,
            padding: isMobile ? 0 : 20,
          }}
        >
          <Text variant="superLarge" className="subHeader">
            Care You Can Trust
          </Text>
        </Stack>
        <Stack
          className="body"
          tokens={{
            childrenGap: isMobile ? 0 : 20,
            padding: isMobile ? 0 : 20,
          }}
        >
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
