import React, { Component } from "react";

class ProjectsInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="technical-skills-inputs" className="section-inputs">
        <h3>Technical Skills:</h3>
        <div className="inputs-container">
          <label>Title:</label>
          <input type={"text"}></input>
          <label>Text:</label>
          <input type={"text"}></input>
        </div>
        <div className="add-remove-container">
          <button>Add</button>
          <button>Remove</button>
        </div>
      </div>
    );
  }
}

export default ProjectsInputs;
