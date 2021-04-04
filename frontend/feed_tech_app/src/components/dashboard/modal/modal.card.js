import React, { Component } from "react";
import styles from "./modalcard.module.css";
import { Link } from "react-router-dom";

class ModalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleSignup: [
        "Signedup Successfully",
        "Something went wrong! Please try again",
        "Login Error ! Please try again",
      ],
      buttonTagSignUp: ["Go to Login Page", "Close", "Close"],
    };
  }
  render() {
    return (
      <div>
        <div style={{ display: this.props.viewState ? "block" : "none" }}>
          <div className={styles.modalCard}>
            <h2>{this.state.titleSignup[0]}</h2>
            <button type="submit" className="btn btn-primary">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/login"
              >
                {this.state.buttonTagSignUp[0]}
              </Link>
            </button>
          </div>
        </div>
        <div style={{ display: this.props.viewErrState ? "block" : "none" }}>
          <div className={styles.modalCard}>
            <h3>{this.state.titleSignup[1]}</h3>
            <button
              onClick={this.props.errorModalCloser}
              type="submit"
              className="btn btn-primary"
            >
              {this.state.buttonTagSignUp[1]}
            </button>
          </div>
        </div>
        <div style={{ display: this.props.loginErrState ? "block" : "none" }}>
          <div className={styles.modalCard}>
            <h3>{this.state.titleSignup[2]}</h3>
            <button
              onClick={this.props.errorLoginCloser}
              type="submit"
              className="btn btn-primary"
            >
              {this.state.buttonTagSignUp[2]}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCard;
