import React, { Component } from "react";
import EducationInputItem from "./EducationInputItem";

class EducationInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="education-inputs" className="section-inputs">
        <h3>Education:</h3>
        <div>
          <EducationInputItem />
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
