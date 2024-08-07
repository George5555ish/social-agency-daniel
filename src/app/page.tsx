"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp, { useCountUp } from "react-countup"; 
import { Calendar, DollarSign, Globe } from "react-feather";
import IsotopeLayout from "./components/IsotopeComp";
import Lenis from "@studio-freight/lenis";
export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  let Isotope;
  const ANIMATION_DELAY = 2000; 
  const countUpRef = useRef(null);
  // Ref of isotope container
  // Ref to store the isotope object

  const containerRef = useRef<HTMLDivElement>(null);
  const isotopeRef = useRef();

  const [showPreloader, setShowPreloader] = useState(true)
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const loadIsotope = () => require("isotope-layout");
 
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  useEffect(() => {
     setTimeout(() => {
      setShowPreloader(false)
     },ANIMATION_DELAY);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // load Isotope
    Isotope = loadIsotope();

    // use Isotope
    isotopeRef.current = new Isotope(containerRef.current, {
      itemSelector: ".my-item",
      layoutMode: "fitRows",
    });
  }, []);
  return (
    <div className="index-page">
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img
              src="assets/img/social-agency-logo.svg"
              alt=""
              style={{ transform: "scale(3)", marginLeft: '30px' }}
            />
            {/* <!-- Uncomment the line below if you also wish to use text logo --> */}
            {/* <!-- <h1 className="sitename">Butterfly</h1>  --> */}
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      <main className="main">
        {/* <!-- Hero Section --> */}
        <section id="hero" className="hero section light-background">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-md-start"
                data-aos="fade-up"
              >
                <h2>CREATING WEBSITES THAT MAKE YOU STOP &amp; STARE</h2>
                <p>
                  We are team of talented designers making websites with
                  Bootstrap
                </p>
                <div className="d-flex mt-4 justify-content-center justify-content-md-start">
                  <a href="#about" className="cta-btn">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <img
                  src="assets/img/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
                {/* <img
                  src="assets/img/bg-main.JPG"
                  className="img-fluid animated"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Hero Section --> */}
        {/* <!-- Stats Section --> */}
        <section id="stats" className="stats section light-background">
          <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />

          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center">
                  {/* <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span> */}
                  <CountUp end={20} suffix="+" />
                  <p className="font-bold text-2xl font-sans">Clients</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  {/* <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span> */}
                  <CountUp end={100} suffix="+" />
                  <p>Projects</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  {/* <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span> */}

                  <CountUp end={500} />
                  <p>Hours Of Support</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  {/* <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span> */}
                  <CountUp end={5} />
                  <p>Workers</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- /Stats Section --> */}

        {/* <!-- About Section --> */}
        <section id="about" className="about section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 position-relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="assets/img/bg-main.JPG"
                  className="img-fluid animated"
                  alt=""
                />
                {/* <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox pulsating-play-btn"
                ></a> */}
              </div>

              <div
                className="col-lg-6 ps-lg-4 content d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>About Us</h3>
                <p>
                  We believe in excellence in whatever field we put our minds
                  to. Working with past clients, we have always prioritized
                  customer satisfaction, and we have the testimonials to prove
                  it.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-diagram-3"></i>
                    <div>
                      <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                      <p>100% would work again.</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-fullscreen-exit"></i>
                    <div>
                      <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                      <p>100% would work again.</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-broadcast"></i>
                    <div>
                      <h5>Voluptatem et qui exercitationem</h5>
                      <p>100% would work again.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /About Section --> */}

        {/* <!-- Services Section --> */}
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
                  <a href="/service/web-design" className="stretched-link">
                    <h3>Web Design</h3>
                  </a>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
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
                    href="/service/social-media-marketing"
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
                  <a href="/service/seo" className="stretched-link">
                    <h3>SEO </h3>
                  </a>
                  <p>
                    Work with us and rank at the top of the Google search
                    results, ensuring customers stumble on your business and
                    outshine the competition
                  </p>
                </div>
              </div>

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
                  <a href="/service/seo" className="stretched-link">
                    <h3>SEO </h3>
                  </a>
                  <p>
                    Work with us and rank at the top of the Google search
                    results, ensuring customers stumble on your business and
                    outshine the competition
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

             
            </div>
          </div>
        </section>
        {/* <!-- /Services Section --> */}

        {/* <!-- Portfolio Section --> */} 

        <IsotopeLayout />
        {/* <!-- /Portfolio Section --> */}

        {/* <!-- Testimonials Section --> */}
      
        <section
          id="testimonials"
          className="testimonials section dark-background"
        >
          
          <img
            src="assets/img/testimonials-bg.jpg"
            className="testimonials-bg"
            alt=""
          />

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- /Testimonials Section --> */}

        {/* <!-- Team Section --> */}
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
                  <img
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
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
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
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
                  <img
                    src="assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
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
                  <img
                    src="assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
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
        {/* <!-- /Team Section --> */}

        {/* <!-- Gallery Section --> */}
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
                    <img
                      src="assets/img/gallery/gallery-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
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
                    <img
                      src="assets/img/gallery/gallery-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
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
                    <img
                      src="assets/img/gallery/gallery-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
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
                    <img
                      src="assets/img/gallery/gallery-4.jpg"
                      alt=""
                      className="img-fluid"
                    />
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
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      alt=""
                      className="img-fluid"
                    />
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
                    <img
                      src="assets/img/gallery/gallery-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
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
                    <img
                      src="assets/img/gallery/gallery-7.jpg"
                      alt=""
                      className="img-fluid"
                    />
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
                    <img
                      src="assets/img/gallery/gallery-8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- /Gallery Section --> */}

        {/* <!-- Contact Section --> */}
        <section id="contact" className="contact section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4 border border-sky-200" data-aos="fade-up" data-aos-delay="200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px]"
              ></iframe>
            </div>
            {/* <!-- End Google Maps --> */}

            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>93 Beaumont Drive, Gravesend</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
              </div>

              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required={true}
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required={true}
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required={true}
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required={true}
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!-- End Contact Form --> */}
            </div>
          </div>
        </section>
        {/* <!-- /Contact Section --> */}
      </main>

      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">The Social Agency</span>
              </a>
              <p>
             Work with us and upscale your business.
              </p>
          
            </div> 

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>93 Beaumont Drive Gravesend</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-4">
                <strong>Phone:</strong> <span>+44 7939663626</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Butterfly</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div> */}
      </footer>

      {/* <!-- Scroll Top --> */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <!-- Preloader --> */}
      <div id="preloader" style={{
        transition: '0.45 ease',
        display: showPreloader ? 'block' : 'none'
      }}></div>
    </div>
  );
}
