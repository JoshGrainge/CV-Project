import React, { Component } from "react";
import Header from "./Header";
import SectionHeader from "./SectionHeader";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import ProjectItem from "./ProjectItem";
import TechnicalSkill from "./TechnicalSkill";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="resume-container">
        <Header
          name="Josh Grainge"
          location="Canada"
          phone="555-5555"
          email="email@email.com"
        />

        <div className="resume-body">
          <SectionHeader name="Education" />
          <div className="text-section">
            {this.props.educationInfos.map((educationInfo) => {
              return <EducationItem info={educationInfo} />;
            })}
          </div>

          <SectionHeader name="Experience" />
          <div className="text-section">
            <ExperienceItem
              title="Front End Developer"
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

export default Resume;
