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
            {this.props.educationInfos.map((educationInfo, i) => {
              return <EducationItem key={i} info={educationInfo} />;
            })}
          </div>

          <SectionHeader name="Experience" />
          <div className="text-section">
            {this.props.experienceInfos.map((experienceInfo, i) => {
              return <ExperienceItem key={i} info={experienceInfo} />;
            })}
          </div>

          <SectionHeader name="Projects" />
          <div className="text-section">
            {this.props.projectInfos.map((projectInfo, i) => {
              return <ProjectItem key={i} info={projectInfo} />;
            })}
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
