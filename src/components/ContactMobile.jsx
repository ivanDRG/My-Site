import React from "react";
import "./styles.css";

function ContactMobile() {
  return (
    <div className="contactMobile fullWidth">
      <div className="row">
        <div className="col-12 col-md-6 columna">
          <h1>CONTACT ME</h1>
          <p>Send me an email, or check out my social media</p>
          <h3>
            <a
              href="mailto:delriogestidoivan@gmail.com?Subject=Looking%20for%20information"
              className="anchor"
            >
              <i class="fas fa-envelope icon" />
              Send an email
            </a>
          </h3>
        </div>
        <div className="col-12 col-md-6 columnaMobile">
          <p>
            <a
              href="https://github.com/ivanDRG"
              target="blank"
              className="anchor"
            >
              <i class="fab fa-github icon fa-1x" />
            </a>
            <a
              href="https://twitter.com/IvanDelRioG"
              target="blank"
              className="anchor"
            >
              <i class="fab fa-twitter icon fa-1x" />
            </a>
            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-del-r%C3%ADo-497b1a1a7/"
              target="blank"
              className="anchor"
            >
              <i class="fab fa-linkedin fa-1x icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ContactMobile;
