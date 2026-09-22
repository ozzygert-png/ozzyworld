import React from "react";


const App = () => {
  return (
    <div>
      {/* <!--nav bar--> */}
      <header>
        <div className="nav-link">
          <a href="#HOME">HOME</a>
        </div>
        <div className="nav-link">
          <a href="#ABOUT">ABOUT</a>
        </div>
        <div className="nav-link">
          <a href="#CONTACT">CONTACT</a>
        </div>
        <div className="nav-link">
          <a href="#SERVICE">SERVICE</a>
        </div>
      </header>
      {/* <!--HERO SECTION--> */}
      <div className="hero-section">
        <div className="overlay">
          <div className="text">
            <h1>WELCOME TO SMILEJEANS EXCLUSIVE STORE</h1>
            <p>
              WHERE SHOPPING MADE EASY, SHOP FOR ALL KINDS OF DEMIN WEARS TO
              LOOK EXPENSIVE
            </p>

            <div className="button-box">
              <button>GET STARTED</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!--ABOUT SECTION--> */}
      <section className="about">
        <div className="about-text">
          <h1>About Smilejeans Exclusive</h1>
          <h3>We sell anything Jeans</h3>
          <p>
            {" "}
            Discover SmileJeans Exclusive Store, <br /> your trusted destination
            for premium <br />
            jeans wear, offering stylish, comfortable,
            <br /> and durable denim for every occasion. <br /> Shop the latest
            trends and find your perfect fit today.
          </p>
          <ul>
            <li>Men's jeans</li>
            <li>Women's jeans</li>
            <li>Denim jackets</li>
            <li>Cargo pants</li>
          </ul>
          <button>
            {" "}
            <a href="#service">order</a>
          </button>
        </div>

        <div className="image-container">
          <img src="./jean store.jpg" alt="#" />
         
        </div>

      </section>

      {/* <!--TESTIMONY--> */}
      <section id="testimonials">
        
        <h4>TESTIMONIALS</h4>
        <h2>What our customers says</h2>

        <div className="testimonials-container">
          <div className="card">
            <img src="./jean jacket.jpg" alt="image" />
            <h3>CHIBOY OLUCHUKWU</h3>
            <p>
              "Absolutely love my jean jeacket! The quality is amazing, its fits
              perfectly, <br />
              and it looks even better in person. Definitely worth every penny!
            </p>
          </div>

          <div className="card">
            <img src="./jean skrit.jpg" alt="image" />
            <h3>JOHN ONYEMA</h3>
            <>
              After buying your jean skrit, i discovered that it was very
              afforable and i love the fiting.
            </>
          </div>
          <div className="card">
            <img src="./jean trouser.jpg" alt="image" />
            <h3>MICHAEL CHIEKE</h3>
            <p>
              Your jean trouser is the best i have ever bought, both the male
              and the female, they are so nice, i love them
            </p>
          </div>
        </div>
      </section>

      {/* <!--CALL TO ACTION--> */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready TO Start Purchasing From Us</h2>
          <p>
            Join us today and start enjoying <br /> quality and affordable wears
            from our jean store
          </p>
          <a href="#" className="cta-content">
            Order Here
          </a>
        </div>
      </section>

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
  );
};

export default App;
