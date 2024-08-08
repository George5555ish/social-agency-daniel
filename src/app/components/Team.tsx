import React from 'react'
import Img from './Img'

function Team() {
  return (
    <section id="team" className="team section">
    {/* <!-- Section Title --> */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Team</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* <!-- End Section Title --> */}

    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member">
            <Img src="assets/img/team/team-1.jpg" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Team Member --> */}

        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="member">
            <Img src="assets/img/team/team-2.jpg" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Team Member --> */}

        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="member">
            <Img src="assets/img/team/team-3.jpg" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Team Member --> */}

        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="member">
            <Img src="assets/img/team/team-4.jpg" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Team Member --> */}
      </div>
    </div>
  </section>
  )
}

export default Team