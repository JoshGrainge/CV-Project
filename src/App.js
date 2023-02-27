import React, { Component } from "react";
import "./App.css";
import Resume from "./components/Resume";
import HeaderInputs from "./components/HeaderInputs";
import EducationInputs from "./components/EducationInputs";
import ExperienceInputs from "./components/ExperienceInputs";
import ProjectsInputs from "./components/ProjectsInputs";
import TechnicalSkillsInputs from "./components/TechnicalSkillsInputs";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;

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
  }

  updateHeaderInfo(newHeaderInfo) {
    this.setState({
      headerInfo: newHeaderInfo,
    });
  }

  updateEducationInfos(newEducationInfos) {
    this.setState({
      educationInfos: newEducationInfos,
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

  render() {
    return (
      <div className="main-container">
        <div id="input-section">
          <HeaderInputs onChange={this.updateHeaderInfo} />
          <EducationInputs onChange={this.updateEducationInfos} />
          <ExperienceInputs onChange={this.updateExperienceInfos} />
          <ProjectsInputs onChange={this.updateProjectInfos} />
          <TechnicalSkillsInputs onChange={this.updateTechnicalSkillInfos} />
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
