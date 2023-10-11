import React from "react";
import img1 from "../assets/images/active-states.jpg";
import img2 from "../assets/images/multi.jpg";
import img3 from "../assets/images/news.jpg";
import img4 from "../assets/images/desktop-design.jpg";
import img5 from "../assets/images/desktop-design2.jpg";
import img6 from "../assets/images/split-page.png";

export default function Projects() {
  return (
    <div
      id=""
      className="container-fluid d-flex flex-column justify-content-center mt-5"
    >
      <div className="text-part text-center d-flex justify-content-center flex-column align-items-center pb-5">
        <p className="main-color fs-5 fw-semi-bold mb-1">My Recent Work</p>
        <h3 className="secondary fs-1">Recent projects I've worked on</h3>
      </div>
      <div className="projects">
        <div className="row justify-content-center mb-view">
          <div className="col-md-3">
            <div className="card border-0 rounded-4 shadow">
              <a href="https://newsletter-gamma-smoky.vercel.app/"><img src={img1} className="card-img-top" alt="..." /></a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 rounded-4 shadow">
              <a href="https://multiform-omega.vercel.app/"><img src={img2} className="card-img-top" alt="..." /> </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 rounded-4 shadow">
              <a href="https://newspage-iota.vercel.app"><img src={img3} className="card-img-top" alt="..." /></a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-view mt-4">
          <div className="col-md-3">
            <div className="card border-0 rounded-4 shadow">
              <a href="https://ipadresstracker-six.vercel.app"><img src={img5} className="card-img-top" alt="..." /></a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 rounded-4 shadow">
              <a href="https://productpage-liart.vercel.app/"><img src={img4} className="card-img-top" alt="..." /></a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 rounded-4 shadow">
              <a href="https://7-split-landing-page.vercel.app/"><img src={img6} className="card-img-top" alt="..." /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
