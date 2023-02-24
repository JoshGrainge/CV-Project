import React, { Component } from "react";
import "./App.css";
import Resume from "./components/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <Resume />;
  }
}

export default App;
