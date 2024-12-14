import React, { Component } from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import WhyUs from './Pages/WhyUS'
import Navbar from './components/Navbar'
import Healthy from './Pages/Healthy'
import Trainers from './Pages/Trainers'
import Registration from './Pages/Registration'





export default class App extends Component {

  render() {
    return (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/us" element={
              <>
                <Navbar />
                <WhyUs /> 
                <Healthy /> 
              </>
            } />
            <Route path="/trainers" element={
              <>
                <Navbar />
                <Trainers /> 
              </>
            } />
            <Route path="/registration" element={
              <>
                <Navbar />
                <Registration /> 
              </>
            } />
          </Routes>
          <Footer />
        </>
    )
  }
}
