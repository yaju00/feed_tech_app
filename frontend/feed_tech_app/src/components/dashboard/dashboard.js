import React, { Component } from "react";
import styles from "./dashboard.module.css";
import Navbar from "../dashboard/navbar/navbar";
import axios from "axios";
import ArticleModal from "./list/articleModal";

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
      <div style={{ backgroundColor: "yellow" }}>
        <Navbar />
        <div className="container mt-5 pt-5 mb-5 pb-5">
          <div style={{ backgroundColor: "white" }} className="row">
            {this.state.responseData.map((el, index) => {
              return (
                <div key={el._id} id={styles["column"]} className="col-sm-6">
                  <div style={{ marginBottom: "10px" }}>
                    <h4 style={{ fontFamily: "georgia" }}>Title</h4>
                    {el.title}
                  </div>
                  <div>
                    <h5>Description</h5>
                    {el.description}
                  </div>
                  <button
                    id={styles["btn"]}
                    type="button"
                    className="btn btn-dark"
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
