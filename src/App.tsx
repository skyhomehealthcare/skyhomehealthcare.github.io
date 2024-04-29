import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VisionPage from './pages/VisionPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import withPageTransition from './components/WithPageTransition'
import useMediaQuery from './components/UseMediaQuery'

const HomePageWithTransition = withPageTransition(HomePage)
const VisionPageWithTransition = withPageTransition(VisionPage)
const ServicesPageWithTransition = withPageTransition(ServicesPage)
const ContactPageWithTransition = withPageTransition(ContactPage)

let loadImages = true

const preloadMobileImages = () => {
  const images = [
    '/public/images/banner1m.jpeg',
    '/public/images/banner2m.jpeg',
    '/public/images/banner3m.jpeg',
    '/public/images/banner4m.jpeg',
  ]
  images.forEach((image) => {
    const img = new Image()
    img.src = image
  })
}

const preloadImages = () => {
  const images = [
    '/public/images/banner1.jpeg',
    '/public/images/banner2.jpeg',
    '/public/images/banner3.jpeg',
    '/public/images/banner4.jpeg',
  ]
  images.forEach((image) => {
    const img = new Image()
    img.src = image
  })
}

const App: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  useEffect(() => {
    if (loadImages) {
      if (isMobile) preloadMobileImages()
      else preloadImages()
      loadImages = false
    }
  }, [])

  return (
    <HashRouter>
      {!loadImages ? (
        <div className="loading-screen">Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePageWithTransition />} />
          <Route path="/vision" element={<VisionPageWithTransition />} />
          <Route path="/services" element={<ServicesPageWithTransition />} />
          <Route path="/contact" element={<ContactPageWithTransition />} />
        </Routes>
      )}
    </HashRouter>
  )
}

export default App
