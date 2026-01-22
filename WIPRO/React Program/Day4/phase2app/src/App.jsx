import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledRegistrationForm from './components/ControlledRegistrationForm'
import UncontrolledRegistrationForm from './components/UnControlledRegistrationForm'
import CourseList from './components/CoursesList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <CourseList/>
    
    </>
    
  );
}

export default App;