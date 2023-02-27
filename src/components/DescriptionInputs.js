import React, { Component } from "react";
import DescriptionInputItem from "./DescriptionInputItem";

class DescriptionInputs extends Component {
  constructor(props) {
    super(props);

    console.log("Description Inputs descriptions: " + this.props.descriptions);

    this.state = {
      descriptions: this.props.descriptions,
    };

    this.onChange = this.onChange.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }

  onChange(index, newDescription) {
    const newDescriptionInputs = [...this.state.descriptions];
    newDescriptionInputs[index] = newDescription;

    this.setState(
      {
        descriptions: newDescriptionInputs,
      },
      this.submitChanges
    );
  }

  submitChanges() {
    const r = {
      target: {
        id: "descriptions",
        value: this.state.descriptions,
      },
    };
    this.props.onChange(r);
  }

  render() {
    return (
      <div>
        {this.state.descriptions.map((description, i) => {
          return (
            <DescriptionInputItem
              key={i}
              index={i}
              description={description}
              onChange={this.onChange}
            />
          );
        })}
        <button className="circle-button">+</button>
      </div>
    );
  }
}

export default DescriptionInputs;
