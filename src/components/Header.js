import React, { Component } from "react";

class EducationItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="header">
        <h1>{this.props.name}</h1>
        <p>{this.props.location}</p>
        <p>{this.props.phone}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default EducationItem;
