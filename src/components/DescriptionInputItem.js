import React, { useState, useEffect } from "react";

function DescriptionInputItem(props) {
  const [description, setDescription] = useState(props.description);

  const remove = () => {
    props.deleteInput(props.index);
  };

  useEffect(() => {
    props.onChange(props.index, description);
  }, [description]);

  useEffect(() => {
    setDescription(props.description);
  }, [props.description]);

  return (
    <div className="description-container">
      <input
        type={"text"}
        id="descriptions"
        value={props.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="circle-button" onClick={remove}>
        x
      </button>
    </div>
  );
}

export default DescriptionInputItem;
