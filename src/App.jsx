import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Navbar />
      <div className='pt-[9rem]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  )
}

export default App
