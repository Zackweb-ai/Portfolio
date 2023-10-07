import React, { useEffect, useRef, useState } from 'react'
import pixel from '../assets/images/s1.PNG'
import quality from '../assets/images/s2.PNG'
import idea from '../assets/images/s3.PNG'
import { useInView } from 'react-intersection-observer';





export default function First_section() {
  const { ref: myRef, inView: show } = useInView({
    triggerOnce: true,
  });



  return (
      <div className='container-fluid pad-top height-f'>
          <div  className="row">
        <div ref={myRef} className={`${show? 'animate__animated  animate__slideInUp' :'' } sec2 col-md-4 d-flex align-items-center justify-content-center flex-column text-center`}>
          <img src={pixel} alt="pixel" />
          <h3 className='secondary pt-3'>Pixel Perfect</h3>
          <p className='F-1-with pt-3'> Pixel perfection is the key goal in website design, where meticulous attention to detail ensures every element aligns flawlessly, creating a visually harmonious and precise user experience.</p>
        </div>
        <div  className={`${show? 'animate__animated  animate__slideInUp animate__delay-1s first' :'' } sec2 col-md-4 d-flex align-items-center justify-content-center flex-column text-center`}>
        <img src={quality} alt="pixel" />
          <h3 className='secondary pt-3'>High Quality</h3>
          <p className='F-1-with pt-3'>Crafting top-notch desktop websites involves a combination of cutting-edge design principles, robust functionality, and seamless user interactions, resulting in a high-quality online presence.</p>
        
        </div>
        <div className={`${show? 'animate__animated animate__slideInUp animate__delay-2s second' :'' } sec2 col-md-4 d-flex align-items-center justify-content-center flex-column text-center`}>
        <img src={idea} alt="pixel" />
          <h3 className='secondary pt-3'>Awesome Idea
</h3>
          <p className='F-1-with pt-3'>Exploring innovative concepts in website design is an exciting journey, and achieving excellence on desktop platforms often begins with the adoption of responsive and adaptive design methodologies, unleashing boundless creative possibilities.</p>
                </div>
      </div>
          </div>
  )
}
