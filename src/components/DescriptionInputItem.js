import React, { Component } from "react";

class DescriptionInputItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    console.log("Item description: " + this.props.description);

    this.onChange = this.onChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  onChange(e) {
    this.setState(
      {
        description: e.target.value,
      },
      this.submitChange
    );
  }

  submitChange(e) {
    this.props.onChange(this.props.index, this.state.description);
  }

  render() {
    return (
      <div>
        <input
          type={"text"}
          id="descriptions"
          value={this.props.description}
          onChange={this.onChange}
        ></input>
        <button className="circle-button">x</button>
      </div>
    );
  }
}

export default DescriptionInputItem;
