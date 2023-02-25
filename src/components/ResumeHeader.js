import React, { Component } from "react";

class ResumeHeader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="header">
        <h1>{this.props.info.name}</h1>
        <p>{this.props.info.location}</p>
        <p>{this.props.info.phone}</p>
        <p>{this.props.info.email}</p>
      </div>
    );
  }
}

export default ResumeHeader;
