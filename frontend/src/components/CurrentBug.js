import React from "react";
import "../styles/CurrentBug.css";

function CurrentBug({ bug, i, getSingleBug }) {
  return (
    <div className="container">
      <div className="Bug-div">
        <p className="close-Bug">{i + 1}</p>
        <p className="name">{bug.name}</p>
        <p>Assigned to:<span>{bug.user}</span></p>
        <p>Priority:<span>{bug.priority}</span></p>
        <p>Description:<span>{bug.description}</span></p>
        <hr/>
      </div>
    </div>
  );
}

export default CurrentBug;
