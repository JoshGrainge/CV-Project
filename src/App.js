import React, { Component } from "react";
import "./App.css";
import Resume from "./components/Resume";
import HeaderInfo from "./HeaderInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import ProjectInfo from "./ProjectInfo";
import TechnicalSkillInfo from "./TechnicalSkillInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    //#region Testing variables
    // These variable are just for testing
    const headerInfo = HeaderInfo(
      "Josh Grainge",
      "Canada, ON",
      "555-5555",
      "Email@email.com"
    );

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
      <Resume
        headerInfo={headerInfo}
        educationInfos={educationInfos}
        experienceInfos={experienceInfos}
        projectInfos={projectInfos}
        technicalSkillInfos={technicalSkillInfos}
      />
    );
  }
}

export default App;
