import React, { Component } from "react";
import DescriptionList from "./DescriptionList";

class ResumeProjectItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="text-row">
          <p>
            <span className="bold">{this.props.info.title}</span> |{" "}
            <span className="sub">{this.props.info.tools}</span>
          </p>
          <p>
            {this.props.info.start} - {this.props.info.end}
          </p>
        </div>
        <DescriptionList descriptions={this.props.info.descriptions} />
      </div>
    );
  }
}

export default ResumeProjectItem;
