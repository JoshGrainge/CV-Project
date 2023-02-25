import React, { Component } from "react";

class HeaderInputs extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="header-inputs" className="section-inputs">
        <h3>Personal Info:</h3>
        <div className="inputs-container">
          <label>Name:</label>
          <input type={"text"}></input>
          <label>Address:</label>
          <input type={"text"}></input>
          <label>Phone:</label>
          <input type={"text"}></input>
          <label>Email:</label>
          <input type={"text"}></input>
        </div>
      </div>
    );
  }
}

export default HeaderInputs;
