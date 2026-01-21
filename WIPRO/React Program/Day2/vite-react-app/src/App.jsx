import { useState } from "react";
import Courses from './components/Courses'
import Searchbox from  './components/Searchbox'
import Header from './components/Header'
import Hero from   './components/Hero'
import CardSection from  './components/CardSection'
import Footer from   './components/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full min-h-screen">
      <Header />
      <Hero />
      <div  className="flex justify-center my-10">
     <Searchbox />
      </div>
      <Courses />
      <CardSection />
      <Footer />
    </div>
    </>
  )
}

export default App
