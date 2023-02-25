import React, { Component } from "react";
import ProjectsInputItem from "./ProjectsInputItem";

class ProjectsInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="project-inputs" className="section-inputs">
        <h3>Projects:</h3>
        <div>
          <ProjectsInputItem />
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
