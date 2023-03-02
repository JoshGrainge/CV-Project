import React, { useState, useEffect } from "react";
import "./App.css";
import Resume from "./components/Resume";
import HeaderInputs from "./components/HeaderInputs";
import EducationInputs from "./components/EducationInputs";
import ExperienceInputs from "./components/ExperienceInputs";

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

  return (
    <div className="main-container">
      <div id="input-section">
        <HeaderInputs onChange={updateHeaderInfo} />
        <EducationInputs onChange={updateEducationInfos} />
        <ExperienceInputs onChange={updateExperienceInfos} />
        {/* <ProjectsInputs onChange={setProjectsInfos} />
        <TechnicalSkillsInputs onChange={setTechnicalSkillInfos} /> */}
        {/* <button onClick={this.print} className="large-button">
          Print
        </button> */}
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
