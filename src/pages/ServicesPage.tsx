import React from 'react'
import { Stack, Text } from '@fluentui/react'
import Header from '../components/common/header'
import Footer from '../components/common/footer'

function ServicesPage() {
  return (
    <div>
      <Header image={'banner4'} />
      <Stack
        horizontal
        tokens={{ childrenGap: 20, padding: 40 }}
        horizontalAlign="space-between"
      >
        <Stack className="subHeader" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="superLarge">Daily Living</Text>
        </Stack>
        <Stack className="body" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="large">
            We provide personalized in-home support covering live-in, hourly, or
            overnight home health aide assistance. From meal preparation and
            serving, personal grooming, and bathing, to offering safe car
            transportation for appointments and shopping – we cater to all
            facets of daily living. Our services are also designed to be
            compatible with Long Term Care insurance.
          </Text>
        </Stack>
      </Stack>
      <Stack
        horizontal
        tokens={{ childrenGap: 20, padding: 40 }}
        horizontalAlign="space-between"
      >
        <Stack className="subHeader" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="superLarge">Medication</Text>
        </Stack>
        <Stack className="body" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="large">
            We simplify the complexity of medication administration into a
            fail-safe process. By closely coordinating with your physician, we
            ensure your medications are accurately reviewed and organized. Our
            service includes individually packaged doses for ease of use, with
            direct billing to your insurance and hassle-free automatic refills,
            ensuring you never miss a dose.
          </Text>
        </Stack>
      </Stack>
      <Stack
        horizontal
        tokens={{ childrenGap: 20, padding: 40 }}
        horizontalAlign="space-between"
      >
        <Stack className="subHeader" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="superLarge">Chronic Disease Management</Text>
        </Stack>
        <Stack className="body" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="large">
            Our care team provides non-clinical support for individuals managing
            chronic conditions at home, enhancing comfort and lifestyle quality
            without performing medical tasks. Our services include personalized
            care routines and educational support for conditions like heart
            disease, respiratory illnesses, and diabetes.
          </Text>
        </Stack>
      </Stack>
      <Stack
        horizontal
        tokens={{ childrenGap: 20, padding: 40 }}
        horizontalAlign="space-between"
      >
        <Stack className="subHeader" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="superLarge">Restorative Therapy</Text>
        </Stack>
        <Stack className="body" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="large">
            Our staff supports your restorative journey with personalized
            assistance alongside professional therapy sessions in physical,
            occupational, and speech-language areas. We ensure comfort and
            progress through dedicated, one-on-one support in creating and
            following through with individualized care plans.
          </Text>
        </Stack>
      </Stack>
      <Stack
        horizontal
        tokens={{ childrenGap: 20, padding: 40 }}
        horizontalAlign="space-between"
      >
        <Stack className="subHeader" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="superLarge">Wound Care</Text>
        </Stack>
        <Stack className="body" tokens={{ childrenGap: 20, padding: 20 }}>
          <Text variant="large">
            Focusing on comfort and healing, our team offers supportive care for
            those with chronic wounds, ensuring a clean, safe environment and
            assisting with needs to promote healing and reduce discomfort,
            complementing clinical care plans.
          </Text>
        </Stack>
      </Stack>
      <Footer />
    </div>
  )
}

export default ServicesPage
