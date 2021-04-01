import React, { Component } from "react";
import styles from "./modal.module.css";
import { Link } from "react-router-dom";

class ModalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleSignup: ["Signedup Successfully"],
      buttonTagSignUp: ["Go to Login Page"],
    };
  }
  render() {
    return (
      <div className={styles.modalCard}>
        <h2>{this.state.titleSignup[0]}</h2>
        <button type="submit" class="btn btn-primary">
          <Link to="/login">{this.state.buttonTagSignUp[0]}</Link>
        </button>
      </div>
    );
  }
}

export default ModalCard;
