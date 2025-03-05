import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container-fluid mt-5 bg-dark-subtle  ">
                <div className="row offset-1 pt-5">
                    <div className="col-lg-5">
                        <h1>Subscribe To Our Newsletter</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit!</p>
                    </div>
                    <div className="col-lg-5">
                        <input type="text" name="" className=' p-3 w-75 border border-3 border-success' id="" />
                        <button style={{ background: "green" }} className='btn-success p-3  '>Subscribe </button>
                    </div>
                </div>
                <div className="row bg-dark">
                    <div className="col-lg-3 ms-auto text-white">
                        <h2 className="mb-5 mt-5">AgriCulture</h2>
                        <p>A108 Adam Street <br></br>New York, NY 535022</p>
                        <b>Phone:</b><span> +1 5589 55488 55</span><br></br>
                        <b className='pe-2'>Email:</b><span>info@example.com</span>
                    </div>
                    <div className="col-lg-2 col-md-6 ">
                        <h5 className="text-white mt-5 mb-4">Useful Links</h5>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Home</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Aboutus</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Services</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Terms of Service</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Privacy Policy</a>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        
                        <h5 className="text-white mt-5 mb-4">Our Services</h5>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Web design</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Web Development</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>product Managment</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Marketing</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Graphic Design</a>
                        
                    </div>
                    <div className="col-lg-2 col-md-6 ">
                        
                        <h5 className="text-white mt-5 mb-4">Hic solutasetp</h5>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Home</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Aboutus</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Services</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Terms of Service</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Privacy Policy</a>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        
                        <h5 className="text-white mt-5 mb-4">Nobis illum</h5>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Home</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Aboutus</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Services</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Terms of Service</a>
                        <a href="/home" className='d-block text-decoration-none text-white mb-3'>Privacy Policy</a>

                    </div>
                </div>
                <div className="row bg-black">
                    <div className="col-lg-6 p-4">
                        <p className='ms-5 text-white'> © Copyright MyWebsite. All Rights Reserved <br></br>  Designed by <span className='text-success fw-semibold'>BootstrapMade</span></p>
                        <b> </b>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center">
                            <a href="https://www.facebook.com/"  className='text-decoration-none mt-4 me-4'>
                            <i className="fa-brands fa-facebook-f bg-dark p-1 px-2 fs-3  text-success"></i>
                            </a>
                            <a href="https://www.instagram.com/"  className='text-decoration-none mt-4 me-4'>
                            <i className="fa-brands fa-instagram bg-dark p-1 fs-3 text-success"></i>
                            </a>
                            <a href="https://www.twitter.com/" className='text-decoration-none mt-4 me-4'>
                            <i className="fa-brands fa-twitter bg-dark p-1 fs-3 text-success"></i>
                            </a>
                            <a href="https://www.linkedin.com/"  className='text-decoration-none mt-4 me-4'>
                            <i className="fa-brands fa-linkedin bg-dark p-1 fs-3 text-success "></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
