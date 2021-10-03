import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_PORT}/data`).then((res) =>
      this.setState({
        data: res.data,
      })
    );
  };

  render() {
    return <div></div>;
  }
}

export default App;
