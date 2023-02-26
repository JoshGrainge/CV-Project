import React, { Component } from "react";
import EducationInfo from "../EducationInfo";

class EducationInputItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined,
      location: undefined,
      diploma: undefined,
      start: undefined,
      end: undefined,
    };

    this.handleClick = this.handleClick.bind(this);
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
      this.props.index,
      EducationInfo(
        this.state.name,
        this.state.location,
        this.state.diploma,
        this.state.start,
        this.state.end
      )
    );
  }

  handleClick() {
    this.props.deleteInput(this.props.index);
  }

  render() {
    return (
      <div className="inputs-container">
        <label>College Name:</label>
        <input
          type={"text"}
          id="name"
          value={this.props.info.name}
          onChange={this.onChange}
        />
        <label>College Location:</label>
        <input
          type={"text"}
          id="location"
          value={this.props.info.location}
          onChange={this.onChange}
        />
        <label>Diploma:</label>
        <input
          type={"text"}
          id="diploma"
          value={this.props.info.diploma}
          onChange={this.onChange}
        />
        <label>Start Date:</label>
        <input
          type={"text"}
          id="start"
          value={this.props.info.start}
          onChange={this.onChange}
        />
        <label>End Date:</label>
        <input
          type={"text"}
          id="end"
          value={this.props.info.end}
          onChange={this.onChange}
        />
        <button className="mid-length-button" onClick={this.handleClick}>
          Remove {this.props.index}
        </button>
      </div>
    );
  }
}

export default EducationInputItem;
