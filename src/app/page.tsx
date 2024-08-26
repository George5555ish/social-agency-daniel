"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import { Calendar, DollarSign, Globe } from "react-feather";
import IsotopeLayout from "./components/IsotopeComp";
import Lenis from "@studio-freight/lenis";
import Img from "./components/Img";
import Testimonials from "./components/Testimonials";
import TestimonialsMain from "./components/TestimonialsMain";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
const loadIsotope = () => require("isotope-layout");
export default function Home() {
  useEffect(() => {
    // if (window !== undefined) {
    //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // }
  }, []);

  let Isotope;
  const ANIMATION_DELAY = 2000;
  const countUpRef = useRef(null);
  // Ref of isotope container
  // Ref to store the isotope object

  const containerRef = useRef<HTMLDivElement>(null);
  const isotopeRef = useRef();

  const [showPreloader, setShowPreloader] = useState(true);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

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
      setShowPreloader(false);
    }, ANIMATION_DELAY);
  }, []);

  useEffect(() => {
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
          <a href="/" className="logo d-flex align-items-center">
            <img
              src="assets/img/social-agency-logo.svg"
              alt=""
              style={{ transform: "scale(3)", marginLeft: "30px" }}
            />
            {/* <Img  src="assets/img/social-agency-logo.svg"/> */}
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
              {/* <li>
                <a href="#portfolio">Portfolio</a>
              </li> */}
              {/* <li>
                <a href="#team">Team</a>
              </li> */}
              {/* <li className="dropdown">
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
              </li> */}
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      <main className="main">
        {/* <!-- Hero Section --> */}
        <div className="h-[100vh] relative">
          <div
            className="bg-none absolute top-0 left-0 w-full p-4 text-center justify-center align-center"
            data-aos="fade-up"
          >
           <div className="flex items-center justify-center">
           <img
              src="assets/img/social-agency-logo.svg"
              width={'800px'}
              height={'800px'}
              alt=""
              // style={{ marginLeft: "30px" }}
            />
           </div>
            <h2
              className="montserrat-heading"
              style={{ fontFamily: 'serif', fontWeight: "bold", color: "#fff" }}
            >
              HOSPITALITY SOCIAL MEDIA AGENCY
            </h2>
          </div>
          <video
            width="100%"
            height="100%"
            controls={false}
            muted={true}
            autoPlay={true}
            loop={true}
            preload="none"
            style={{ 
              maxHeight: '1000px',
              objectFit: 'cover'
            }}
          >
            <source src="/assets/video/intro-video.mp4" className="w-full object-cover" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <section
          id="hero"
          className="hero section"
          style={{
            backgroundImage: "url()",
          }}
        >
          <div className="container ">
            <div className="flex flex-col sm:flex-row items-center justify-center grow_online_div">
              <div className="bg-none px-24" data-aos="fade-up">
                <h2 className="text-center sm:text-left">
                 Let{"'"}s help you grow online!
                </h2>
                <p className="text-center">
                  We are a UK based social media agency for restaurants, hotels,
                  cafes and brands. We amplify your voice and build your brand.
                  Let us take social media off your plate.
                </p>
                <div className="pb-8 mt-4 flex justify-center items-center">
                  <a
                    href="#contact"
                    className="p-4 rounded-xl shadow-lg items-center justify-center border text-center font-bold text-2xl bg-sky-500 text-white"
                  >
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
                  src="assets/img/cocktail.PNG"
                  className="img-fluid animated"
                  alt=""
                />
                {/* <Img src="assets/img/hero-img.png" /> */}
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
          {/* <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" /> */}
          <Img src="assets/img/stats-bg.jpg" />

          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="counter-div flex flex-col md:flex-row items-center justify-around">
              <div className="">
                <div className="stats-item text-center">
                  {/* <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span> */}
                  <CountUp end={10} suffix="+" />
                  <p className="font-bold text-2xl font-sans">Clients</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="">
                <div className="stats-item text-center w-100 h-100">
                  {/* <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span> */}
                  <CountUp end={50} suffix="+" />
                  <p>Projects</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="">
                <div className="stats-item text-center w-100 h-100">
                  {/* <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span> */}

                  <CountUp end={500} suffix="+"/>
                  <p>Hours Of Support</p>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              {/* <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
            
                  <CountUp end={5} />
                  <p>Workers</p>
                </div>
              </div> */}
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
                {/* <img
                  src="assets/img/bg-main.JPG"
                  className="img-fluid animated"
                  alt=""
                /> */}
                <Img src="assets/img/bg-main.JPG" />
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
                <h3>More About Us</h3>
                <p className="pt-4">
                Social media has completely transformed our approach to advertising. 
We have seen the media shift from traditional ways of brand building to digital first strategies. 
We are interested in putting your brand in the spotlight and helping you reach your target audience on all platforms! 
                </p>
                {/* <ul>
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
                </ul> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /About Section --> */}

        {/* <!-- Services Section --> */}
        <Testimonials />
        {/* <!-- /Services Section --> */}

        {/* <!-- Portfolio Section --> */}

        {/* <IsotopeLayout /> */}
        {/* <!-- /Portfolio Section --> */}

        {/* <!-- Testimonials Section --> */}

        {/* <TestimonialsMain /> */}
        {/* <!-- /Testimonials Section --> */}

        {/* <!-- Team Section --> */}
        {/* <Team /> */}
        {/* <!-- /Team Section --> */}

        {/* <!-- Gallery Section --> */}
        {/* <Gallery /> */}
        {/* <!-- /Gallery Section --> */}

        {/* <!-- Contact Section --> */}
        <section id="contact" className="contact section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            {/* <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p> */}
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            {/* <div
              className="mb-4 border border-sky-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px]"
              ></iframe>
            </div> */}
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
                    <p>London, UK</p>
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
                    <p>+44 07943023656</p>
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
                    <p>esther@thesocialagency.link</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
              </div>

              <div className="col-lg-8">
                <form
                  action="mailto:esthermbajiaku@gmail.com" 
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
                    <div className="pb-8 mt-4 flex justify-center items-center">
                  <button type="submit" 
                    className="p-3 px-4 rounded-xl shadow-lg items-center justify-center border text-center font-bold text-sm bg-sky-500 text-white"
                  >
                    Submit
                  </button>
                </div>
                    {/* <div className="col-md-12 text-center"> 

                      <button type="submit">Send Message</button>
                    </div> */}
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
              <p>Let us help you grow online.</p>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul> 
                <li>
                  <a href="#">Social Media management</a>
                </li>
                <li>
                  <a href="#">Website</a>
                </li>
                <li>
                  <a href="#">Paid Ads</a>
                </li>
                <li>
                  <a href="#">Menu Designs</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>London</p>
              {/* <p>New York, NY 535022</p> */}
              <p>United Kingdom</p>
              <p className="mt-4">
                <strong>Phone:</strong> <span>07943023656</span>
              </p>
              <p>
                <strong>Email:</strong> <span>esther@thesocialagency.link</span>
              </p>
            </div>
          </div>
        </div>
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
      <div
        id="preloader"
        style={{
          transition: "0.45 ease",
          display: showPreloader ? "block" : "none",
        }}
      ></div>
    </div>
  );
}
