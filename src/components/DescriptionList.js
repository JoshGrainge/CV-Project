import React, { Component } from "react";

class DescriptionList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map((task, i) => {
          return <li key={i}>{task}</li>;
        })}
      </ul>
    );
  }
}

export default DescriptionList;
