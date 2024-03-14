import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VisionPage from './pages/VisionPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
