import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './Blog_card'

export default function BlogMenu() {
    let obj = {
        filter: "brightness(0.6)",
        height: "40vh",
        width: "100%",
        position: "relative"
    }

    let obj2 = {
        position: "absolute",
        top: "20%",
        left: "45%",
        textAlign: "center",
        color: "#fff",

    }

    return (
        <>
            <div className="container-fluid m-0">
                <div className="row">
                    <div className="col-lg-12">
                        <img style={obj} src="img/page-title-bg.webp" className='' alt="no" />
                        <div style={obj2} className='z-0 '>
                            <h1 className="fw-semibold marcellus-regular"> Blog</h1>
                            <p className='fs-5 text-white-75 fw-normal'>Home/ Blog</p>
                            <p className='fs-5 text-white-75 fw-normal'><Link to="/" className='text-success'>Home</Link>/ Blog</p>

                        </div>
                        <BlogCard />
                    </div>
                </div>
            </div>
        </>
    )
}
