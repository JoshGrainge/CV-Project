import React, { Component } from "react";
import HeaderInfo from "../HeaderInfo";

class HeaderInputs extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      this.submitChange
    );
  }

  submitChange() {
    this.props.onChange(
      HeaderInfo(
        this.state.name,
        this.state.location,
        this.state.phone,
        this.state.email
      )
    );
  }

  render() {
    return (
      <div id="header-inputs" className="section-inputs">
        <h3>Personal Info:</h3>
        <div className="inputs-container">
          <label>Name:</label>
          <input type={"text"} id={"name"} onChange={this.onChange}></input>
          <label>Address:</label>
          <input type={"text"} id={"location"} onChange={this.onChange}></input>
          <label>Phone:</label>
          <input type={"text"} id={"phone"} onChange={this.onChange}></input>
          <label>Email:</label>
          <input type={"text"} id={"email"} onChange={this.onChange}></input>
        </div>
      </div>
    );
  }
}

export default HeaderInputs;
