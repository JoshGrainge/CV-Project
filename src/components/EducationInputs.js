import React, { Component } from "react";
import EducationInputItem from "./EducationInputItem";
import EducationInfo from "../EducationInfo";

class EducationInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationInputs: [
        EducationInfo(
          "Cambrian",
          "Sudbury",
          "Associates",
          "September 2020",
          "April 2022"
        ),
      ],
    };

    this.deleteInput = this.deleteInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.submitChanges = this.submitChanges.bind(this);

    this.props.onChange(this.state.educationInputs);
  }

  onChange(index, newEducationInfo) {
    const newEducationInputs = [...this.state.educationInputs];
    newEducationInputs[index] = newEducationInfo;

    this.setState(
      {
        educationInputs: newEducationInputs,
      },
      this.submitChanges
    );
  }

  deleteInput(index) {
    const newEducationInputs = this.state.educationInputs.filter((_, i) => {
      return index !== i;
    });

    this.setState(
      {
        educationInputs: newEducationInputs,
      },
      this.submitChanges
    );
  }

  addInput() {
    const newEducationInputs = [
      ...this.state.educationInputs,
      EducationInfo("", "", "", "", ""),
    ];

    this.setState(
      {
        educationInputs: newEducationInputs,
      },
      this.submitChanges
    );
  }

  submitChanges() {
    this.props.onChange(this.state.educationInputs);
  }

  render() {
    return (
      <div id="education-inputs" className="section-inputs">
        <h3>Education:</h3>
        <div>
          {this.state.educationInputs.map((educationInput, i) => {
            return (
              <EducationInputItem
                key={i}
                index={i}
                info={educationInput}
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

export default EducationInputs;
