import React from 'react'
import { Stack, Text } from '@fluentui/react'
import Header from '../components/common/header'
import Footer from '../components/common/footer'

function VisionPage() {
  return (
    <div>
      <Header image={'banner3'} />
      <Stack
        horizontal
        tokens={{ childrenGap: 20, padding: 40 }}
        horizontalAlign="space-between"
      >
        <Stack className="subHeader" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="superLarge">Welcome to SKY HOME HEALTH CARE LLC.</Text>
        </Stack>
        <Stack className="body" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="large">
            We are dedicated to providing you with quality care services and are
            committed to ensuring your rights and privileges as a health care
            patient. We will do our best to answer any question you may have
            concerning your care and treatment. SKY HOME HEALTH CARE LLC. is a
            privately owned company dedicated to a level of services that will
            help foster quality of life. Our goal is for each patient to achieve
            full personal potential. We are committed to ensuring your rights
            and privileges as a health care patient.
          </Text>
        </Stack>
      </Stack>
      <Footer />
    </div>
  )
}

export default VisionPage
