import React, { Component } from "react";
import "./App.css";
import SectionHeader from "./components/SectionHeader";

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
            <div className="text-row">
              <p>School name</p>
              <p>Location</p>
            </div>
            <div className="text-row">
              <p>Diploma name</p>
              <p>Start - End</p>
            </div>
          </div>

          <SectionHeader name="Experience" />
          <div className="text-section">
            <div className="text-row">
              <p>Title</p>
              <p>Start - End</p>
            </div>
            <div className="text-row">
              <p>Company</p>
              <p>Location</p>
            </div>
            <ul>
              <li>Description</li>
              <li>Description</li>
              <li>Description</li>
            </ul>
          </div>

          <SectionHeader name="Projects" />
          <div className="text-section">
            <div className="text-row">
              <p>Title | JavaScript CSS HTML</p>
              <p>Start - End</p>
            </div>
            <ul>
              <li>Description</li>
              <li>Description</li>
              <li>Description</li>
            </ul>
          </div>

          <SectionHeader name="Technical Skills" />
          <div className="text-section">
            <div className="skills-text">
              <p>Languages: JavaScript, CSS, HTML, C#, Python, MySQL</p>
              <p>Frameworks: React</p>
              <p>Tools: Git, Visual Studio, ItelliJ, Github</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
