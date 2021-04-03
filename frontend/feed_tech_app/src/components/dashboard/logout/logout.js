import React, { Component } from "react";
import styles from "./logout.module.css";
import axios from "axios";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>You have logged out successfully</div>;
  }
}

export default Logout;
