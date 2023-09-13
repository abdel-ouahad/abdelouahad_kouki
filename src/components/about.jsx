import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
export default function About() {
  return (
    <section className="About" id="About">
      <h1 className="text-center py-5 fw-bold mb-4">About me</h1>
      <div className="row justify-content-between mx-5 py-5 fw-bold">
        <div className="col-lg-6 mb-5">
          <div className="abouttext ">
            <h3 className="text-dark mb-5">
              I'm, a Web application developer who focuses on telling my clients' stories visually, through enjoyable and meaningful experiences. I specialize in responsive applications.
            </h3>
            <p className="pt-4 text-secondary mb-5">
              Over the past 2 years, I have been studying web application materials to become a powerful web developer.
            </p>
          </div>
          <div className="row text-center text-uppercase my-4 mb-5">
            <div className="col-sm-4">
              <div className="fact-item">
                <h1 className="fs-1 fw-bold">5</h1>
                <p className="text-muted">PROJECTS COMPLETED</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fact-item">
                <h1 className="fs-1 fw-bold">22</h1>
                <p className="text-muted">HAPPY CLIENTS</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fact-item">
                <h1 className="fs-1 fw-bold">+10</h1>
                <p className="text-muted">POSITIVE REVIEWS</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex align-content-center align-items-center">
              <a href="./mon cv.pdf" target="_blank" style={{ backgroundColor: '#6B3BA8' }} className="btn me-4 text-center text-light" download="./mon cv.pdf"> Download cv</a>
              <div className="social-links px-5">
                <a rel='noreferrer'   target="_blank" href="https://github.com/abdel-ouahad" className="text-dark px-2"><i className="fa-brands fa-github fa-2x"></i></a>
                <a rel='noreferrer'  target="_blank" href="https://twitter.com/AbdelouahadKou1" className="text-dark px-2"><i className="fab fa-twitter fa-2x"></i></a>
                <a rel='noreferrer'  target="_blank" href="https://www.linkedin.com/in/abdelouahad-kouki-09327a1b3" className="text-dark px-2"><i className="fab fa-linkedin-in fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="pro mb-5">
            <h1 className="fs-4 fw-bold ps-2">React js</h1>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%', backgroundColor: '#6B3BA8' }}></div>
            </div>
          </div>
          <div className="pro mb-5">
            <h1 className="fs-4 fw-bold ps-2">Laravel</h1>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%', backgroundColor: '#6B3BA8' }}></div>
            </div>
          </div>
          <div className="pro mb-5">
            <h1 className="fs-4 fw-bold ps-2">Php</h1>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%', backgroundColor: '#6B3BA8' }}></div>
            </div>
          </div>

          <div className="pro mb-5">
            <h1 className="fs-4 fw-bold ps-2">Java Script</h1>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%', backgroundColor: '#6B3BA8' }}></div>
            </div>
          </div>
          <div className="pro mb-5">
            <h1 className="fs-4 fw-bold ps-2">Bootstrap</h1>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{ width: '68%', backgroundColor: '#6B3BA8' }}></div>
            </div>
          </div>
        </div>
      </div>
    
  </section>
  )
}

