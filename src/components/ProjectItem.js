import React, { Component } from "react";
import DescriptionList from "./DescriptionList";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="text-row">
          <p>
            {this.props.title} | {this.props.tools}
          </p>
          <p>
            {this.props.start} - {this.props.end}
          </p>
        </div>
        <DescriptionList tasks={this.props.tasks} />
      </div>
    );
  }
}

export default ProjectItem;
