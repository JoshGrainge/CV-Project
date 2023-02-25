import React, { Component } from "react";

class ResumeSectionHeader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <hr />
      </div>
    );
  }
}

export default ResumeSectionHeader;
