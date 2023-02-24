import React, { Component } from "react";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <p>
        <span className="bold">{this.props.title}:</span> {this.props.text}
      </p>
    );
  }
}

export default ProjectItem;
