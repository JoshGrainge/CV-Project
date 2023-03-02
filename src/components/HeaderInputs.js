import React, { useState, useEffect } from "react";
import HeaderInfo from "../HeaderInfo";

function HeaderInputs(props) {
  const [info, setInfo] = useState(
    HeaderInfo("Full Name", "Location", "555-5555", "Email@email.com")
  );

  useEffect(() => {
    props.onChange(info);
  }, [info]);

  const updateInfo = (e) => {
    const newInfo = {
      ...info,
      [e.target.id]: e.target.value,
    };

    setInfo(newInfo);
  };

  return (
    <div id="header-inputs" className="section-inputs">
      <h3>Personal Info:</h3>
      <div className="inputs-container">
        <label>Name:</label>
        <input id="name" value={info.name} onChange={updateInfo}></input>
        <label>Address:</label>
        <input
          id="location"
          value={info.location}
          onChange={updateInfo}
        ></input>
        <label>Phone:</label>
        <input id="phone" value={info.phone} onChange={updateInfo}></input>
        <label>Email:</label>
        <input id="email" value={info.email} onChange={updateInfo}></input>
      </div>
    </div>
  );
}

export default HeaderInputs;
