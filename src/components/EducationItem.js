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
            <span className="bold">{this.props.name}</span>
          </p>
          <p>{this.props.location}</p>
        </div>
        <div className="text-row">
          <p>{this.props.diploma}</p>
          <p>
            {this.props.start} - {this.props.end}
          </p>
        </div>
      </div>
    );
  }
}

export default EducationItem;
