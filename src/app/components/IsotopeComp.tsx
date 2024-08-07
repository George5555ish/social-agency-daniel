import React from "react";
import Isotope from "isotope-layout";
import Img from "./Img";

const IsotopeLayout = () => {
  // init one ref to store the future isotope object
  const isotope = React.useRef<Isotope | null>();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current?.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  return (
    <> 
          <section id="portfolio" className="portfolio section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
            <ul
                className="portfolio-filters isotope-filters pt-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li data-filter="*" className={filterKey == "*" ? "filter-active": ""} onClick={handleFilterKeyChange("*")}>
                  All
                </li>
                <li data-filter=".filter-app" className={filterKey == "web-design" ? "filter-active": ""} onClick={handleFilterKeyChange("web-design")}>Web Design</li>
                <li data-filter=".filter-product" className={filterKey == "product" ? "filter-active": ""} onClick={handleFilterKeyChange("product")}>Product</li>
                <li data-filter=".filter-branding" className={filterKey == "branding" ? "filter-active": ""} onClick={handleFilterKeyChange("branding")}>Branding</li>
              
              </ul>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="filter-container">
            <div
              className="isotope-layout "
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
             
              {/* <!-- End Portfolio Filters --> */}

              <div
                className="col gy-4 filter-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="col-lg-4 col-md-6 portfolio-item filter-item product filter-app">
                  <div className="portfolio-content h-100">
                    <Img src="assets/img/portfolio/app-1.jpg" />
                    {/* <img
                      src="assets/img/portfolio/app-1.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/app-1.jpg"
                        title="App 1"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item web-design filter-product">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/product-1.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                                   <Img   src="assets/img/portfolio/product-1.jpg" />
                    <div className="portfolio-info">
                      <h4>Web Design 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/product-1.jpg"
                        title="Web Design 1"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item product filter-branding">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/branding-1.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                               <Img  src="assets/img/portfolio/branding-1.jpg"/>
                    <div className="portfolio-info">
                      <h4>Branding 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/branding-1.jpg"
                        title="Branding 1"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item web-design filter-books">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/books-1.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                    <Img src="assets/img/portfolio/books-1.jpg" />
                    <div className="portfolio-info">
                      <h4>Web Design 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/books-1.jpg"
                        title="Web Design 2"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item web-design filter-app">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/app-2.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                       <Img src="assets/img/portfolio/app-2.jpg" />
                    <div className="portfolio-info">
                      <h4>Web Design 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/app-2.jpg"
                        title="Web Design 2"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item product filter-product">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/product-2.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                     <Img src="assets/img/portfolio/product-2.jpg" />
                    <div className="portfolio-info">
                      <h4>Product 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/product-2.jpg"
                        title="Product 2"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item product filter-branding">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/branding-2.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                        <Img src="assets/img/portfolio/branding-2.jpg" />
                    <div className="portfolio-info">
                      <h4>Branding 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/branding-2.jpg"
                        title="Branding 2"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item branding filter-books">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/books-2.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                      <Img src="assets/img/portfolio/books-2.jpg" />
                    <div className="portfolio-info">
                      <h4>Books 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/books-2.jpg"
                        title="Branding 2"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item branding filter-app">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/app-3.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                        <Img  src="assets/img/portfolio/app-3.jpg" />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/app-3.jpg"
                        title="App 3"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item web-design filter-product">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/product-3.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                     <Img   src="assets/img/portfolio/product-3.jpg"/>
                    <div className="portfolio-info">
                      <h4>Web Design 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/product-3.jpg"
                        title="Web Design 2"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item product filter-branding">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/branding-3.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                         <Img   src="assets/img/portfolio/branding-3.jpg"/>
                    <div className="portfolio-info">
                      <h4>Branding 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/branding-3.jpg"
                        title="Branding 2"
                        data-gallery="portfolio-gallery-branding"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-item branding filter-books">
                  <div className="portfolio-content h-100">
                    {/* <img
                      src="assets/img/portfolio/books-3.jpg"
                      className="img-fluid"
                      alt=""
                    /> */}
                      <Img   src="assets/img/portfolio/books-3.jpg"/>
                    <div className="portfolio-info">
                      <h4>Books 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a
                        href="assets/img/portfolio/books-3.jpg"
                        title="Branding 3"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}
              </div>
              {/* <!-- End Portfolio Container --> */}
            </div>
          </div>
        </section>
    </>
  );
};

export default IsotopeLayout;
