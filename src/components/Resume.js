import React, { Component } from "react";
import ResumeHeader from "./ResumeHeader";
import ResumeSectionHeader from "./ResumeSectionHeader";
import ResumeEducationItem from "./ResumeEducationItem";
import ResumeExperienceItem from "./ResumeExperienceItem";
import ResumeProjectItem from "./ResumeProjectItem";
import ResumeTechnicalSkill from "./ResumeTechnicalSkill";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="resume-container">
        <ResumeHeader info={this.props.headerInfo} />

        <div className="resume-body">
          <ResumeSectionHeader name="Education" />
          <div className="text-section">
            {this.props.educationInfos.map((educationInfo, i) => {
              return <ResumeEducationItem key={i} info={educationInfo} />;
            })}
          </div>

          <ResumeSectionHeader name="Experience" />
          <div className="text-section">
            {this.props.experienceInfos.map((experienceInfo, i) => {
              return <ResumeExperienceItem key={i} info={experienceInfo} />;
            })}
          </div>

          <ResumeSectionHeader name="Projects" />
          <div className="text-section">
            {this.props.projectInfos.map((projectInfo, i) => {
              return <ResumeProjectItem key={i} info={projectInfo} />;
            })}
          </div>

          <ResumeSectionHeader name="Technical Skills" />
          <div className="text-section">
            <div className="skills-text">
              {this.props.technicalSkillInfos.map((technicalSkillInfo, i) => {
                return (
                  <ResumeTechnicalSkill key={i} info={technicalSkillInfo} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
