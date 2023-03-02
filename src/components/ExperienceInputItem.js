import React, { useState, useEffect, Component } from "react";
import DescriptionInputs from "./DescriptionInputs";

function ExperienceInputItem(props) {
  const [title, setTitle] = useState(props.info.title);
  const [start, setStart] = useState(props.info.start);
  const [end, setEnd] = useState(props.info.end);
  const [company, setCompany] = useState(props.info.company);
  const [location, setLocation] = useState(props.info.location);
  const [descriptions, setDescriptions] = useState(props.info.descriptions);

  const remove = () => {
    props.deleteInput(props.index);
  };

  useEffect(() => {
    props.onChange(props.index, {
      title: title,
      start: start,
      end: end,
      company: company,
      location: location,
      descriptions: descriptions,
    });
  }, [title, start, end, company, location, descriptions]);

  useEffect(() => {
    setTitle(props.info.title);
    setStart(props.info.start);
    setEnd(props.info.end);
    setCompany(props.info.company);
    setLocation(props.info.location);
    setDescriptions(props.info.descriptions);
  }, [props.info]);

  return (
    <div className="inputs-container">
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Start:</label>
      <input value={start} onChange={(e) => setStart(e.target.value)} />
      <label>End:</label>
      <input value={end} onChange={(e) => setEnd(e.target.value)} />
      <label>Company:</label>
      <input value={company} onChange={(e) => setCompany(e.target.value)} />
      <label>Location:</label>
      <input value={location} onChange={(e) => setLocation(e.target.value)} />
      <div>
        <label>Descriptions:</label>
        <div className="description-container">
          <DescriptionInputs
            id="descriptions"
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

export default ExperienceInputItem;
