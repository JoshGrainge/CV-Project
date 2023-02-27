import React, { Component } from "react";
import ExperienceInfo from "../ExperienceInfo";
import DescriptionInputs from "./DescriptionInputs";

class ExperienceInputItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.info.title,
      start: this.props.info.start,
      end: this.props.info.end,
      company: this.props.info.company,
      location: this.props.info.location,
      descriptions: this.props.info.descriptions,
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  onChange(e) {
    console.log("Experience Input Item e: " + JSON.stringify(e));
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
      ExperienceInfo(
        this.state.title,
        this.state.start,
        this.state.end,
        this.state.company,
        this.state.location,
        this.state.descriptions
      )
    );
  }

  handleClick() {
    this.setState({
      title: undefined,
      start: undefined,
      end: undefined,
      company: undefined,
      location: undefined,
      descriptions: undefined,
    });
    this.props.deleteInput(this.props.index);
  }

  render() {
    return (
      <div className="inputs-container">
        <label>Title:</label>
        <input
          type={"text"}
          id="title"
          value={this.props.info.title}
          onChange={this.onChange}
        />
        <label>Start:</label>
        <input
          type={"text"}
          id="start"
          value={this.props.info.start}
          onChange={this.onChange}
        />
        <label>End:</label>
        <input
          type={"text"}
          id="end"
          value={this.props.info.end}
          onChange={this.onChange}
        />
        <label>Company:</label>
        <input
          type={"text"}
          id="company"
          value={this.props.info.company}
          onChange={this.onChange}
        />
        <label>Location:</label>
        <input
          type={"text"}
          id="location"
          value={this.props.info.location}
          onChange={this.onChange}
        />
        <div>
          <label>Descriptions:</label>
          <button className="circle-button">+</button>
          <div className="description-container">
            <DescriptionInputs
              id="descriptions"
              descriptions={this.props.info.descriptions}
              onChange={this.onChange}
            />
          </div>
        </div>
        <button className="mid-length-button" onClick={this.handleClick}>
          Remove
        </button>
      </div>
    );
  }
}

export default ExperienceInputItem;
