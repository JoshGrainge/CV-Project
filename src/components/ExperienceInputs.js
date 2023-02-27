import React, { Component } from "react";
import ExperienceInputItem from "./ExperienceInputItem";
import ExperienceInfo from "../ExperienceInfo";

class ExperienceInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      experienceInfos: [
        ExperienceInfo(
          "Junior Web Developer",
          "Sept. 2019",
          "Dec. 2022",
          "Meta",
          "California, USA",
          [
            "Created big time",
            "Made the Oculus Quest 2 with my bare hands",
            "Day to day tom foolery",
          ]
        ),
        ExperienceInfo(
          "Senior Web Developer",
          "Jan. 2023",
          "Ongoing",
          "Google",
          "California, USA",
          [
            "Worked on Google Drive team on launch",
            "Created the user interface for Google Sheets",
            "Project manager for Google Sheets UI team",
          ]
        ),
      ],
    };

    this.deleteInput = this.deleteInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.submitChanges = this.submitChanges.bind(this);

    this.props.onChange(this.state.experienceInfos);
  }

  onChange(index, newExperienceInfo) {
    const newEducationInputs = [...this.state.experienceInfos];
    newEducationInputs[index] = newExperienceInfo;

    this.setState(
      {
        experienceInfos: newEducationInputs,
      },
      this.submitChanges
    );
  }

  deleteInput(index) {
    const newExperienceInfo = this.state.experienceInfos.filter((_, i) => {
      return index !== i;
    });

    this.setState(
      {
        experienceInfos: newExperienceInfo,
      },
      this.submitChanges
    );
  }

  addInput() {
    const newEducationInputs = [
      ...this.state.experienceInfos,
      ExperienceInfo("", "", "", "", "", [""]),
    ];

    this.setState(
      {
        experienceInfos: newEducationInputs,
      },
      this.submitChanges
    );
  }

  submitChanges() {
    this.props.onChange(this.state.experienceInfos);
  }

  render() {
    return (
      <div id="experience-inputs" className="section-inputs">
        <h3>Experience:</h3>
        <div>
          {this.state.experienceInfos.map((experienceInfo, i) => {
            return (
              <ExperienceInputItem
                key={i}
                index={i}
                info={experienceInfo}
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

export default ExperienceInputs;
