import React from "react";
import { isMobile } from "react-device-detect";
import Note from "./Note.jsx";
import "./styles.css";
import ProjectList from "./Data.js";

function Projects() {
  return (
    <div
      id="Projects"
      className={isMobile ? "projectSection fullWidth" : "projectSection"}
    >
      <div className="col-12">
        <h1>SOME PROJECTS</h1>
      </div>
      <div className="row">
        {ProjectList.map(ProjectCard => {
          return (
            <Note
              name={ProjectCard.name}
              content={ProjectCard.content}
              id={ProjectCard.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
