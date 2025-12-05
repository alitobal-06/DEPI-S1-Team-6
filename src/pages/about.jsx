import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/about.css';

function About() {
  return (
    <>
      <Header />
      <div className="container aboutContent">
      <div className="row mt-5">
        <div className="col">
          <h1>
            About{" "}
            <span className="navbar-brand">
              Khedma<span className="text-dark">Now</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="subtitle">
            Connecting you with trusted service providers quickly and easily.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="description">
            KhedmaNow is a platform designed to simplify the process of finding
            and booking local services. Whether you need a plumber, electrician,
            tutor, or cleaner, we connect you with trusted professionals in your
            area.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col my-4">
          <h2>Our Vision & Mission</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3 vision me-4 px-0 py-3">
          <h1 className="">Our Vision</h1>
          <p>To make accessing services easy anytime, anywhere.</p>
        </div>
        <div className="col-8 mission px-0 py-3">
          <h1>Our Mission</h1>
          <p>
            To provide a seamless and secure experience for customers and
            service providers.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col mb-4">
          <h2>Our Values</h2>
        </div>
      </div>
      <div className="row gap-3 valueRow">
        <div className="col value">
          <i className="bi bi-shield-check"></i>
          <p>Trust</p>
        </div>
        <div className="col value">
          <i className="bi bi-star"></i>
          <p>Quality</p>
        </div>
        <div className="col value">
          <i className="bi bi-clock"></i>
          <p>Speed</p>
        </div>
        <div className="col value">
          <i className="bi bi-emoji-smile"></i>
          <p>Customer Satisfaction</p>
        </div>
      </div>
      <div className="row">
        <div className="col py-5">
          <h2>Our Team</h2>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center"></div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center py-5">
          <a id="exploreServices" href="./services.html">
            Explore Services
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default About;