import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="resume-container">
        <h1>Josh Grainge</h1>
        <h3>Location | Phone Num | Email</h3>

        <div>
          <h2>Education</h2>
          <hr />
          <div className="columns">
            <p>School name</p>
            <p>Location</p>
          </div>
          <div className="columns">
            <p>Diploma name</p>
            <p>Start - End</p>
          </div>

          <h2>Experience</h2>
          <hr />
          <div className="columns">
            <p>Title</p>
            <p>Start - End</p>
          </div>
          <div className="columns">
            <p>Company</p>
            <p>Location</p>
          </div>
          <ul>
            <li>Description</li>
            <li>Description</li>
            <li>Description</li>
          </ul>

          <h2>Projects</h2>
          <hr />
          <div className="columns">
            <p>Title</p>
            <p> | JavaScript CSS HTML</p>
            <p>Start - End</p>
          </div>
          <ul>
            <li>Description</li>
            <li>Description</li>
            <li>Description</li>
          </ul>

          <h2>Technical Skills</h2>
          <hr />
          <p>Languages: JavaScript, CSS, HTML, C#, Python, MySQL</p>
          <p>Frameworks: React</p>
          <p>Tools: Git, Visual Studio, ItelliJ, Github</p>
        </div>
      </div>
    );
  }
}

export default App;
