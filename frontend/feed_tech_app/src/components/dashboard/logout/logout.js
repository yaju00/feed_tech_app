import React, { Component } from "react";
import styles from "./logout.module.css";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container text-center mt-5 pt-5">
          You have logged out successfully
        </div>
        <button type="button" className="btn btn-primary" id={styles["btn"]}>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
        </button>
      </div>
    );
  }
}

export default Logout;
