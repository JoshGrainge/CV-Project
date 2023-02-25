import React, { Component } from "react";

class EducationInputItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
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
    );
  }
}

export default EducationInputItem;
