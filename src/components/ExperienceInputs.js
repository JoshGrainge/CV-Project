import React, { useState, useEffect, Component } from "react";
import ExperienceInputItem from "./ExperienceInputItem";
import ExperienceInfo from "../ExperienceInfo";

let inputs = [];

const defaultExperienceInput = ExperienceInfo(
  "Job title",
  "Start Date",
  "End Data",
  "Company Name",
  "Company Location",
  ["Job description point"]
);

function ExperienceInputs(props) {
  const [experienceInputs, setExperienceInput] = useState([
    defaultExperienceInput,
  ]);

  useEffect(() => {
    props.onChange(experienceInputs);

    inputs = [];
    for (let i = 0; i < experienceInputs.length; i++) {
      inputs.push(
        <ExperienceInputItem
          info={experienceInputs[i]}
          key={i}
          index={i}
          deleteInput={removeInput}
          onChange={changeInput}
        />
      );
    }
  }, [experienceInputs]);

  const removeInput = (index) => {
    setExperienceInput([
      ...experienceInputs.slice(0, index),
      ...experienceInputs.slice(index + 1),
    ]);
  };

  const changeInput = (index, newInput) => {
    setExperienceInput([
      ...experienceInputs.slice(0, index),
      newInput,
      ...experienceInputs.slice(index + 1),
    ]);
  };

  const addInput = () => {
    setExperienceInput([...experienceInputs, defaultExperienceInput]);
  };

  return (
    <div id="experience-inputs" className="section-inputs">
      <h3>Experience:</h3>
      <div>{inputs}</div>
      <button className="mid-length-button" onClick={addInput}>
        Add
      </button>
    </div>
  );
}

export default ExperienceInputs;
