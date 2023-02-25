import React, { Component } from "react";

class TechnicalSkillsInputItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="inputs-container">
        <label>Title:</label>
        <input type={"text"}></input>
        <label>Text:</label>
        <input type={"text"}></input>
      </div>
    );
  }
}

export default TechnicalSkillsInputItem;
