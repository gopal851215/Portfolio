import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
<>
<div>
<Navbar/>
<Home/>
<About/>
<Portfolio/>
<Contact/>
<Footer/>
</div>
<Toaster />
</>
  )
}

export default App
