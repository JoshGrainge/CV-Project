import React, { Component } from "react";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <p>
        {this.props.title}: {this.props.text}
      </p>
    );
  }
}

export default ProjectItem;
