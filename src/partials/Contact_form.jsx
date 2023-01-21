import React, { useState } from 'react'
import side_pic from '../assets/images/contact_side_pic.png'
import '../assets/css/Contact_form.css'
import emailjs from '@emailjs/browser';
import * as Icon from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';



export default function Contact_form() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Subject, setSubject] = useState('')
  const [Message, setMessage] = useState('')

  function handleChange(e) {
    if (e.target.id == "Name") {
      setName(e.target.value)
    } else if (e.target.id == "Email") {
      setEmail(e.target.value)

    }else if (e.target.id == "Phone") {
      setPhone(e.target.value)

    }else if (e.target.id == "Subject") {
      setSubject(e.target.value)

    }else if (e.target.id == "Message") {
      setMessage(e.target.value)
    }
    
  }
  function handleSubmit(e){
    e.preventDefault();
    let params = {
      "from_Name":Name,
      "from_Subject": Subject,
      "from_Email":Email ,
      "Message": Message,
      "from_Phone": Phone,



    }
    emailjs.send('service_4hywn5d', 'template_30s1tef', params, '7WUSMaLzcxHpHF83R');
    setName('')
    setMessage('')
    setEmail('')
    setSubject('')
    setPhone('')
      
  }
  const { ref: animation_progress, inView: load } = useInView({
    triggerOnce: true,
    delay:100,
    
  });

  return (
      <div ref={animation_progress} className='container-fluid mt-5 top '>
      <div className="row">
        <div className= {`${load? 'animate__animated animate__fadeInLeft contact' :'' } col-md-6`} >
          <div className="contact-info d-flex align-items-center justify-content-center">
            <div className="logo logo-1">
              <Icon.GeoAltFill color='orange' size={30}></Icon.GeoAltFill>
              </div>
            <div className="text-info ps-4 pt-3">
              <h3>Address</h3>
              <p>20, Somewhere in world</p>
              </div>
          </div>
          <div className="contact-info d-flex align-items-center  justify-content-center">
              <div className="logo logo-2">
              <Icon.EnvelopeFill color='green' size={30}></Icon.EnvelopeFill>
              </div>
            <div className="text-info ps-4 pt-3">
              <h3>Email</h3>
              <p>Zari.zakaria@gmail.com</p>
              </div>
          </div>
          <div className="contact-info phone d-flex align-items-center justify-content-center">
              <div className="logo logo-3">
              <Icon.TelephoneFill color='purple' size={30}></Icon.TelephoneFill>
              </div>
            <div className="text-info ps-4 pt-3">
            <h3>Phone</h3>
            <p> + ( 212 ) 07 08 15 09 84  </p>

              </div>
          </div>
        </div>
        <div className={`${load? 'animate__animated animate__fadeInRight contact' :'' } col-md-6`}>
                  <div className="form">
                      <form onSubmit={handleSubmit}>
                          <div className="first_row portfolio-left-with">
                          <ul className=' remove_d d-flex justify-content-between'>
                              <li>
                                <input id='Name' value={Name} onChange={handleChange} className="input-text-color remove_b input_height form-control form-control-lg" type="text" placeholder="Your Name" aria-label=".form-control-lg example"/>

                              </li>
                              <li>
                                <input id='Email' value={Email} onChange={handleChange} className="input-text-color remove_b input_height form-control form-control-lg" type="text" placeholder="Your Email" aria-label=".form-control-lg example"/>

                              </li >
                              </ul>
                              <ul className=' remove_d d-flex justify-content-between'>
                              <li>
                                <input id='Phone' value={Phone} onChange={handleChange} className="input-text-color remove_b input_height form-control form-control-lg" type="text" placeholder="Your Phone" aria-label=".form-control-lg example"/>

                              </li>
                              <li>
                                <input id='Subject' value={Subject} onChange={handleChange} className="input-text-color remove_b input_height form-control form-control-lg" type="text" placeholder="Subject" aria-label=".form-control-lg example"/>

                                  </li >
                              </ul>
                              <div className="d-flex text-a justify-content-center">
                              <textarea value={Message} onChange={handleChange} style={{resize:'none',width:'500px',padding:'20px'}} placeholder="Write your message here" className='remove_b rounded' id="Message" cols="30" rows="7"></textarea>

                                </div>
                          </div >
                          <button className='btn-out3 mt-3 text-a' >Submit Now</button>

                      </form>
                      
                      <div className= {`${load? 'animate__animated animate__fadeInRight pic' :'' } side-pic`}>
                      <img  src={side_pic}  />

                        </div>
                      
            </div>
        </div>
      </div>    
      </div>
  )
}
