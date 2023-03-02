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

export default TechnicalSkillsInputs;
