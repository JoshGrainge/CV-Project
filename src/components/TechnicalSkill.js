import React, { Component } from "react";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <p>
        <span className="bold">{this.props.info.title}:</span>{" "}
        {this.props.info.text}
      </p>
    );
  }
}

export default ProjectItem;
