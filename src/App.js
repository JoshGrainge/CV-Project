import React, { useState, useEffect, Component } from "react";
import "./App.css";
import Resume from "./components/Resume";
import HeaderInputs from "./components/HeaderInputs";
import EducationInputs from "./components/EducationInputs";
import ExperienceInputs from "./components/ExperienceInputs";
import ProjectsInputs from "./components/ProjectsInputs";
import TechnicalSkillsInputs from "./components/TechnicalSkillsInputs";
import EducationInfo from "./EducationInfo";

function App() {
  const [infos, setInfos] = useState({
    headerInfo: {},
    educationInfos: [],
    experienceInfos: [],
    projectsInfos: [],
    technicalSkillInfos: [],
  });

  const updateEducationInfos = (newEducationInfos) => {
    setInfos({
      ...infos,
      educationInfos: newEducationInfos,
    });
  };

  return (
    <div className="main-container">
      <div id="input-section">
        {/* <HeaderInputs onChange={headerInfo} /> */}
        <EducationInputs onChange={updateEducationInfos} />
        {/* <ExperienceInputs onChange={experienceInfos} />
        <ProjectsInputs onChange={setProjectsInfos} />
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

class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerInfo: {},
      educationInfos: [],
      experienceInfos: [],
      projectsInfos: [],
      technicalSkillInfos: [],
    };

    this.updateHeaderInfo = this.updateHeaderInfo.bind(this);
    this.updateEducationInfos = this.updateEducationInfos.bind(this);
    this.updateExperienceInfos = this.updateExperienceInfos.bind(this);
    this.updateProjectInfos = this.updateProjectInfos.bind(this);
    this.updateTechnicalSkillInfos = this.updateTechnicalSkillInfos.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.print = this.print.bind(this);
  }

  updateHeaderInfo(newHeaderInfo) {
    this.setState({
      headerInfo: newHeaderInfo,
    });
  }

  updateEducationInfos(index, newEducationInfo) {
    const newInfos = this.state.educationInfos;
    newInfos[index] = newEducationInfo;
    this.setState({
      educationInfos: newInfos,
    });
  }

  deleteEducation(index) {
    let newEducationInfos = this.state.educationInfos;
    newEducationInfos.splice(index, 1);
    this.setState({
      educationInfos: newEducationInfos,
    });
  }

  addEducation() {
    console.log("Adding education");
    this.setState((state) => {
      return {
        educationInfos: [
          ...state.educationInfos,
          EducationInfo("", "", "", "", "", ""),
        ],
      };
    });
  }

  updateExperienceInfos(newExperienceInfos) {
    this.setState({
      experienceInfos: newExperienceInfos,
    });
  }

  updateProjectInfos(newProjectInfos) {
    this.setState({
      projectsInfos: newProjectInfos,
    });
  }

  updateTechnicalSkillInfos(newTechnicalSkillsInfos) {
    this.setState({
      technicalSkillInfos: newTechnicalSkillsInfos,
    });
  }

  print() {
    let inputSection = document.getElementById("input-section");
    let resumeSection = document.getElementById("resume-container");

    inputSection.className = "remove";
    resumeSection.className = "no-border";
    window.print();
    inputSection.className = "";
    resumeSection.className = "";
  }

  render() {
    const length = this.state.educationInfos.length;
    console.log(length);
    return (
      <div className="main-container">
        <div id="input-section">
          <HeaderInputs onChange={this.updateHeaderInfo} />
          <EducationInputs
            count={length}
            onChange={this.updateEducationInfos}
            deleteInput={this.deleteEducation}
            addInput={this.addEducation}
          />
          <ExperienceInputs onChange={this.updateExperienceInfos} />
          <ProjectsInputs onChange={this.updateProjectInfos} />
          <TechnicalSkillsInputs onChange={this.updateTechnicalSkillInfos} />
          <button onClick={this.print} className="large-button">
            Print
          </button>
        </div>
        <Resume
          headerInfo={this.state.headerInfo}
          educationInfos={this.state.educationInfos}
          experienceInfos={this.state.experienceInfos}
          projectInfos={this.state.projectsInfos}
          technicalSkillInfos={this.state.technicalSkillInfos}
        />
      </div>
    );
  }
}

export default App;
