import React from 'react'

export default function Whatido() {
  return (
    <div className="service" id="Service">
    <div className="mx-5 py-5">
      <h1 className="text-center py-5 fw-bold mb-5">What I Do</h1>
      <div className="row">
        <div className="col-lg-4 text-center">
          <i className="fas fa-code fs-2" style={{ color: '#6B3BA8' }}></i>
          <h3 className=" py-4 fw-bold">Web Development</h3>
          <p className="text-dark fs-5">I make sure to provide you with unique, purposeful, effective, and affordable Website Design & Development Packages with full exclusive customization to cater to your specific needs.</p>
        </div>
        <div className="col-lg-4 text-center">
          <i className="fas fa-lightbulb fs-2" style={{ color: '#6B3BA8' }}></i>
          <h3 className=" py-4 fw-bold">Give Idea</h3>
          <p className="text-dark fs-5">If you can't imagine how your website should look like, I can help you with the most beautiful ideas.</p>
        </div>
        <div className="col-lg-4 text-center">
          <i className="fas fa-image fs-2" style={{ color: '#6B3BA8' }}></i>
          <h3 className=" py-4 fw-bold">UI - UX</h3>
          <p className="text-dark fs-5">Create the project to be attractive to the specific type of people you want, like clients or visitors!</p>
        </div>
      </div>
    </div>
  </div>
  )
}

