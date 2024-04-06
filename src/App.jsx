import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePlaceholder } from './pages/homeplaceholder'
import { Layout } from './Layout'
import { config } from './config'
// Pages
import { Contact } from './pages/contact'
import { HomePage } from './pages/homepage'

import './App.css'

function App() {
  const homeSelector = () =>
    config.showHomepage ? <HomePage /> : <HomePlaceholder />

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={homeSelector()} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
