import React from 'react'

export default function Navbar() {
  return (

    <>
    <div className="container-fluid z-1 position-relative">
      <div className="row bg-body-tertiary">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-md ">
            <div className="container">
              <a className="navbar-brand" href="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/logo.png">
                <img src="https://bootstrapmade.com/content/demo/AgriCulture/assets/img/logo.png" className="w-50" alt="no-img" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-md-0 text-dark">
                  <li className="nav-item me-3">
                    <a className="nav-link text-dark" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/about">About us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/services">Our Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/testimoni">Testimonials</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark " href="/blog">Blog</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-dark" href="/drop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item text-dark" href="/action1">dropdown</a></li>
                      <li><a className="dropdown-item text-dark" href="/action2"> dropdown2</a></li>
                      <li><a className="dropdown-item text-dark" href="/action3">dropdown3</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}
