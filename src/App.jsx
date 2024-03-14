import { Routes,Route } from 'react-router'


import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

import Navbar1 from './components/Navbar'



function App() {


  return (
    <>
      <Navbar1/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
