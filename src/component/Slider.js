import React from 'react'

export default function Slider() {
    const obj = {
        height:"600px",
        
      }
      const obj2 = {
        height:"600px",
        width:"100%",
        objectFit: "cover",
        filter:"brightness(50%)"
      }
      
            

    return (
        <>
            <div className="slider">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner" style={obj}>
                    <div className="carousel-item active"  >
                        <img src="img/hero_1.jpg" className="d-block  text-dark-100" style={obj2} alt="no" />
                        <div className=" carousel-caption  d-md-block ">
                            <h1 className='text-white fw-bold marcellus-regular'>Farming is the best solution of worlds starvation</h1>
                            <p className='fs-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br></br> et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/hero_2.jpg" className="d-block" style={obj2} alt="no" />
                        <div className="carousel-caption  d-md-block">
                            <h1 className=' fw-bold marcellus-regular'>Organic vegetables is good for health</h1>
                            <p className=' '>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime<br></br> placeat facere possimus.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/hero_3.jpg" className="d-block" style={obj2} alt="no" />
                        <div className="carousel-caption  d-md-block">
                            <h1 className='fw-bold marcellus-regular'>Providing Fresh Produce Every Single Day</h1>
                            <p className=''>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/hero_4.jpg" className="d-block" style={obj2} alt="no" />
                        <div className="carousel-caption   d-md-block">
                            <h1 className='fw-bold pb-4 marcellus-regular'>Farming as a Passione</h1>
                            <p className=''>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/hero_5.jpg" className="d-block" style={obj2} alt="no" />
                        <div className="carousel-caption   d-md-block">
                            <h1 className='fw-bold pb-4 marcellus-regular'>Good Food For All</h1>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>

        </>
    )
}
