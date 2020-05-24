import React from "react";
import "./styles.css";
import { isMobile } from "react-device-detect";

function Contact() {
  return (
    <div className={isMobile ? "contact fullWidth" : "contact "} id="Contact">
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
        <div className="col-12 col-md-6 columna">
          <div>
            <h1>
              <a
                href="https://github.com/ivanDRG"
                target="blank"
                className="anchor"
              >
                <i class="fab fa-github icon" />
                @ivanDRG
              </a>
            </h1>
          </div>
          <div>
            <h1>
              <a
                href="https://twitter.com/IvanDelRioG"
                target="blank"
                className="anchor"
              >
                <i class="fab fa-twitter icon" />
                @IvanDelRioG
              </a>
            </h1>
          </div>
          <div>
            <h1>
              {" "}
              <a
                href="https://www.linkedin.com/in/iv%C3%A1n-del-r%C3%ADo-497b1a1a7/"
                target="blank"
                className="anchor"
              >
                <i class="fab fa-linkedin icon" />
                Iván Del Río
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
