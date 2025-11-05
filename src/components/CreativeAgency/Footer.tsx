import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterOne = () => {
  return (
    <footer className="footer-area-3">
      <div className="area-shape-1">
        <img src="/assets/imgs/shape/shape-44.webp" alt="image" />
      </div>
      <div className="area-shape-2">
        <img src="/assets/imgs/shape/shape-44.webp" alt="image" />
      </div>
      <div className="cta-area-2">
        <div className="container">
          <div className="cta-area-2-inner">
            <Link href="/contact">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper fade-anim">
                    <h2 className="section-title">
                      Sounds like a fit? <br />
                      Let’s connect!
                    </h2>
                  </div>
                </div>
                <div className="btn-wrapper fade-anim">
                  <svg className="icon" viewBox="0 0 137 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.3893 100.384L89.1716 30.6812L90.0263 29.8275L88.8182 29.8275L2.13868 29.8275L34.3877 0.500022L106.483 0.500028L136.346 0.50003L136.346 30.3275L136.346 102.493L106.983 134.709L106.983 52.5906L106.983 51.3845L106.13 52.2369L38.6574 119.63L19.3893 100.384Z"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-widget-wrapper-box">
          <div className="footer-widget-wrapper">
            <div className="footer-widget-box">
              <div>
                <Link href="/">
                  <Image src="/assets/inteliio/logo/inteliio-fiull-white.svg" alt="inteliio-logo" width={250} height={100} />
                </Link>
              </div>
            </div>
            <div className="footer-widget-box">
              <div className="info-box">
                <div className="mail-box">
                  <ul>
                    <li>
                      <Link className="draw-underline" href="contact@inteliio.com">
                        contact@inteliio.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-wrapper">
                  <p className="text">Your partner for modern web development.</p>
                </div>
                <div className="social-links">
                  <Link href="https://www.instagram.com/inteliio" target="_blank" rel="noopener noreferrer" prefetch={false}>
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="copyright-text">
              <p className="text">© 2025 Inteliio. All rights reserved. Powered by inteliio.</p>
            </div>
            <ul className="copyright-nav-list">
              <li>
                <Link href="#">Policy</Link>
              </li>
              <li>
                <Link href="creative-agency/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
