import React, { Component } from 'react'

export default class Notfoound extends Component {
  render() {
    return (
        <div style={{height:"80vh"}}>
            <h1 style={{fontSize:"5rem"}} className='fw-bold  d-flex align-items-center justify-content-center h-100'>Error 404<span className='text-secondary'>!</span> </h1>
        </div>
    )
  }
}
