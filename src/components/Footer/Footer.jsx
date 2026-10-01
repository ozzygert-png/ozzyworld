import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      
      {/* <!--FOOTER--> */}

      <footer className="footer">
        <div className="footer-container">
          {/* <!--ABOUT--> */}
          <div className="footer-box">
            <h2>Our SmileJeans Store</h2>
            <p>Assuring unique, quality,and affordability</p>
          </div>
        </div>

        {/* <!--QUICK LINKS--> */}

        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">ABOUT</a>
          <a href="#">PAGES</a>
          <a href="#">CONTANT</a>
          <p>
            <>@example.com</>
          </p>

          <p>phone: +3248033656963</p>
        </div>

        {/* <!---CONTACT--> */}
        <div className="footer-box">
          <h3>contact us</h3>
          <p> Email:info@example.com</p>
          <p>phone : +234 800 000 000</p>
          <p>Owerri, Imo State</p>
        </div>

        {/* <!--COPYRIGHT--> */}

        <div className="copyright">
          <p>&copy;2026 Our SmileJeans Exclusive Store. All Eight Reserved</p>
        </div>
      </footer>
    </div>


   
  )
}

export default Footer
