import React from 'react'
import main from '../images/mainphoto.png'
export default function Home() {
  return (
    <>
    <section className="home py-4  " id="Home">
            <div style={{ height : '785px' }} className=" text-md-center mx-5 mt-5 mt-md-0 mt-md-0 row  align-items-center">
                <div className="col-md-6 d-none d-lg-block text-center" >
                        <img src={main} className="home-img d-none d-lg-block " style={{ margin: 'auto' , width : '90%' }} alt="" />
                </div>
                <div className="col-md-12 col-lg-6 text-md-center order-md-first">
                        <div className="home-text text-center  text-lg-start">
                        <p className="  fs-4 mb-1 ">hello , i'm</p>
                        <h1 style={{ color: '#6B3BA8' }} className=" fw-bold text-uppercase fs-1 ">Web application déveloper</h1>
                        <h2 className=" fs-2">Abdelouahad Kouki</h2>
                        <p className="mt-4 fs-5">
                        Hi, I'm Kouki, a web application developer and creator of online experiences. Passionate about the world of web development, I'm constantly keeping an eye on the latest technological trends and industry best practices. My goal is to create innovative and engaging online experiences that leave a lasting impression and inspire users.

                        If you're looking for a passionate web developer or interested in collaborating on exciting projects, please don't hesitate to get in touch with me. I'm open to new opportunities and always ready to contribute to innovative projects.</p>
                        <button style={{ backgroundColor: '#6B3BA8' }}    type="button" className="btn text-light px-4 mt-3"><a  href="#Portfolio" style={{ textDecoration: 'none' , color : 'white'  }}>My Work</a></button>
                        </div>
                    </div>
            </div>
    </section>
    </>
  )
}

