import React, { Component } from "react";

class ProjectsInputItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="inputs-container">
        <label>Title:</label>
        <input type={"text"}></input>
        <label>Tools:</label>
        <input type={"text"}></input>
        <label>Start:</label>
        <input type={"text"}></input>
        <label>End:</label>
        <input type={"text"}></input>
        <div>
          <label>Descriptions:</label>
          <button className="circle-button">+</button>
          <div className="description-container">
            <input type={"text"}></input>
            <button className="circle-button">x</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsInputItem;
