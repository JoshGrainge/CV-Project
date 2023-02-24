import React, { Component } from "react";
import "./App.css";
import Resume from "./components/Resume";
import EducationInfo from "./EducationInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
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

    return <Resume educationInfos={educationInfos} />;
  }
}

export default App;
