import React, { Component } from "react";
import ProjectInfo from "../ProjectInfo";
import DescriptionInputs from "./DescriptionInputs";

class ProjectsInputItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      title: this.props.info.title,
      link: this.props.info.link,
      tools: this.props.info.tools,
      start: this.props.info.start,
      end: this.props.info.end,
      descriptions: this.props.info.descriptions,
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
      ProjectInfo(
        this.state.title,
        this.state.link,
        this.state.tools,
        this.state.start,
        this.state.end,
        this.state.descriptions
      )
    );
  }

  handleClick() {
    this.setState({
      title: "",
      link: "",
      tools: "",
      start: "",
      end: "",
      descriptions: [],
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
        <label>Link to Project:</label>
        <input
          type={"text"}
          id="link"
          value={this.props.info.link}
          onChange={this.onChange}
        />
        <label>Tools:</label>
        <input
          type={"text"}
          id="tools"
          value={this.props.info.tools}
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
        <div>
          <label>Descriptions:</label>
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

export default ProjectsInputItem;
