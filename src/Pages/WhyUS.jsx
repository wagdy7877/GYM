import React, { Component } from 'react'

import image1 from '../img/u-1.png';
import image2 from '../img/u-2.png';
import image3 from '../img/u-3.png';
import image4 from '../img/u-4.png';


export default class WhyUs extends Component {
  render() {
    return (
      <>
          <div className="contact text-white pt-5">
            <div className="container py-5">
              <h2 className="text-center fw-bold mb-1 pt-5">WHY CHOOSE US</h2>
              <hr className="m-auto " />

                <div className="row my-5 pb-5">

                    <div className="col-lg-3 col-md-6">
                      <div className="items text-center">
                        <img src={image1} alt="logo" />
                        <h5 className="fw-bold my-3">QUALITY EQUIPMENT </h5>
                        <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="items text-center">
                        <img src={image4} alt="logo" />
                        <h5 className="fw-bold my-3">NUTRITION </h5>
                        <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="items text-center">
                        <img src={image2} alt="logo" />
                        <h5 className="fw-bold my-3">HEALTHY DIET PLAN </h5>
                        <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="items text-center">
                        <img src={image3} alt="logo" />
                        <h5 className="fw-bold my-3">SPORT TRAINING </h5>
                        <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                      </div>
                    </div>

                </div>
            </div>
        </div>
        
      </>
    )
  }
}
