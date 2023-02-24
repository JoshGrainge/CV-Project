import React, { Component } from "react";

class DescriptionList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ul>
        {this.props.descriptions.map((description, i) => {
          return <li key={i}>{description}</li>;
        })}
      </ul>
    );
  }
}

export default DescriptionList;
