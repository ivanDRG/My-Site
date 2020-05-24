import React, { useState } from "react";
import "./images/Keeper.png";
import "./images/TinDog.png";

function Note(props) {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }

  return (
    <div class="col-12 col-md-3 projects card" style={{ width: "18rem" }}>
      <img
        src={require(`${"./images/" + props.id + ".png"}`)}
        class="card-img-top"
        alt={props.id}
      />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p className="card-text">
          {expanded ? props.content : props.content.slice(0, 120) + "...  "}
          <span className="link blue" onClick={handleClick}>
            {expanded ? "See Less" : "See More"}
          </span>
        </p>
        <a
          href={"https://github.com/ivanDRG/" + props.id}
          target="blank"
          class="btn btn-secondary"
        >
          check it out
        </a>
      </div>
    </div>
  );
}

export default Note;
