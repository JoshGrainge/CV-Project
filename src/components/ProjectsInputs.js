import React, { Component } from "react";
import ProjectInfo from "../ProjectInfo";
import ProjectsInputItem from "./ProjectsInputItem";

class ProjectsInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      projectInfos: [
        ProjectInfo(
          "Project Name",
          "Tools used on project (Sepereated w/ commas for styling)",
          "Start Date",
          "End Date",
          [
            "Project description point 1",
            "Project description point 2",
            "Project description point 3",
          ]
        ),
      ],
    };
    this.deleteInput = this.deleteInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.submitChanges = this.submitChanges.bind(this);

    this.props.onChange(this.state.projectInfos);
  }

  onChange(index, newProjectInfo) {
    const newProjectInfos = [...this.state.projectInfos];
    newProjectInfos[index] = newProjectInfo;

    this.setState(
      {
        projectInfos: newProjectInfos,
      },
      this.submitChanges
    );
  }

  deleteInput(index) {
    const newProjectInfos = this.state.projectInfos.filter((_, i) => {
      return index !== i;
    });

    this.setState(
      {
        projectInfos: newProjectInfos,
      },
      this.submitChanges
    );
  }

  addInput() {
    const newProjectInfos = [
      ...this.state.projectInfos,
      ProjectInfo("", "", "", "", [""]),
    ];

    this.setState(
      {
        projectInfos: newProjectInfos,
      },
      this.submitChanges
    );
  }

  submitChanges() {
    this.props.onChange(this.state.projectInfos);
  }

  render() {
    return (
      <div id="project-inputs" className="section-inputs">
        <h3>Projects:</h3>
        <div>
          {this.state.projectInfos.map((projectInfo, i) => {
            return (
              <ProjectsInputItem
                key={i}
                index={i}
                info={projectInfo}
                deleteInput={this.deleteInput}
                onChange={this.onChange}
              />
            );
          })}
        </div>
        <button className="mid-length-button" onClick={this.addInput}>
          Add
        </button>
      </div>
    );
  }
}

export default ProjectsInputs;
