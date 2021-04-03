import React, { Component } from "react";
import styles from "./modal.module.css";
import ModalCard from "./modal.card";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleSignup: "",
      tagSignup: "",
      nextSignup: "",
    };
  }
  render() {
    return (
      <div>
        <div
          style={{ visibility: this.props.viewState ? "visible" : "hidden" }}
          className={styles.modal}
        >
          <div>
            <ModalCard viewState={this.props.viewState} />
          </div>
        </div>
        <div
          style={{ visibility: this.props.viewErrState ? "visible" : "hidden" }}
          className={styles.modal}
        >
          <div>
            <ModalCard
              viewErrState={this.props.viewErrState}
              errorModalCloser={this.props.errorModalCloser}
            />
          </div>
          <div
            style={{
              visibility: this.props.loginErrState ? "visible" : "hidden",
            }}
            className={styles.modal}
          >
            <div>
              <ModalCard
                loginErrState={this.props.loginErrState}
                errorLoginCloser={this.props.errorLoginCloser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
