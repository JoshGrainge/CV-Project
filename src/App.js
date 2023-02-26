import React, { Component } from "react";
import "./App.css";
import Resume from "./components/Resume";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import ProjectInfo from "./ProjectInfo";
import TechnicalSkillInfo from "./TechnicalSkillInfo";
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
      technicalSkillsInfos: [],
    };

    this.updateHeaderInfo = this.updateHeaderInfo.bind(this);
    this.updateEducationInfos = this.updateEducationInfos.bind(this);
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

  render() {
    //#region Testing variables
    // These variable are just for testing

    const educationInfos = [
      EducationInfo(
        "Harvard",
        "Boston, USA",
        "Masters",
        "Sept 2020",
        "April 2024"
      ),
      EducationInfo("Yale", "Boston, USA", "PHD", "Sept 2025", "April 2029"),
    ];

    const experienceInfos = [
      ExperienceInfo(
        "Junior Web Developer",
        "Sept. 2019",
        "Dec. 2022",
        "Meta",
        "California, USA",
        [
          "Created the metaverse alone",
          "Made the Oculus Quest 2 with my bare hands",
          "Day to day tom foolery",
        ]
      ),
      ExperienceInfo(
        "Senior Web Developer",
        "Jan. 2023",
        "Ongoing",
        "Google",
        "California, USA",
        [
          "Worked on Google Drive team on launch",
          "Created the user interface for Google Sheets",
          "Project manager for Google Sheets UI team",
        ]
      ),
    ];

    const projectInfos = [
      ProjectInfo(
        "Thief Game",
        "Unity, C#, Git, Visual Studio 2019",
        "May 2019",
        "Ongoing",
        [
          "Created FSM AI system",
          "Created custom player controller",
          "Created branch dialogue system",
        ]
      ),
      ProjectInfo(
        "Out of Control",
        "Unity, C#, Git, Visual Studio 2020",
        "May 2019",
        "May 2019",
        [
          "Created player controller",
          "Collaborated with team members to create project",
          "Used communication apps like Slack, Discord, and Zoom to collaborate",
        ]
      ),
    ];

    const technicalSkillInfos = [
      TechnicalSkillInfo(
        "Languages",
        "JavaScript, CSS, HTML, C#, Python, MySQL"
      ),
      TechnicalSkillInfo("Frameworks", "React"),
      TechnicalSkillInfo("Tools", "Git, Visual Studio, ItelliJ, Github"),
    ];

    //#endregion

    return (
      <div className="main-container">
        <div id="input-section">
          <HeaderInputs onChange={this.updateHeaderInfo} />
          <EducationInputs onChange={this.updateEducationInfos} />
          <ExperienceInputs />
          <ProjectsInputs />
          <TechnicalSkillsInputs />
        </div>
        {/* TODO use this.state.headerInfo once functionality has been added */}
        <Resume
          headerInfo={this.state.headerInfo}
          educationInfos={this.state.educationInfos}
          experienceInfos={experienceInfos}
          projectInfos={projectInfos}
          technicalSkillInfos={technicalSkillInfos}
        />
      </div>
    );
  }
}

export default App;
