import React, { Component } from "react";
import Slider from "react-slick";

import Navbar from "./Navbar";
import WhyUs from "../Pages/WhyUS";
import Healthy from "../Pages/Healthy";
import Trainers from "../Pages/Trainers";
import Registration from "../Pages/Registration";





export default class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
      {/* start hero section*/}
        <div className=" hero ">
          <Navbar />
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            {/* slide */}

            <Slider {...settings} className=" text-white w-75 ">
              <div className="fw-bold d-flex flex-column justify-content-center align-items-center">
                <h3 className="fw-bold">FITNESS </h3>
                <h2 className="fw-bold my-1">TRANING </h2>
                <h1 className="fw-bold mb-3">NEOGYM</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse .
                </p>
                <button className="btn border text-white p-2 px-5 my-3">
                  CONTCT US
                </button>
              </div>

              <div className="fw-bold d-flex flex-column justify-content-center align-items-center">
                <h3 className="fw-bold">FITNESS </h3>
                <h2 className="fw-bold my-1">TRANING </h2>
                <h1 className="fw-bold mb-3">NEOGYM</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse .
                </p>
                <button className="btn border text-white p-2 px-5 my-3">
                  CONTCT US
                </button>
              </div>

              <div className="fw-bold d-flex flex-column justify-content-center align-items-center">
                <h3 className="fw-bold">FITNESS </h3>
                <h2 className="fw-bold my-1">TRANING </h2>
                <h1 className="fw-bold mb-3">NEOGYM</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse .
                </p>
                <button className="btn border text-white p-2 px-5 my-3">
                  CONTCT US
                </button>
              </div>

              <div className="fw-bold d-flex flex-column justify-content-center align-items-center">
                <h3 className="fw-bold">FITNESS </h3>
                <h2 className="fw-bold my-1">TRANING </h2>
                <h1 className="fw-bold mb-3">NEOGYM</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse .
                </p>
                <button className="btn border text-white p-2 px-5 my-3">
                  CONTCT US
                </button>
              </div>
            </Slider>
          </div>
        </div>
      {/* end hero section */}

      {/* US Page */}
        <WhyUs />

      {/* heathy Page  */}
        <Healthy />

      {/* trainer Page */}
        <Trainers />

      {/* Contact Page */}
        <Registration />

      </>
    );
  }
}