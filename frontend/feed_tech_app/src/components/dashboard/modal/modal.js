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
      <div
        style={{ visibility: this.props.viewState ? "visible" : "hidden" }}
        className={styles.modal}
      >
        <div>
          <ModalCard />
        </div>
      </div>
    );
  }
}

export default Modal;
