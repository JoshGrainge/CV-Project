import React, { useState, useEffect } from "react";

function EducationInputItem(props) {
  const [name, setName] = useState(props.info.name);
  const [location, setLocation] = useState(props.info.location);
  const [diploma, setDiploma] = useState(props.info.diploma);
  const [start, setStart] = useState(props.info.start);
  const [end, setEnd] = useState(props.info.end);

  const remove = () => {
    props.deleteInput(props.index);
  };

  useEffect(() => {
    props.onChange(props.index, {
      name: name,
      location: location,
      diploma: diploma,
      start: start,
      end: end,
    });
  }, [name, location, diploma, start, end]);

  useEffect(() => {
    setName(props.info.name);
    setLocation(props.info.location);
    setDiploma(props.info.diploma);
    setStart(props.info.start);
    setEnd(props.info.end);
  }, [props.info]);

  return (
    <div className="inputs-container">
      <label>College Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>College Location:</label>
      <input value={location} onChange={(e) => setLocation(e.target.value)} />
      <label>Diploma:</label>
      <input value={diploma} onChange={(e) => setDiploma(e.target.value)} />
      <label>Start Date:</label>
      <input value={start} onChange={(e) => setStart(e.target.value)} />
      <label>End Date:</label>
      <input value={end} onChange={(e) => setEnd(e.target.value)} />
      <button className="mid-length-button" onClick={remove}>
        Remove
      </button>
    </div>
  );
}

export default EducationInputItem;
