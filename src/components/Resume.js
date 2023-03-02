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
    let educationHeader =
      this.props.educationInfos.length > 0 ? (
        <ResumeSectionHeader name="Education" />
      ) : (
        ""
      );

    let experienceHeader =
      this.props.experienceInfos.length > 0 ? (
        <ResumeSectionHeader name="Experience" />
      ) : (
        ""
      );

    let projectsHeader =
      this.props.projectInfos.length > 0 ? (
        <ResumeSectionHeader name="Projects" />
      ) : (
        ""
      );

    let technicalSkillsHeader =
      this.props.technicalSkillInfos.length > 0 ? (
        <ResumeSectionHeader name="Technical Skills" />
      ) : (
        ""
      );

    return (
      <div id="resume-container">
        {console.log(
          "resume header info: " + JSON.stringify(this.props.headerInfo)
        )}
        <ResumeHeader info={this.props.headerInfo} />

        <div className="resume-body">
          {educationHeader}
          <div className="text-section">
            {this.props.educationInfos.map((educationInfo, i) => {
              return <ResumeEducationItem key={i} info={educationInfo} />;
            })}
          </div>

          {experienceHeader}
          <div className="text-section">
            {this.props.experienceInfos.map((experienceInfo, i) => {
              return <ResumeExperienceItem key={i} info={experienceInfo} />;
            })}
          </div>

          {projectsHeader}
          <div className="text-section">
            {this.props.projectInfos.map((projectInfo, i) => {
              return <ResumeProjectItem key={i} info={projectInfo} />;
            })}
          </div>

          {technicalSkillsHeader}
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
