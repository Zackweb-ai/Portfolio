import React from 'react'
import icon_service_1 from '../assets/images/service-icon-1.png'
import icon_service_2 from '../assets/images/service-icon-2.png'
import icon_service_3 from '../assets/images/service-icon-3.png'
import icon_service_4 from '../assets/images/service-icon-4.png'
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer'




export default function Service_cards() {
  const { ref: animation_progress, inView: load } = useInView({
    triggerOnce: true,
    threshold: 0,
    // delay:100,
    
  });
  const { ref: animation_second, inView: start } = useInView({
    triggerOnce: true,
    // delay:100,
    
});
  return (

      <div className="container-fluid cards_overflow">
        <div className="row">
        <div className="col-md-6 cards_overflow">
          <div className=" container-fluid service-cards justify-content-center d-flex mt-5 mb-5">
                  <div className="row flex-column gap-4  align-items-end">
              <div className="col-md-6 service-card portfolio-left-with">
                <Tilt>
          <div ref={animation_progress} className= {`${load? 'animate__animated animate__fadeInLeft left' :'' } row service-back rounded-4`}>
          <div className="col-md-6 text-center s-with">
                          <img src={icon_service_1} alt="" />
                            </div>
          <div className="col-md-6 s-with-text">
          <h3 className='secondary'>Web Development</h3>
          {/* <p className='secondary fw-bold '>Starts from <span className='main-size main-color'> 99$</span></p> */}
          <p style={{lineHeight:30+'px'}}>Our web development service offers a holistic approach to building web solutions that blend creativity, functionality, and technical excellence. Whether it's a sleek and responsive website, a dynamic web application, or an interactive e-commerce platform, we bring your vision to life. With expertise in front-end and back-end technologies</p>

                            </div>
                  </div>
                  </Tilt>
          
                      
        </div>
        
              <div className="col-md-6 service-card portfolio-left-with">
                <Tilt>
          <div ref={animation_second} className= {`${start? 'animate__animated animate__fadeInLeft left' :'' } row service-back rounded-4`}>
          <div className="col-md-6 text-center s-with">
                          <img src={icon_service_2} alt="" />
                            </div>
          <div className="col-md-6 s-with-text">
          <h3 className='secondary'>UI/UX Design</h3>
          {/* <p className='secondary fw-bold '>Starts from <span className='main-size main-color'> 299$</span></p> */}
          <p style={{lineHeight:30+'px'}}>consider the overall user experience, including user flow, information architecture, and usability testing, to ensure that websites are easy to navigate and provide a positive experience for visitors</p>

                            </div>
                  </div>
                  </Tilt>
          
                      
        </div>
               
      </div>
  
    </div>
        </div>
        <div className="col-md-6 cards_overflow">
          <div className=" container-fluid service-cards justify-content-center d-flex mt-5 ">
                  <div className="row flex-column gap-4  align-items-start psfix">
              <div className="col-md-6 service-card portfolio-left-with">
              <Tilt>
          <div ref={animation_progress} className= {`${load?'animate__animated animate__fadeInRight right':''} row service-back rounded-4`}>
          <div className="col-md-6 text-center s-with">
                          <img src={icon_service_3} alt="" />
                            </div>
          <div className="col-md-6 s-with-text">
          <h3 className='secondary'>Performance Optimization</h3>
          {/* <p className='secondary fw-bold '>Starts from <span className='main-size main-color'> 199$</span></p> */}
          <p style={{lineHeight:30+'px'}}>optimize the performance of websites by minimizing page load times, optimizing images, and implementing best practices for front-end performance.</p>

                            </div>
                </div>
                </Tilt>
          
                      
        </div>
        
              <div className="col-md-6 service-card portfolio-left-with">
              <Tilt>

          <div ref={animation_second} className= {`${start?'animate__animated animate__fadeInRight right':''} row service-back rounded-4`} >
          <div className="col-md-6 text-center s-with">
                          <img src={icon_service_4} alt="" />
                            </div>
          <div className="col-md-6 s-with-text">
          <h3 className='secondary'>Web Design</h3>
          {/* <p className='secondary fw-bold '>Starts from <span className='main-size main-color'> 399$</span></p> */}
          <p style={{lineHeight:30+'px'}}>Designing the layout, user interface, and overall look and feel of websites to ensure they are visually appealing and user-friendly.</p>

                            </div>
          </div>
          </Tilt>
 
                      
        </div>
               
      </div>
  
    </div>
        </div>
        </div>
      </div>

  )
}
