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
          <p>
            <span className="bold">{this.props.info.title}</span>
          </p>
          <p>
            {this.props.info.start} - {this.props.info.end}
          </p>
        </div>
        <div className="text-row">
          <p>
            <span className="sub">{this.props.info.company}</span>
          </p>
          <p>
            <span className="sub">{this.props.info.location}</span>
          </p>
        </div>

        <DescriptionList descriptions={this.props.info.descriptions} />
      </div>
    );
  }
}

export default ExperienceItem;
