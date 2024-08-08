import React from 'react'
import Img from './Img'

function Gallery() {
  return (
    <section id="gallery" className="gallery section">
    {/* <!-- Section Title --> */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Gallery</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* <!-- End Section Title --> */}

    <div
      className="container-fluid"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="row g-0">
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-1.jpg"
              className="glightbox"
              data-gallery="images-gallery"
            >
              <Img src="assets/img/gallery/gallery-1.jpg" />
            </a>
          </div>
        </div>
        {/* <!-- End Gallery Item --> */}

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-2.jpg"
              className="glightbox"
              data-gallery="images-gallery"
            >
              <Img src="assets/img/gallery/gallery-2.jpg" />
            </a>
          </div>
        </div>
        {/* <!-- End Gallery Item --> */}

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-3.jpg"
              className="glightbox"
              data-gallery="images-gallery"
            >
              <Img src="assets/img/gallery/gallery-3.jpg" />
            </a>
          </div>
        </div>
        {/* <!-- End Gallery Item --> */}

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-4.jpg"
              className="glightbox"
              data-gallery="images-gallery"
            >
              <Img src="assets/img/gallery/gallery-4.jpg" />
            </a>
          </div>
        </div>
        {/* <!-- End Gallery Item --> */}

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-5.jpg"
              className="glightbox"
              data-gallery="images-gallery"
            >
              <Img src="assets/img/gallery/gallery-5.jpg" />
            </a>
          </div>
        </div>
        {/* <!-- End Gallery Item --> */}

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-6.jpg"
              className="glightbox"
              data-gallery="images-gallery"
            >
              <Img src="assets/img/gallery/gallery-6.jpg" />
            </a>
          </div>
        </div>
        {/* <!-- End Gallery Item --> */}

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-7.jpg"
              className="glightbox"
              data-gallery="images-gallery"
            >
              <Img src="assets/img/gallery/gallery-7.jpg" />
            </a>
          </div>
        </div>
        {/* <!-- End Gallery Item --> */}

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-8.jpg"
              className="glightbox"
              data-gallery="images-gallery"
            >
              <Img src="assets/img/gallery/gallery-8.jpg" />
            </a>
          </div>
        </div>
        {/* <!-- End Gallery Item --> */}
      </div>
    </div>
  </section>
  )
}

export default Gallery