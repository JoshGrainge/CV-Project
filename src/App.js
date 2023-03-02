import React, { useState, useEffect } from "react";
import "./App.css";
import Resume from "./components/Resume";
import HeaderInputs from "./components/HeaderInputs";
import EducationInputs from "./components/EducationInputs";
import ExperienceInputs from "./components/ExperienceInputs";
import ProjectsInputs from "./components/ProjectsInputs";
import TechnicalSkillsInputs from "./components/TechnicalSkillsInputs";

function App() {
  const [infos, setInfos] = useState({
    headerInfo: {},
    educationInfos: [],
    experienceInfos: [],
    projectsInfos: [],
    technicalSkillInfos: [],
  });

  const updateHeaderInfo = (newHeaderInfo) => {
    setInfos({
      ...infos,
      headerInfo: newHeaderInfo,
    });
  };

  const updateEducationInfos = (newEducationInfos) => {
    setInfos({
      ...infos,
      educationInfos: newEducationInfos,
    });
  };

  const updateExperienceInfos = (newExperienceInfos) => {
    setInfos({
      ...infos,
      experienceInfos: newExperienceInfos,
    });
  };

  const updateProjectInfos = (newProjectInfos) => {
    setInfos({
      ...infos,
      projectsInfos: newProjectInfos,
    });
  };

  const updateTechnicalSkillInfos = (newTechnicalSkillInfos) => {
    setInfos({
      ...infos,
      technicalSkillInfos: newTechnicalSkillInfos,
    });
  };

  const print = () => {
    let inputSection = document.getElementById("input-section");
    let resumeSection = document.getElementById("input-section");

    inputSection.className = "remove";
    resumeSection.className = "no-border";
    window.print();
    inputSection.className = "";
    resumeSection.className = "";
  };

  return (
    <div className="main-container">
      <div id="input-section">
        <HeaderInputs onChange={updateHeaderInfo} />
        <EducationInputs onChange={updateEducationInfos} />
        <ExperienceInputs onChange={updateExperienceInfos} />
        <ProjectsInputs onChange={updateProjectInfos} />
        <TechnicalSkillsInputs onChange={updateTechnicalSkillInfos} />
        <button onClick={print} className="large-button">
          Print
        </button>
      </div>
      <Resume
        headerInfo={infos.headerInfo}
        educationInfos={infos.educationInfos}
        experienceInfos={infos.experienceInfos}
        projectInfos={infos.projectsInfos}
        technicalSkillInfos={infos.technicalSkillInfos}
      />
    </div>
  );
}

export default App;
