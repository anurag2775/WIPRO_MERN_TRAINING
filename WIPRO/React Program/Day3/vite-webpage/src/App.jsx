import { Routes, Route } from 'react-router-dom'
import Navbar from './Menu/Navbar'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App

