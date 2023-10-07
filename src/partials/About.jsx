import React from "react";
import { useInView } from "react-intersection-observer";
import main_photo from "../assets/images/About-pic.jpg";

export default function () {
    const { ref: slideRef, inView: show } = useInView({
        triggerOnce: true,
        
    });
    
    return (
        <>
            <div id="About"  className="container-fluid pad-top">
                <div className="row  ">
                    <div className="container d-flex justify-content-around w-75 mobfix">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img
                                className= {` main-photo-size `}
                                src={main_photo}
                                alt="About-pic"
                            />
                            
                    </div>
                    <div  className={`col-md-6 d-flex align-items-center justify-content-center`}>
                                <div className="ps-5 pfix">
                                    <h3 ref={slideRef} className= {`main-color ${show? 'animate__animated animate__fadeInUp' :'' }`} >I'm A Developer</h3>
                                    <p className={`secondary fs-1 fw-bold ${show? 'animate__animated animate__fadeInUp third ' :'' }`}>
                                        I Can Develop Anything You Want
                                    </p>
                                    <p className= {`pt-3 ${show? 'animate__animated animate__fadeInUp forth' :'' }`}>
                                    As a developer, I possess the skills and expertise to create a wide range of solutions tailored to your specific needs. Whether it's designing and developing a user-friendly website, crafting a custom software application, or implementing complex algorithms to solve intricate problems, I'm here to bring your ideas to life. My commitment to excellence and attention to detail ensure that the end result aligns perfectly with your vision. Let's collaborate to turn your concepts into reality and achieve your development goals together.
                                </p>
                                <button className= {`btn-out3 mt-3 ${show? 'animate__animated animate__fadeInUp fifth' :'' }`} >Hire Me</button>

                                </div>
                            </div>
                    </div>
                        
                </div>
            </div>
        </>
    );
}
