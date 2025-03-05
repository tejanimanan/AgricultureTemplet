import React from 'react'

export default function BlogCard() {
    return (
        <>

            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center text-dark">Recent Posts</h2>
                        <h2 className="text-center text-black">Necessitatibus eius consequatur</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3 ">
                        <div className="card" >
                            <div className="card-image position-relative">
                                <img src="img/blog/blog-1.jpg" alt="no" />
                                <p className='bg-success px-3 py-1 position-absolute bottom-0 end-0'>December 12</p>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-success fw-semibold">Eum  ad  dolor et.Authem aut  fugiat debitis</h5>
                                <p className="card-text text-secondary"><i class="fa-solid fa-user px-2"></i>julia parker <span className='px-3'>/</span><i class="fa-solid fa-folder-closed px-2"></i> Politics</p>
                                <hr className='opacity-25' />
                                <p className=" text-secondary">Read More <i class="fa-solid fa-arrow-right px-2"></i></p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <div className="card" >
                            <div className="card-image position-relative">
                                <img src="img/blog/blog-2.jpg"
                                    className="" alt="no" />
                                <p className='bg-success px-3 py-1 position-absolute bottom-0 end-0'>December 12</p>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-success fw-semibold">Et repellendus molestias qui est sed ominis.</h5>
                                <p className="card-text text-secondary"><i class="fa-solid fa-user px-2"></i>julia parker <span className='px-3'>/</span><i class="fa-solid fa-folder-closed px-2"></i> Politics</p>
                                <hr className='opacity-25' />
                                <p className=" text-secondary">Read More <i class="fa-solid fa-arrow-right px-2"></i></p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <div className="card " >
                            <div className="card-image position-relative">
                                <img src="img/blog/blog-3.jpg"
                                    className="" alt="no" />
                                <p className='bg-success px-3 py-1 position-absolute bottom-0 end-0'>December 12</p>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-success fw-semibold">Eum  ad  dolor et.Authem aut  fugiat debitis</h5>
                                <p className="card-text text-secondary"><i class="fa-solid fa-user px-2"></i>julia parker <span className='px-3'>/</span><i class="fa-solid fa-folder-closed px-2"></i> Politics</p>
                                <hr className='opacity-25' />
                                <p className=" text-secondary">Read More <i class="fa-solid fa-arrow-right px-2"></i></p>
                               </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
