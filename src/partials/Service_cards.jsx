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
          <div className=" container-fluid service-cards justify-content-center d-flex mt-5 ">
                  <div className="row flex-column gap-4  align-items-end">
              <div className="col-md-6 service-card portfolio-left-with">
                <Tilt>
          <div ref={animation_progress} className= {`${load? 'animate__animated animate__fadeInLeft left' :'' } row service-back rounded-4`}>
          <div className="col-md-6 text-center s-with">
                          <img src={icon_service_1} alt="" />
                            </div>
          <div className="col-md-6 s-with-text">
          <h3 className='secondary'>Creative Design</h3>
          <p className='secondary fw-bold '>Starts from <span className='main-size main-color'> 99$</span></p>
          <p style={{lineHeight:30+'px'}}>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>

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
          <p className='secondary fw-bold '>Starts from <span className='main-size main-color'> 299$</span></p>
          <p style={{lineHeight:30+'px'}}>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>

                            </div>
                  </div>
                  </Tilt>
          
                      
        </div>
               
      </div>
  
    </div>
        </div>
        <div className="col-md-6 cards_overflow">
          <div className=" container-fluid service-cards justify-content-center d-flex mt-5 ">
                  <div className="row flex-column gap-4  align-items-start">
              <div className="col-md-6 service-card portfolio-left-with">
              <Tilt>
          <div ref={animation_progress} className= {`${load?'animate__animated animate__fadeInRight right':''} row service-back rounded-4`}>
          <div className="col-md-6 text-center s-with">
                          <img src={icon_service_3} alt="" />
                            </div>
          <div className="col-md-6 s-with-text">
          <h3 className='secondary'>Graphic Design</h3>
          <p className='secondary fw-bold '>Starts from <span className='main-size main-color'> 199$</span></p>
          <p style={{lineHeight:30+'px'}}>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>

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
          <p className='secondary fw-bold '>Starts from <span className='main-size main-color'> 399$</span></p>
          <p style={{lineHeight:30+'px'}}>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>

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
