import { Link } from 'react-router-dom';
import React from 'react';
import Aboutus from './Aboutus';
// import Footer from './Footer';

export default function AboutMenu() {
  let obj = {
    filter: "brightness(0.6)",
    height: "40vh",
    width: "100%",
    position: "relative"
  }

  let obj2 = {
    position: "absolute",
    top: "100px",
    left: "200px",
    textAlign: "center",
    color: "#fff"
  }

  return (
    <>
      <div className="container-fluid m-0">
        <div className="row">
          <div className="col-lg-12">
            <img style={obj} src="img/page-title-bg.webp" className='' alt="no" />
            <div style={obj2} className='z-0 '>
              <h1 className="fw-semibold marcellus-regular">About</h1>
              <span className='fs-5 text-white '>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</span>
              <p className='fs-5 text-white-75 fw-normal'><Link to="/" className='text-success'>Home</Link>/ About</p>
            </div>
            <Aboutus />
          </div>

        </div>
      </div>
    </>
  )
}
