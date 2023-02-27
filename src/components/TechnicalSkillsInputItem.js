import React, { Component } from "react";
import TechnicalSkillInfo from "../TechnicalSkillInfo";

class TechnicalSkillsInputItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      title: this.props.info.title,
      text: this.props.info.text,
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
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
      TechnicalSkillInfo(this.state.title, this.state.text)
    );
  }

  handleClick() {
    this.setState({
      title: "",
      text: "",
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
        <label>Text:</label>
        <input
          type={"text"}
          id="text"
          value={this.props.info.text}
          onChange={this.onChange}
        />
        <button className="mid-length-button" onClick={this.handleClick}>
          Remove
        </button>
      </div>
    );
  }
}

export default TechnicalSkillsInputItem;
