import React from "react";
import '../components/Footer.css'

const Footer = () => {
  return (
    <div>
      <section className="bg-white footer text-dark">
        <div className="container pb-5 pt-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 widget-area">
              <div className="widget widget_text clearfix">
                <div className="d-sm-flex align-items-center">
                  <div className="footer-logo">
                    <img
                      id="footer-logo-img"
                      className="img-fluid auto_size"
                      height="46"
                      width="170"
                      src="https://www.linnseed.com/front_assets/HomeResource/logo.png"
                      alt="image"
                    />
                  </div>
                  <div className="textwidget widget-text text-dark">
                    <p>
                      Agrawal Cotton Pvt Ltd is working as a sourcing agent for
                      the cotton and yarn industry. We are working with various
                      spinning mills across India and exporting to all the major
                      textile manufacturers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <hr className="w-100 mt-4 mb-4" />
          </div>
          <div className="row">
            <div className="col-md-4 widget">
              <h4 className="widget-title" style={{ marginBottom: "20px" }}>
                Contact Us
              </h4>
              <ul className="widget_contact_wrapper">
                <li>
                  <i className="text-c-main fa fa-map-marker"></i>2nd floor,
                  SP-365, Opposite Hotel Apna Avenue, Janjeerwala Square, Indore
                  - 452001
                </li>
                <hr className="new4" />
                <li>
                  <i className="text-c-main fas fa fa-phone"></i>(+91)
                  9111361111
                </li>
                <hr className="new4" />
                <li>
                  <i className="text-c-main fas fa fa-envelope-o "></i>
                  <a
                    className="text-c-light "
                    href="mailto:Sales@linnseed.com"
                  >
                    Sales@linnseed.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 widget">
              <h4 className="widget-title">Quick Link</h4>
              <ul className="footer-quick-links" style={{ marginTop: "20px" }} >
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="https://www.linnseed.com/front/search/seller/Cotton Seed"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Cotton Seed
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="https://www.linnseed.com/front/search/seller/Cotton Yarn"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Cotton Yarn
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="https://www.linnseed.com/front/search/seller/Raw Cotton"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Raw Cotton
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="https://www.linnseed.com/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Login Account
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="https://www.linnseed.com/front"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 widget">
              <h4 className="widget-title">Our Location</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871773.0813629269!2d75.96257522726613!3d23.611260879656673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1fbf81dc31%3A0x5d66459830cd0535!2sAgrawal%20Cotton%20Pvt.Ltd.%20(%20Linnseed.com%20)!5e0!3m2!1sen!2sin!4v1639758326740!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
