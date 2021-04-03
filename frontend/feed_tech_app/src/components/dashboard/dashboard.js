import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //   componentDidMount() {
  //       axios.get(`http://localhost:5000/login`)
  //   }

  render() {
    return (
      <div>
        <Navbar />
        This is dashboard This is dashboard This is dashboard This is dashboard
      </div>
    );
  }
}

export default Dashboard;
