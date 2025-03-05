import React from 'react';

export default function Aboutus() {
  let obj = { background: "#116530" }

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row mt-2 ms-3">
          <div className="col-lg-6 col-md-12 col-sm-12 ps-5" data-aos="fade-up" data-aos-delay="100">
            <h2 className="content-title mb-4 mt-5 text-success pt-5 ">Plants Make Life Better</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus placeat, atque qui voluptatem velit explicabo vitae repellendus architecto provident nisi ullam minus asperiores commodi! Tenetur, repellat aliquam nihil illo.</p>
            <ul className="list-unstyled list-check">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Velit explicabo vitae repellendu</li>
              <li>Repellat aliquam nihil illo</li>
            </ul>
            <p><a href="/gettouch" style={obj} className="btn text-white py-3 px-4 text-uppercase">Get in touch</a></p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5 position-relative" data-aos="zoom-out">
            <img src="img/img_sq_1.jpg" alt="no" className="img-fluid" />
            <a href="/play" className="glightbox pulsating-play-btn">
              <span className="play"><i className="bi bi-play-fill"></i></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}