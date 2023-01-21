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
                    <div className="container d-flex justify-content-around w-75">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img
                                className= {` main-photo-size `}
                                src={main_photo}
                                alt="About-pic"
                            />
                            
                    </div>
                    <div  className={`col-md-6 d-flex align-items-center justify-content-center`}>
                                <div className="ps-5">
                                    <h3 ref={slideRef} className= {`main-color ${show? 'animate__animated animate__fadeInUp' :'' }`} >I'm A Developer</h3>
                                    <p className={`secondary fs-1 fw-bold ${show? 'animate__animated animate__fadeInUp third ' :'' }`}>
                                        I Can Develop Anything You Want
                                    </p>
                                    <p className= {`pt-3 ${show? 'animate__animated animate__fadeInUp forth' :'' }`}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Esse assumenda similique quis nulla, quidem commodi
                                        exercitationem ratione consectetur dignissimos? Vel ducimus,
                                        iure vitae enim ipsam eligendi. Reiciendis doloribus,
                                        dolorum facere totam quam ullam placeat voluptas labore
                                        maiores optio officiis, veritatis quo provident? Harum fugit
                                        explicabo optio officia! Delectus, dolore quidem.
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
