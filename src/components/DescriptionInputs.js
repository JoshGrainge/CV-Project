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
    this.addInput = this.addInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
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

  addInput() {
    const newDescriptions = [...this.state.descriptions, ""];

    this.setState(
      {
        descriptions: newDescriptions,
      },
      this.submitChanges
    );
  }

  deleteInput(index) {
    console.log(index);

    const newDescriptions = this.state.descriptions.filter((_, i) => {
      return index !== i;
    });

    this.setState(
      {
        descriptions: newDescriptions,
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
              deleteInput={this.deleteInput}
              onChange={this.onChange}
            />
          );
        })}
        <button className="circle-button" onClick={this.addInput}>
          +
        </button>
      </div>
    );
  }
}

export default DescriptionInputs;
