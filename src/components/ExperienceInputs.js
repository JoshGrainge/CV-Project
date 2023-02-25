import React, { Component } from "react";
import ExperienceInputItem from "./ExperienceInputItem";

class ExperienceInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="experience-inputs" className="section-inputs">
        <h3>Experience:</h3>
        <div>
          <ExperienceInputItem />
        </div>
        <div className="add-remove-container">
          <button>Add</button>
          <button>Remove</button>
        </div>
      </div>
    );
  }
}

export default ExperienceInputs;
