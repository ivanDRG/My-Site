import React from "react";
import Image from "./images/coding.jpg";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./styles.css";
import { BrowserView, isMobile, isBrowser } from "react-device-detect";
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="Home" className={isMobile ? "home fullWidth" : "home"}>
      <img src={Image} alt="Img not found" />
      <h1>IVAN </h1>
      <h1>DEL RIO</h1>
      {isBrowser && <p>Full Stack Web developer</p>}
      <BrowserView>
        <Link className="link" to="About" smooth={true} duration={1000}>
          <IconButton className="downNavigation vert-move" aria-label="delete">
            <ExpandMoreIcon style={{ fontSize: 150, color: "white" }} />
          </IconButton>
        </Link>
      </BrowserView>
    </div>
  );
}
export default Home;
