import React from "react";
import { useInView } from "react-intersection-observer";
import Portfolio_pic from "../assets/images/portfolio.jpg";

export default function Portfolio() {
  const { ref: animation_progress, inView: load } = useInView({
    triggerOnce: true,
    delay:100,
    
});
  return (
    <div id="Portfolio" className="container-fluid pad-top">
      <div className="row  ">
        <div ref={animation_progress} className={`container d-flex justify-content-around portfolio-left-with`}>
          <div className= {`${load? 'animate__animated animate__fadeInUp' :'' } col-md-6  d-flex align-items-center justify-content-center`}>
            <div className="ps-5">
              <h3 className="main-color ">Design is Life</h3>
              <p className="secondary fs-2 fw-bold">
                I Develop Skills Regularly to Keep Me Update
              </p>
              <p className="pt-3">
                Most common methods for designing websites that work well on desktop is responsive and adaptive design


              </p>
              <h5 className="secondary mt-4">React</h5>
              <div className="progress mb-4" style={{ height: 8 + 'px' }} role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className={` bg-info ${load? 'progress-bar' :'' }`}  style={{ width:'85%' }}></div>
              </div>
              <h5 className="secondary">CSS</h5>

              <div className="progress mb-4" role="progressbar" style={{ height: 8 + 'px' }} aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className={` bg-primary ${load? 'progress-bar' :'' }`}  style={{ width:'95%' }}></div>
              </div>
              <h5 className="secondary">JavaScript</h5>
              <div className="progress" role="progressbar" style={{ height: 8 + 'px' }} aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className={` bg-warning ${load? 'progress-bar' :'' }`}  style={{ width:'80%' }}></div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-1 d-flex ps-5 justify-content-center align-items-center">
            <img
              className="main-photo-size"
              src={Portfolio_pic}
              alt="About-pic"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
