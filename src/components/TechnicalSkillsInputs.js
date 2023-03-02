import React, { useState, useEffect, Component } from "react";
import TechnicalSkillsInputItem from "./TechnicalSkillsInputItem";
import TechnicalSkillInfo from "../TechnicalSkillInfo";

let inputs = [];

const defaultTechnicalSkillData = TechnicalSkillInfo(
  "Technical skill title",
  "Technical skill description"
);

function TechnicalSkillsInputs(props) {
  const [technicalSkillInputs, setTechnicalSkillInputs] = useState([
    defaultTechnicalSkillData,
  ]);

  useEffect(() => {
    props.onChange(technicalSkillInputs);

    // Reassign education inputs
    inputs = [];
    for (let i = 0; i < technicalSkillInputs.length; i++) {
      inputs.push(
        <TechnicalSkillsInputItem
          info={technicalSkillInputs[i]}
          key={i}
          index={i}
          deleteInput={removeInput}
          onChange={changeInput}
        />
      );
    }
  }, [technicalSkillInputs]);

  const removeInput = (index) => {
    setTechnicalSkillInputs([
      ...technicalSkillInputs.slice(0, index),
      ...technicalSkillInputs.slice(index + 1),
    ]);
  };

  const changeInput = (index, newInput) => {
    setTechnicalSkillInputs([
      ...technicalSkillInputs.slice(0, index),
      newInput,
      ...technicalSkillInputs.slice(index + 1),
    ]);
  };

  const addInput = () => {
    setTechnicalSkillInputs([
      ...technicalSkillInputs,
      defaultTechnicalSkillData,
    ]);
  };

  return (
    <div id="technical-skills-inputs" className="section-inputs">
      <h3>Technical Skills:</h3>
      <div>{inputs}</div>
      <button className="mid-length-button" onClick={addInput}>
        Add
      </button>
    </div>
  );
}

class TechnicalSkillsInputsClass extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      technicalSkillsInfos: [
        TechnicalSkillInfo(
          "Technical Skill Title",
          "Sub text (Seperated by commas for styling)"
        ),
      ],
    };

    this.deleteInput = this.deleteInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.submitChanges = this.submitChanges.bind(this);

    this.props.onChange(this.state.technicalSkillsInfos);
  }

  onChange(index, newTechnicalSkillsInfo) {
    const newTechnicalSkillsInfos = [...this.state.technicalSkillsInfos];
    newTechnicalSkillsInfos[index] = newTechnicalSkillsInfo;

    this.setState(
      {
        technicalSkillsInfos: newTechnicalSkillsInfos,
      },
      this.submitChanges
    );
  }

  deleteInput(index) {
    const newTechnicalSkillsInfos = this.state.technicalSkillsInfos.filter(
      (_, i) => {
        return index !== i;
      }
    );

    this.setState(
      {
        technicalSkillsInfos: newTechnicalSkillsInfos,
      },
      this.submitChanges
    );
  }

  addInput() {
    const newTechnicalSkillsInfos = [
      ...this.state.technicalSkillsInfos,
      TechnicalSkillInfo("", ""),
    ];

    this.setState(
      {
        technicalSkillsInfos: newTechnicalSkillsInfos,
      },
      this.submitChanges
    );
  }

  submitChanges() {
    this.props.onChange(this.state.technicalSkillsInfos);
  }

  render() {
    return (
      <div id="technical-skills-inputs" className="section-inputs">
        <h3>Technical Skills:</h3>
        <div>
          {this.state.technicalSkillsInfos.map((technicalSkillsInfo, i) => {
            return (
              <TechnicalSkillsInputItem
                key={i}
                index={i}
                info={technicalSkillsInfo}
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

export default TechnicalSkillsInputs;
