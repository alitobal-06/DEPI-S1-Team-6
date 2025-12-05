import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/contact.css';
  function Contact() {
  return (
    <>
    <Header />
    <div className="container aboutContent">
      <div className="row mt-5">
        <div className="col">
          <h1>Need Help?</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="subtitle">We're here to assist you anytime.</p>
        </div>
      </div>

      <div className="row">
        <div className="col mt-4 pb-3">
          <h2>Contact Options</h2>
        </div>
      </div>

      <div className="row d-flex flex-column">
        <div className="col mail me-4 px-0 pb-3 d-flex">
          <i className="bi bi-envelope"></i>
          <div>
            <h1>Email</h1>
            <a href="mailto:support@khedmanow.com">support@khedmanow.com</a>
          </div>
        </div>

        <div className="col tel px-0 pb-3 d-flex">
          <i className="bi bi-telephone"></i>
          <div>
            <h1>Phone</h1>
            <a href="tel:+">+1-555-123-4567</a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col mt-4">
          <h2>Contact Form</h2>
        </div>
      </div>

      <div className="form-container">
        <div className="form-box">
          <form>
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input"
              required
            />

            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="input"
              required
            />

            <label>Message</label>
            <textarea className="input" />

            <button type="submit" className="login-main-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col pt-5 pb-3">
          <h2>FAQ</h2>
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <div
            className="accordion w-100 d-flex flex-column gap-3"
            id="accordionExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How to book a service?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  To book a service, simply navigate to the 'Services' page,
                  select the service you need, and follow the prompts to
                  schedule your appointment. You'll receive a confirmation email
                  with all the details.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How to cancel a request?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  (replace with your real text)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col pt-5">
          <h2>Our Location</h2>
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center pb-5">
          <iframe
            className="w-100"
            height="450"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110550.2418882787!2d31.107241489827512!3d30.016911278826168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2sGiza%2C%20El%20Omraniya%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1761290892074!5m2!1sen!2seg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KhedmaNow location"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
