import React, { Component } from "react";
import DescriptionList from "./DescriptionList";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="text-row">
          <p>{this.props.title}</p>
          <p>
            {this.props.start} - {this.props.end}
          </p>
        </div>
        <div className="text-row">
          <p>{this.props.company}</p>
          <p>{this.props.location}</p>
        </div>

        <DescriptionList tasks={this.props.tasks} />
      </div>
    );
  }
}

export default ExperienceItem;
