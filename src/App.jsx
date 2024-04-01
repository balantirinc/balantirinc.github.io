
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePlaceholder } from './pages/homeplaceholder'
import { HomePage } from './pages/homepage'
import { Layout } from './Layout'
import {config } from './config'

import './App.css'

function App() {

  const homeSelector = () => config.showHomepage ? <HomePage /> : <HomePlaceholder />

  return (
    <Router>
      <Routes>
        <Route 
        path="/"
        element= {
          <Layout />
        }
        />
        <Route index element={homeSelector()} />
      </Routes>
    </Router>
  )
}

export default App
