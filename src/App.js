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
      <div className="main-container">
        <div id="input-section">
          <h3>Personal Info:</h3>
          <div id="header-inputs" className="section-inputs">
            <div className="inputs-container">
              <label>Name:</label>
              <input type={"text"}></input>
              <label>Address:</label>
              <input type={"text"}></input>
              <label>Phone:</label>
              <input type={"text"}></input>
              <label>Email:</label>
              <input type={"text"}></input>
            </div>
          </div>
          <div id="education-inputs" className="section-inputs">
            <h3>Education:</h3>
            <div className="inputs-container">
              <label>College Name:</label>
              <input type={"text"}></input>
              <label>College Location:</label>
              <input type={"text"}></input>
              <label>Diploma:</label>
              <input type={"text"}></input>
              <label>Start Date:</label>
              <input type={"text"}></input>
              <label>End Date:</label>
              <input type={"text"}></input>
            </div>
            <div className="add-remove-container">
              <button>Add</button>
              <button>Remove</button>
            </div>
          </div>
          <div id="experience-inputs" className="section-inputs">
            <h3>Experience:</h3>
            <div className="inputs-container">
              <label>Title:</label>
              <input type={"text"}></input>
              <label>Start:</label>
              <input type={"text"}></input>
              <label>End:</label>
              <input type={"text"}></input>
              <label>Company:</label>
              <input type={"text"}></input>
              <label>Location:</label>
              <input type={"text"}></input>
              <div>
                <label>Descriptions:</label>
                <button className="circle-button">+</button>
                <div className="description-container">
                  <input type={"text"}></input>
                  <button className="circle-button">x</button>
                </div>
              </div>
            </div>
            <div className="add-remove-container">
              <button>Add</button>
              <button>Remove</button>
            </div>
          </div>
          <div id="project-inputs" className="section-inputs">
            <h3>Projects:</h3>
            <div className="inputs-container">
              <label>Title:</label>
              <input type={"text"}></input>
              <label>Tools:</label>
              <input type={"text"}></input>
              <label>Start:</label>
              <input type={"text"}></input>
              <label>End:</label>
              <input type={"text"}></input>
              <div>
                <label>Descriptions:</label>
                <button className="circle-button">+</button>
                <div className="description-container">
                  <input type={"text"}></input>
                  <button className="circle-button">x</button>
                </div>
              </div>
            </div>
            <div className="add-remove-container">
              <button>Add</button>
              <button>Remove</button>
            </div>
          </div>
          <div id="technical-skills-inputs" className="section-inputs">
            <h3>Technical Skills:</h3>
            <div className="inputs-container">
              <label>Title:</label>
              <input type={"text"}></input>
              <label>Text:</label>
              <input type={"text"}></input>
            </div>
            <div className="add-remove-container">
              <button>Add</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <Resume
          headerInfo={headerInfo}
          educationInfos={educationInfos}
          experienceInfos={experienceInfos}
          projectInfos={projectInfos}
          technicalSkillInfos={technicalSkillInfos}
        />
      </div>
    );
  }
}

export default App;
