import React, { Component } from "react";
import "./App.css";
import SectionHeader from "./components/SectionHeader";
import EducationItem from "./components/EducationItem";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import TechnicalSkill from "./components/TechnicalSkill";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="resume-container">
        <div className="header">
          <h1>Josh Grainge</h1>
          <p>Location</p>
          <p>Phone</p>
          <p>Email</p>
        </div>

        <div className="resume-body">
          <SectionHeader name="Education" />
          <div className="text-section">
            <EducationItem
              name="College"
              location="Canada ON"
              diploma="Bachelor"
              start="Sept 2019"
              end="April 2022"
            />
          </div>

          <SectionHeader name="Experience" />
          <div className="text-section">
            <ExperienceItem
              title="Title2"
              start="Jan. 2019"
              end="Sept. 2022"
              company="Google"
              location="San Francisco USA"
              descriptions={["Description2", "Description2", "Description2"]}
            />
          </div>

          <SectionHeader name="Projects" />
          <div className="text-section">
            <ProjectItem
              title="Sky Arcade"
              tools="Unity, Git, C#"
              start="July 2022"
              end="November 2022"
              descriptions={["Description", "Description", "Description"]}
            />
          </div>

          <SectionHeader name="Technical Skills" />
          <div className="text-section">
            <div className="skills-text">
              <TechnicalSkill
                title="Languages"
                text="JavaScript, CSS, HTML, C#, Python, MySQL"
              />
              <TechnicalSkill title="Frameworks" text="React" />
              <TechnicalSkill
                title="Tools"
                text="Git, Visual Studio, ItelliJ, Github"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
