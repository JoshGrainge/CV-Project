import React, { Component } from "react";
import TechnicalSkillsInputItem from "./TechnicalSkillsInputItem";

class TechnicalSkillsInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="technical-skills-inputs" className="section-inputs">
        <h3>Technical Skills:</h3>
        <div>
          <TechnicalSkillsInputItem />
        </div>
        <div className="add-remove-container">
          <button>Add</button>
          <button>Remove</button>
        </div>
      </div>
    );
  }
}

export default TechnicalSkillsInputs;
