import React, { useEffect } from "react";
import "./Contact.css";
import "./Contact-queries.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true, easing: "ease" });
  }, []);
  return (
    <>
      <section id="contact" className="contact-container">
        <div className="container">
          <h1 className="header-main" data-aos="fade-up">
            Contact Me
          </h1>
          <div className="section-header-line" data-aos="fade-up"></div>
        </div>

        <div className="container" data-aos="flip-up">
          <div className="contact">
            <div className="contact-text-box">
              <h2 className="header-secondary">Get in touch!</h2>
              <p className="contact-text">
                Based in{" "}
                <a
                  href="https://www.google.com/maps/place/Dallas,+TX/@32.8206645,-96.7315525,11z/data=!3m1!4b1!4m6!3m5!1s0x864c19f77b45974b:0xb9ec9ba4f647678f!8m2!3d32.7766642!4d-96.7969879!16zL20vMGYycnE"
                  className="content-link contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Dallas</strong>
                </a>
                <br></br>
                <span> </span>Let's talk sports, fishing, and full-stack web
                dev!
                <br></br>
                <span> </span>Do not hesitate to reach out with questions or
                ideas.
                <br></br>
                <span> </span>I am excited to hear from you!
              </p>

              <form className="contact-form" action="" method="post">
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="John Smith"
                    name="full-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="johnsmith@email.com"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="40"
                    rows="2"
                    placeholder="Something on your mind..."
                  ></textarea>
                </div>

                <button className="btn btn--contact">Send message</button>
              </form>
            </div>

            <div
              className="contact-img"
              role="img"
              aria-label="Riley and his Bullmastiff puppy"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
