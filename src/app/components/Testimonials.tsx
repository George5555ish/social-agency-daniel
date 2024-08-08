import React from 'react'
import { Calendar, DollarSign, Globe } from 'react-feather'

function Testimonials() {
  return (
    <section id="services" className="services section light-background">
    {/* <!-- Section Title --> */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>We offer the following services to the best of our ability</p>
    </div>
    {/* <!-- End Section Title --> */}

    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="service-item  position-relative">
            <div className="icon">
              {/* <i
                className="bi bi-cash-stack"
                style={{ color: "#0dcaf0" }}
              ></i> */}
              <DollarSign color={"#0dcaf0"} size={50} />
            </div>
            <a  className="stretched-link">
              <h3>Web Site</h3>
            </a>
            <p>
            Website is the digital forefront of your business. Let us design an on-brand captivating website for you.
            </p>
          </div>
        </div>
        {/* <!-- End Service Item --> */}

        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="service-item position-relative">
            <div className="icon">
              {/* <i
                className="bi bi-calendar4-week"
                style={{ color: "#0dcaf0" }}
              ></i> */}
              <Calendar color={"#20c997"} size={50} />
            </div>
            <a
           
              className="stretched-link"
            >
              <h3>Social Media Marketing</h3>
            </a>
            <p>
              Work with us and ensure your business gets the exposure it
              needs
            </p>
          </div>
        </div>
        {/* <!-- End Service Item --> */}

        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="service-item position-relative">
            <div className="icon">
              {/* <i
                className="bi bi-chat-text"
                style={{ color: "#20c997" }}
              ></i> */}
              <Globe color={"magenta"} size={50} />
            </div>
            <a className="stretched-link">
              <h3>SEO </h3>
            </a>
            <p>
              Work with us and rank at the top of the Google search
              results, ensuring customers stumble on your business and
              outshine the competition
            </p>
          </div>
        </div>

        

       
      </div>
    </div>
  </section>
  )
}

export default Testimonials