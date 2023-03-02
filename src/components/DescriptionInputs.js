import React, { useState, useEffect } from "react";
import DescriptionInputItem from "./DescriptionInputItem";

let inputs = [];

function DescriptionInputs(props) {
  const [descriptions, setDescriptions] = useState(props.descriptions);

  useEffect(() => {
    props.onChange(descriptions);

    // Reassign description inputs
    inputs = [];
    for (let i = 0; i < descriptions.length; i++) {
      inputs.push(
        <DescriptionInputItem
          key={i}
          index={i}
          description={descriptions[i]}
          deleteInput={removeInput}
          onChange={changeInput}
        />
      );
    }
  }, [descriptions]);

  const removeInput = (index) => {
    setDescriptions([
      ...descriptions.slice(0, index),
      ...descriptions.slice(index + 1),
    ]);
  };

  const changeInput = (index, newInput) => {
    setDescriptions([
      ...descriptions.slice(0, index),
      newInput,
      ...descriptions.slice(index + 1),
    ]);
  };

  const addInput = () => {
    setDescriptions([...descriptions, "Function"]);
  };

  return (
    <div className="full-width">
      {inputs}
      <button className="circle-button" onClick={addInput}>
        +
      </button>
    </div>
  );
}

export default DescriptionInputs;
