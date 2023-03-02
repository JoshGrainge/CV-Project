import React, { useState, useEffect } from "react";

function TechnicalSkillsInputItem(props) {
  const [title, setTitle] = useState(props.info.title);
  const [text, setText] = useState(props.info.text);

  const remove = () => {
    props.deleteInput(props.index);
  };

  useEffect(() => {
    props.onChange(props.index, {
      title: title,
      text: text,
    });
  }, [title, text]);

  useEffect(() => {
    setTitle(props.info.title);
    setText(props.info.text);
  }, [props.info]);

  return (
    <div className="inputs-container">
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Text:</label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button className="mid-length-button" onClick={remove}>
        Remove
      </button>
    </div>
  );
}

export default TechnicalSkillsInputItem;
