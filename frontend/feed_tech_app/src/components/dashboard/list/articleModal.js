import React, { Component } from "react";
import styles from "./articleModal.module.css";
import { Link } from "react-router-dom";

class articleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          style={{
            visibility: this.props.readMoreModal ? "visible" : "hidden",
          }}
          className={styles.modal}
        >
          <div className={styles.modalCard}>
            <h2>Title</h2>
            <div style={{ marginBottom: "15px" }}>
              {this.props.responseDataToModal.title}
            </div>
            <h2>Description</h2>
            <div style={{ marginBottom: "15px" }}>
              {this.props.responseDataToModal.description}
            </div>
            <h2>Category</h2>
            <div style={{ marginBottom: "15px" }}>
              {this.props.responseDataToModal.category}
            </div>
            <h2>Body</h2>
            <div style={{ marginBottom: "15px" }}>
              {this.props.responseDataToModal.body}
            </div>
            <button
              onClick={this.props.modalCloser}
              type="submit"
              class="btn btn-primary"
              id={styles["btn"]}
            >
              Close
            </button>
            <div className={styles.link}>
              <Link
                style={{ textDecoration: "none", marginLeft: "0" }}
                to={`/dashboard/edit/` + this.props.responseDataToModal._id}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default articleModal;
