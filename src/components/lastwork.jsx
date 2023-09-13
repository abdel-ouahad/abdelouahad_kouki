import React from 'react'
import ram from '../images/ram.png'
import secend from '../images/secend.png'
import third from '../images/third.png'
import six from '../images/six.png'
import forth from '../images/forth.png'
import five from '../images/five.png'
export default function Lastwork() {
  return (
    <div className="mx-5 py-5 portfolio" id="Portfolio">
      <h1 className="text-center py-5 fw-bold mb-5">Latest Work</h1>
      <div className="cards">
        <div className="row mb-4">
          <div className="col-lg-4 mb-5"  >
            <div className="card">
              <img src={secend}  className="card-img-top" alt="" />
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card">
              <img src={ram} style={{ boxShadow: 'black 0px 0px 20px -10px' }}  className="card-img-top" alt="" />
            </div>
          </div>
          <div className="col-lg-4 mb-5" >
            <div className="card">
              <img src={third}  style={{ boxShadow: 'black 0px 0px 20px -10px' }} className="card-img-top" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-5" >
            <div className="card">
              <img src={six}  style={{ boxShadow: 'black 0px 0px 20px -10px' }} className="card-img-top" alt="" />
            </div>
          </div>
          <div className="col-lg-4 mb-5" >
            <div className="card">
              <img src={forth}  style={{ boxShadow: 'black 0px 0px 20px -10px' }} className="card-img-top" alt="" />
            </div>
          </div>
          <div className="col-lg-4 mb-5" >
            <div className="card">
              <img src={five}  style={{ boxShadow: 'black 0px 0px 20px -10px' }} className="card-img-top" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

