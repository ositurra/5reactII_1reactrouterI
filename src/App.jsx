import Navigation from './components/Navigation'
import Home from './views/Home'
import Contact from './views/Contact'


import './App.css'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
