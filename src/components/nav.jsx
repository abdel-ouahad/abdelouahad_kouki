import React from 'react'
import logo from '../images/logooo.png'
export default function nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor : '#B6A4D9'}}>
        <div className="container-fluid mx-5" style={{ display : 'flex' , justifyContent : 'space-between'  }}>
        <a href='#Home'  style={{ cursor: 'pointer' }} className="navbar-brand fw-bold d-flex   align-items-center text-start ">
            <img style={{ width: '80px' }} className="py-0 " src={logo} alt="#Home"/>
            <div   className="textlogo  fs-4 pt-2">
                <h3 style={{ color: '#6B3BA8' }}  className="fw-bold">Kouki Web Déveloper</h3>
            </div>
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul  className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold" >
              <li  className="nav-item"> 
                <a style={{ color: '#6B3BA8' , fontSize : '20px'  , marginLeft : '10px'  }} className="nav-link " href="#Home">Home</a>
              </li>
              <li className="nav-item"> 
                <a style={{ color: '#6B3BA8', fontSize : '20px'  , marginLeft : '10px' }}  className="nav-link " href="#About">About</a>
              </li>
                <li className="nav-item">
                <a  style={{ color: '#6B3BA8', fontSize : '20px'  , marginLeft : '10px' }} className="nav-link " href="#Service">Service</a>
              </li>
              <li className="nav-item">
                <a  style={{ color: '#6B3BA8' , fontSize : '20px'  , marginLeft : '10px'}} className="nav-link " href="#Portfolio">Portfolio</a>
              </li>
              <li className="nav-item"> 
                <a  style={{ color: '#6B3BA8' , fontSize : '20px'  , marginLeft : '10px'}} className="nav-link " href="#freelancing">Hire me</a>
              </li>
              <li className="nav-item"> 
                <a  style={{ color: '#6B3BA8' , fontSize : '20px'  , marginLeft : '10px'}} className="nav-link " href="#Contact">Contact</a>
              </li>
            </ul>
      </div>
  </div>
</nav>
    </>
  )
}
