import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {Route, Routes ,Navigate} from 'react-router-dom'
import axios from 'axios'

import Drama from './Pages/Drama'
import Animation from './Pages/Animation'
import Comedy from './Pages/Comedy'
import Mystery from './Pages/Mystery'

import Home from './components/Home'
import Footer from './components/Footer'

import DramaDetails from './MoviesDetails/DramaDetails'
import MysteryDetails from './MoviesDetails/MysteryDetails'
import ComedyDetails from './MoviesDetails/ComedyDetails'
import AnamationDetails from './MoviesDetails/AnamationDetails'

import Login from './Pages/Login'
import Register from './Pages/Register'
import Notfound from './Pages/Notfound'



export default class App extends Component {
  state = {
    drama: [],
    comedy: [],
    animation: [],
    mystery: [],
  }

  getMovies = async(mediaType) =>{
    let {data} = await axios.get(`https://api.sampleapis.com/movies/${mediaType}`)
    this.setState({[mediaType]: data});
  } 
  componentDidMount(){
    this.getMovies("drama")
    this.getMovies("comedy")
    this.getMovies("animation")
    this.getMovies("mystery")
  }


  render() {
    
    let {drama ,comedy,animation ,mystery}=this.state;
    return (
        <>
          <Navbar/>
          <Routes>

            {/* Pages OF Moves  */}
            <Route path='/home' element={<Home dramaData={drama} comedyData={comedy} animationData={animation} mysteryData={mystery}/>}/>
            <Route path="/" element={<Navigate  to="/home" />} />
            <Route path='/drama' element={<Drama dramaData={drama}/>}/>
            <Route path='/comedy' element={<Comedy comedyData={comedy}/>}/>
            <Route path='/animation' element={<Animation animationData={animation}/>}/>
            <Route path='/mystery' element={<Mystery mysteryData={mystery}/>}/>
            {/* login && signUP */}
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            {/* MovesDetails */}
            <Route path='/DramaDetails/*' element={<DramaDetails dramaData={drama}/>}/>
            <Route path='/ComedyDetails/*' element={<ComedyDetails comedyData={comedy}/>}/>
            <Route path='/MysteryDetails/*' element={<MysteryDetails mysteryData={mystery}/>}/>
            <Route path='/AnamationDetails/*' element={<AnamationDetails animationData={animation}/>}/>
            {/* Notfound page */}
            <Route path='/notfound' element={<Notfound/>}/>
            <Route path="/*" element={<Navigate  to="/notfound" />} />



          </Routes>
          <Footer/>
        </>
    )
  }
}
