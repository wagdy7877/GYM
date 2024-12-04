import React, { Component } from "react";

export default class AnamationDetails extends Component {
  render() {
    let currentURL = window.location.href.split("/").slice(-1).join("");
    let { animationData } = this.props;
    console.log(animationData);
    return (
      <>
        <div className="m-5">
          <hr className=" text-info" />
          <hr className="w-75 text-info" />
          <hr className=" text-info" />
          <div className="row" key={animationData[currentURL - 1]}>
            <div className="col-md-7 flex-column d-flex justify-content-center align-items-center">
              <div className="row w-100 text-center ">
                <div className="col-6">
                  <dl className="fs-6 bg-secondary rounded-5 p-2">
                    <dt className="text-info ">Name </dt>
                    <dd> {animationData[currentURL - 1].title}</dd>
                    <dt className="text-info mt-3">Category</dt>
                    <dd> animation</dd>
                  </dl>
                </div>
                <div className="col-6">
                  <dl className="fs-6 bg-secondary rounded-5 p-2">
                    <dt className="text-info">language </dt>
                    <dd> English</dd>
                    <dt className="text-info mt-3">City </dt>
                    <dd> US</dd>
                  </dl>
                </div>
              </div>

              <button className="btn btn-danger my-4 fs-5 m-0 rounded-pill p-0 fw-bolder w-50">
                {" "}
                <p className="fontawesome m-0 p-0 rounded-pill">
                  &#x270C;
                </p>{" "}
                Watch now
              </button>
              <button className="btn btn-success fs-5 m-0 rounded-pill  p-0 fw-bold w-50">
                {" "}
                <p className="fontawesome">&#x270D;</p> Download now
              </button>
            </div>
            <div className="col-md-5 text-center">
              <img
                className="border mt-3 border-info rounded w-50 d-inline-block h-75"
                src={animationData[currentURL - 1].posterURL}
                alt="movie"
              />
              <h4 className="bg-warning text-dark rounded-pill my-4 p-2 w-50 m-auto fw-bold">
                IMDb 7.5 &#9734;&#9734;&#9733;&#9733;&#9733;
              </h4>
            </div>
          </div>
          <hr className=" text-info mt-5" />
          <hr className="w-75 text-info" />
          <hr className=" text-info" />
        </div>
      </>
    );
  }
}
