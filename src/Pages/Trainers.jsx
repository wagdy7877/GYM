import React, { Component } from 'react'

import T1 from '../img/t1.jpg'
import T3 from '../img/t3.jpg'
import instagram from '../img/instagram-logo.png'
import fb from '../img/facebook-logo.png'
import twitter from '../img/twitter.png'


export default class Trainers extends Component {
  render() {
    return (
      <>
        <div className="trainer text-white py-5">
            <div className="container py-5">
            <h2 className="text-center fw-bold">OUR GYM TRAINERS</h2>
            <hr className="m-auto mb-5" />
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-5">
                <div className="items">
                    <div className="name fw-bold text-center mb-3 fs-5">Smirth Jon</div>
                    <div className="imgbox text-center">
                    <img src={T1} className="rounded img-fluid shadow-lg" alt="trainer"/>
                    <div className="boxsocial bg-white m-auto w-auto d-flex justify-content-around align-items-center rounded-pill">
                        <a href="https:www.facebook.com" className="p-3 px-4"><img src={fb} alt="facebook" /></a>
                        <a href="https:www.twitter.com" className="p-3 px-4"><img src={twitter} alt="twitter" /></a>
                        <a href="https:www.instagram.com" className="p-3 px-4"><img src={instagram} alt="instagram" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                <div className="items">
                    <div className="name fw-bold text-center mb-3 fs-5">Alex Den</div>
                    <div className="imgbox text-center">
                    <img src={T3} className="rounded img-fluid shadow-lg" alt="trainer"/>
                    <div className="boxsocial bg-white m-auto w-auto d-flex justify-content-around align-items-center rounded-pill">
                        <a href="https:www.facebook.com" className="p-3 px-4"><img src={fb} alt="facebook" /></a>
                        <a href="https:www.twitter.com" className="p-3 px-4"><img src={twitter} alt="twitter" /></a>
                        <a href="https:www.instagram.com" className="p-3 px-4"><img src={instagram} alt="instagram" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                <div className="items">
                    <div className="name fw-bold text-center mb-3 fs-5">Smirth Jon</div>
                    <div className="imgbox text-center">
                    <img src={T1} className="rounded img-fluid shadow-lg" alt="trainer"/>
                    <div className="boxsocial bg-white m-auto w-auto d-flex justify-content-around align-items-center rounded-pill">
                        <a href="https:www.facebook.com" className="p-3 px-4"><img src={fb} alt="facebook" /></a>
                        <a href="https:www.twitter.com" className="p-3 px-4"><img src={twitter} alt="twitter" /></a>
                        <a href="https:www.instagram.com" className="p-3 px-4"><img src={instagram} alt="instagram" /></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </>
    )
  }
}
