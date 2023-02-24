import React, { Component } from "react";

class EducationItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div className="text-row">
          <p>
            <span className="bold">{this.props.info.name}</span>
          </p>
          <p>{this.props.info.location}</p>
        </div>
        <div className="text-row">
          <p>
            <span className="sub">{this.props.info.diploma}</span>
          </p>
          <p>
            <span className="sub">
              {this.props.info.start} - {this.props.info.end}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default EducationItem;
