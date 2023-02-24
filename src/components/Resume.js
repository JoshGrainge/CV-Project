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
        <Header info={this.props.headerInfo} />

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
              {this.props.technicalSkillInfos.map((technicalSkillInfo, i) => {
                return <TechnicalSkill key={i} info={technicalSkillInfo} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
