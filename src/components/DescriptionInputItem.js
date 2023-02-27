import React, { Component } from "react";

class DescriptionInputItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    console.log("Item description: " + this.props.description);

    this.onChange = this.onChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState({
      description: undefined,
    });
    this.props.deleteInput(this.props.index);
  }

  render() {
    return (
      <div className="description-container">
        <input
          type={"text"}
          id="descriptions"
          value={this.props.description}
          onChange={this.onChange}
        />
        <button className="circle-button" onClick={this.handleClick}>
          x
        </button>
      </div>
    );
  }
}

export default DescriptionInputItem;
