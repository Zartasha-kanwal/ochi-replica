import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import EyeSection from './Components/EyeSection'
import Feature from './Components/Feature'
import CardSection from './Components/CardSection'
import Footer from './Components/Footer'
import ReadyToStart from './Components/ReadyToStart'
import LocomotiveScroll from 'locomotive-scroll';




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full text-white'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
     <EyeSection/>
     <Feature/>
     <CardSection/>
     <ReadyToStart/>
     <Footer/>

    </div>
  )
}

export default App