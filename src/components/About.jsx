import React from "react";
import image from "./images/me.jpg";
import "./styles.css";
import { isMobile } from "react-device-detect";

function About() {
  return (
    <div id="About" className={isMobile ? "about fullWidth" : "about "}>
      <div className="row">
        <div className="col-12 col-md-3 me">
          <img className="me" src={image} alt="" />
        </div>
        <div className="col-12 col-md-7 aboutMe">
          <h1>WHO AM I ?</h1>
          <p className="whoAmI">
            I am a brand new programmer, looking forward to helping small
            businesses make their professional website with a small budget but
            high expectations.
          </p>
          <h1>MY SKILLS</h1>
          <div
            id="carouselExampleIndicators"
            className={
              isMobile ? "carousel slide carouselMobile" : "carousel slide"
            }
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1>HTML</h1>
                <i className="fab fa-html5 fa-10x" />
                <p>
                  The first programming language I learned, HTML is perfect for
                  making the web structure with the big amount of tools it gives
                  you is very easy and a really powerful instrument. Really
                  handy and really great for all occasions.
                </p>
              </div>
              <div className="carousel-item">
                <h1>CSS</h1>
                <i className="fab fa-css3-alt fa-10x" />
                <p>
                  It´s the better way to make your website look really good, it
                  allows you to give style to the HTML objects, also a very
                  basic but important part of making websites. Is the base of
                  the framework bootstrap.
                </p>{" "}
              </div>
              <div className="carousel-item">
                <h1>JAVA SCRIPT</h1>
                <i className="fab fa-js-square fa-10x" />
                <p>
                  The first programming language properly oriented to objects
                  that allows you to perform actions and interact with the user
                  through functions or statements, undoubtedly an indispensable
                  tool in web development.
                </p>{" "}
              </div>
              <div className="carousel-item">
                <h1>NODEJS</h1>
                <i className="fab fa-node-js fa-10x" />
                <p>
                  It´s a javascript execution environment that allows you to
                  develop servers and APIs without using a browser. With this we
                  can develop not only front end but also backend web
                  development with javascript.
                </p>{" "}
              </div>
              <div className="carousel-item">
                <h1>REACT</h1>
                <i className="fab fa-react fa-10x" />
                <p>
                  React is a perfect Java Script library for creating much
                  better and smoother user interfaces and allows easy transition
                  between desktop and mobile view. This makes reactJS one of the
                  most efficient web design platforms.
                </p>{" "}
              </div>
              <div className="carousel-item">
                <h1>MONGO DB</h1>
                <i className="fas fa-database fa-10x mongo" />
                <p>
                  MongoDB is a NoSQL database system that instead of storing
                  data in tables, uses data structures with a dynamic schema, to
                  make data integration easier and faster.
                </p>{" "}
              </div>
              <div className="carousel-item">
                <h1>BOOTSTRAP</h1>
                <i className="fab fa-bootstrap fa-10x" />
                <p>
                  Bootstrap is the most popular frontend toolkit for responsive
                  website development. It features a grid system that makes the
                  transition from desktop to mobile view faster, including fully
                  customizable prebuilt components.
                </p>{" "}
              </div>
            </div>
            <a
              className="carousel-control-prev arrow"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next arrow"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
