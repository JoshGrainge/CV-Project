import React, { useState, useEffect } from "react";
import EducationInputItem from "./EducationInputItem";
import EducationInfo from "../EducationInfo";

let inputs = [];

function EducationInputs(props) {
  const [educationInputs, setEducationInputs] = useState([
    EducationInfo(
      "College Name",
      "College Location",
      "Degree Name",
      "Start Date",
      "End Date"
    ),
  ]);

  useEffect(() => {
    props.onChange(educationInputs);

    // Reassign education inputs
    inputs = [];
    for (let i = 0; i < educationInputs.length; i++) {
      inputs.push(
        <EducationInputItem
          info={educationInputs[i]}
          key={i}
          index={i}
          deleteInput={removeInput}
          onChange={changeInput}
        />
      );
    }
  }, [educationInputs]);

  const removeInput = (index) => {
    setEducationInputs([
      ...educationInputs.slice(0, index),
      ...educationInputs.slice(index + 1),
    ]);
  };

  const changeInput = (index, newInput) => {
    setEducationInputs([
      ...educationInputs.slice(0, index),
      newInput,
      ...educationInputs.slice(index + 1),
    ]);
  };

  const addInput = () => {
    setEducationInputs([
      ...educationInputs,
      EducationInfo(
        "College Name",
        "College Location",
        "Degree Name",
        "Start Date",
        "End Date"
      ),
    ]);
  };

  return (
    <div id="education-inputs" className="section-inputs">
      <h3>Education:</h3>
      <div>{inputs}</div>
      <button className="mid-length-button" onClick={addInput}>
        Add
      </button>
    </div>
  );
}

export default EducationInputs;
