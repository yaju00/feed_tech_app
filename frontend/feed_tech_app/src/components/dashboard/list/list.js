import React, { Component } from "react";
import styles from "./list.module.css";
import Navbar from "../navbar/navbar";
import axios from "axios";
import ArticleModal from "./articleModal";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: [],
      readMoreModal: false,
      responseDataToModal: [],
    };
  }

  componentDidMount() {
    let responseArray = [];
    axios
      .get(`http://localhost:5000/dashboard/list`)
      .then((res) => {
        res.data.map((el, index) => {
          responseArray.push(el);
        });
        this.setState({ responseData: responseArray });
      })
      .catch((err) => err);
  }
  modalHandler = (el) => {
    this.setState({ readMoreModal: true });
    this.setState({ responseDataToModal: el });
  };
  modalCloser = () => {
    this.setState({ readMoreModal: false });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container text-center mt-5 pt-5 mb-5 pb-5">
          <div className="row">
            {this.state.responseData.map((el, index) => {
              return (
                <div key={el._id} id={styles["column"]} className="col-sm-4">
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ fontFamily: "georgia" }}>{el.title}</h4>
                  </div>
                  <div>
                    <p>{el.description}</p>
                  </div>
                  <button
                    id={styles["btn"]}
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.modalHandler(el)}
                  >
                    Read More...
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <ArticleModal
          readMoreModal={this.state.readMoreModal}
          responseDataToModal={this.state.responseDataToModal}
          modalCloser={this.modalCloser}
        />
      </div>
    );
  }
}

export default List;
