import React from 'react'
export default function Contact() {
  return (
    <div className="contact py-5 mx-5 py-4" id="Contact">
      <h1 className="text-center py-5 fw-bold mb-5">Contact Me</h1>
      <div className="row">
        <div className="col-lg-5 ps-5">
          <div className="contact-item d-flex mb-3">
            <div className="icon fs-2 me-3" style={{ color: '#6B3BA8' }}>
              <i className="fas fa-envelope"></i>
            </div>
            <div className="text ms-3 ">
              <h3 className="fs-3">Email</h3>
              <p className="text-muted fs-4">abdelouahadkouki@gmail.com</p>
            </div>
          </div>
          <div className="contact-item d-flex mb-3">
            <div className="icon fs-2 me-3" style={{ color: '#6B3BA8' }}>
              <i className="fas fa-phone"></i>
            </div>
            <div className="text ms-3">
              <h3 className="fs-3">Phone</h3>
              <p className="text-muted fs-4">06 87 08 65 44</p>
            </div>
          </div>
          <div className="contact-item d-flex mb-3">
            <div className="icon fs-2 me-3" style={{ color: '#6B3BA8' }}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="text ms-3">
              <h3 className="fs-3">Visit office</h3>
              <p className="text-muted fs-4">304 hasania1, Mohammedia</p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <form action="">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control  form-control-lg fs-6 border-0 shadow-sm"
                />
              </div>
              <div className="col-lg-6 mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control form-control-lg fs-6 border-0 shadow-sm"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-control form-control-lg fs-6 border-0 shadow-sm"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-4">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="form-control form-control-lg fs-6 border-0 shadow-sm"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="btn text-light px-3 "
                  style={{ backgroundColor: '#6B3BA8' }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}