import React from 'react'
import { IStackTokens, Stack, Text } from '@fluentui/react'
import { Link } from 'react-router-dom'

const stackTokens: IStackTokens = { childrenGap: 40 }

type HeaderProps = {
  image: string
}

function Header(props: HeaderProps) {
  return (
    <div className={props.image}>
      <Stack className="header" horizontal tokens={stackTokens}>
        <Link to="/" className="headerText">
          <Stack horizontal>
            <img src="/images/logo.png" className="logo" />
            <Stack horizontalAlign="center">
              <Text className="headerText" variant="xxLarge">
                SKY
              </Text>
              <Text className="headerSubText" variant="large">
                HOME HEALTH
              </Text>
              <Text className="headerSubText" variant="large">
                CARE SERVICES
              </Text>
            </Stack>
          </Stack>
        </Link>
        <Stack horizontal>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/vision">Our Vision</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </Stack>
      </Stack>
    </div>
  )
}

export default Header
