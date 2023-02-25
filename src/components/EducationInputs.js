import React, { Component } from "react";

class EducationInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="education-inputs" className="section-inputs">
        <h3>Education:</h3>
        <div className="inputs-container">
          <label>College Name:</label>
          <input type={"text"}></input>
          <label>College Location:</label>
          <input type={"text"}></input>
          <label>Diploma:</label>
          <input type={"text"}></input>
          <label>Start Date:</label>
          <input type={"text"}></input>
          <label>End Date:</label>
          <input type={"text"}></input>
        </div>
        <div className="add-remove-container">
          <button>Add</button>
          <button>Remove</button>
        </div>
      </div>
    );
  }
}

export default EducationInputs;
