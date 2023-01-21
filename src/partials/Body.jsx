import React from 'react'
import First_section from './First_section'
import '../assets/css/Body.css'
import About from './About'
import Portfolio from './Portfolio'
import Service from './Service'
import Service_cards from './Service_cards'
import Contact from './Contact'
import Contact_form from './Contact_form'
import Map from './Map'
import Footer from './Footer'



export default function Body() {
  
  return (
    <div className='container-fluid body px-0'>
      
      <First_section></First_section>
      <About></About>
      <Portfolio></Portfolio>
      <Service></Service>
      <Service_cards></Service_cards>
      <Contact></Contact>
      <Contact_form></Contact_form>
      <Map></Map>
      <Footer></Footer>
          
    </div>
  )
}
