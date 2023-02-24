import React, { Component } from "react";
import "./App.css";
import Resume from "./components/Resume";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
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

    //#endregion

    return (
      <Resume
        educationInfos={educationInfos}
        experienceInfos={experienceInfos}
      />
    );
  }
}

export default App;
