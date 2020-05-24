import React from "react";
import { BrowserView, isMobile } from "react-device-detect";
import { Link } from "react-scroll";

function Menu() {
  return (
    <nav
      className={
        isMobile
          ? "navbar navbar-expand-lg navbar-light bg-light fixed-top fullWidth"
          : "navbar navbar-expand-lg navbar-light bg-light fixed-top "
      }
    >
      <Link
        className="navbar-brand link"
        to="Home"
        smooth={true}
        duration={1000}
      >
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-items">
            <Link
              className="nav-link link"
              to="About"
              smooth={true}
              duration={1000}
            >
              About <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link link"
              to="Projects"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link link"
              to="Contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <BrowserView>
        <img src="" alt="" />
      </BrowserView>
    </nav>
  );
}
export default Menu;
