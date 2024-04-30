import { useState } from 'react'
import { IconButton, Panel, PanelType, Stack, Text } from '@fluentui/react'
import { Link } from 'react-router-dom'
import useMediaQuery from '../UseMediaQuery'

type HeaderProps = {
  image: string
}

function Header(props: HeaderProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const openPanel = () => setIsPanelOpen(true)
  const dismissPanel = () => setIsPanelOpen(false)
  return (
    <div className={props.image}>
      <Stack className="header" horizontal>
        <Link to="/" className="headerText">
          <Stack horizontal>
            <img src="/images/logo.png" className="logo" />
            <Stack horizontalAlign="center">
              <Text className="headerText" variant="xxLarge">
                SKY
              </Text>
              {isMobile ? (
                <Stack styles={{ root: { paddingTop: 3 } }}>
                  <Text className="headerSubText" variant="large">
                    HOME HEALTH
                  </Text>
                  <Text className="headerSubText" variant="large">
                    CARE SERVICES
                  </Text>
                </Stack>
              ) : (
                <>
                  <Text className="headerSubText" variant="large">
                    HOME HEALTH
                  </Text>
                  <Text className="headerSubText" variant="large">
                    CARE SERVICES
                  </Text>
                </>
              )}
            </Stack>
          </Stack>
        </Link>
        {isMobile ? (
          <>
            <Stack
              styles={{ root: { paddingRight: 50, paddingTop: 0, zIndex: 3 } }}
            >
              <div className="hamburger-menu" onClick={openPanel}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Stack>
            <Panel
              isOpen={isPanelOpen}
              onDismiss={dismissPanel}
              closeButtonAriaLabel="Close"
              type={PanelType.smallFixedFar}
              onRenderHeader={() => (
                <div
                  className="close-button"
                  style={{ paddingRight: '35px' }}
                  onClick={openPanel}
                >
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
              )}
            >
              <Stack
                tokens={{ childrenGap: 20 }}
                styles={{ root: { padding: 10 } }}
              >
                <nav className="navbar">
                  <Stack>
                    <Link to="/" onClick={dismissPanel}>
                      Home
                    </Link>
                    <Link to="/vision" onClick={dismissPanel}>
                      Our Vision
                    </Link>
                    <Link to="/services" onClick={dismissPanel}>
                      Our Services
                    </Link>
                    <Link to="/contact" onClick={dismissPanel}>
                      Contact
                    </Link>
                  </Stack>
                </nav>
              </Stack>
            </Panel>
          </>
        ) : (
          <Stack horizontal>
            <nav className="navbar">
              <Link to="/">Home</Link>
              <Link to="/vision">Our Vision</Link>
              <Link to="/services">Our Services</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </Stack>
        )}
      </Stack>
    </div>
  )
}

export default Header
