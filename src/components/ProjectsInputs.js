import React, { useState, useEffect } from "react";
import ProjectInfo from "../ProjectInfo";
import ProjectsInputItem from "./ProjectsInputItem";

let inputs = [];

const defualtInputData = ProjectInfo(
  "Project Title",
  "Project Link",
  "Tools",
  "Start",
  "End",
  ["Project description point"]
);

function ProjectsInputs(props) {
  const [projectsInputs, setProjectsInputs] = useState([defualtInputData]);

  useEffect(() => {
    props.onChange(projectsInputs);

    // Reassign education inputs
    inputs = [];
    for (let i = 0; i < projectsInputs.length; i++) {
      inputs.push(
        <ProjectsInputItem
          key={i}
          index={i}
          info={projectsInputs[i]}
          deleteInput={removeInput}
          onChange={changeInput}
        />
      );
    }
  }, [projectsInputs]);

  const removeInput = (index) => {
    setProjectsInputs([
      ...projectsInputs.slice(0, index),
      ...projectsInputs.slice(index + 1),
    ]);
  };

  const changeInput = (index, newInput) => {
    setProjectsInputs([
      ...projectsInputs.slice(0, index),
      newInput,
      ...projectsInputs.slice(index + 1),
    ]);
  };

  const addInput = () => {
    setProjectsInputs([...projectsInputs, defualtInputData]);
  };

  return (
    <div id="project-inputs" className="section-inputs">
      <h3>Projects:</h3>
      <div>{inputs}</div>
      <button className="mid-length-button" onClick={addInput}>
        Add
      </button>
    </div>
  );
}

export default ProjectsInputs;
