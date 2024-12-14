import React, { Component } from 'react'

import contact from '../img/contact-img.jpg'

export default class Registration extends Component {
  render() {
    return (
      <>
        <div className="Registration text-white ">
            <div className="row">
                <div className="col-md-6">
                    <img src={contact} className='img-fluid' alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center mt-3">
                    <div className="container">
                      <h2>CONTACT US</h2>
                      <hr className=" mb-5" />
                      <form className='w-75 '>
                        <input type="text" placeholder='Name' name='name' className='form-control p-2 rounded-0' />
                        <input type="email" placeholder='Email' name='email' className='form-control  p-2 my-4 rounded-0' />
                        <input type="number" placeholder='Phone Number' name='phone' className='form-control  p-2 mb-4 rounded-0' />
                        <textarea rows={5} name="message" placeholder='Message' className='form-control p-2 mb-3 rounded-0' ></textarea>
                      </form>
                    </div>
                </div>
            </div>
            
        </div>

      </>
    )
  }
}
