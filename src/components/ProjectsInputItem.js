import React, { useState, useEffect } from "react";
import DescriptionInputs from "./DescriptionInputs";

function ProjectsInputItem(props) {
  const [title, setTitle] = useState(props.info.title);
  const [link, setLink] = useState(props.info.link);
  const [tools, setTools] = useState(props.info.tools);
  const [start, setStart] = useState(props.info.start);
  const [end, setEnd] = useState(props.info.end);
  const [descriptions, setDescriptions] = useState(props.info.descriptions);

  const remove = () => {
    props.deleteInput(props.index);
  };

  useEffect(() => {
    props.onChange(props.index, {
      title: title,
      link: link,
      tools: tools,
      start: start,
      end: end,
      descriptions: descriptions,
    });
  }, [title, link, tools, start, end, descriptions]);

  useEffect(() => {
    setTitle(props.info.title);
    setLink(props.info.link);
    setTools(props.info.tools);
    setStart(props.info.start);
    setEnd(props.info.end);
    setDescriptions(props.info.descriptions);
  }, [props.info]);

  return (
    <div className="inputs-container">
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Link to Project:</label>
      <input value={link} onChange={(e) => setLink(e.target.value)} />
      <label>Tools:</label>
      <input value={tools} onChange={(e) => setTools(e.target.value)} />
      <label>Start:</label>
      <input value={start} onChange={(e) => setStart(e.target.value)} />
      <label>End:</label>
      <input value={end} onChange={(e) => setEnd(e.target.value)} />
      <div>
        <label>Descriptions:</label>
        <div className="description-container">
          <DescriptionInputs
            descriptions={descriptions}
            onChange={setDescriptions}
          />
        </div>
      </div>
      <button className="mid-length-button" onClick={remove}>
        Remove
      </button>
    </div>
  );
}

export default ProjectsInputItem;
