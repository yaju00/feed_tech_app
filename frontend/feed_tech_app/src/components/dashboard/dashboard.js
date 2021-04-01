import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Dashboard;
