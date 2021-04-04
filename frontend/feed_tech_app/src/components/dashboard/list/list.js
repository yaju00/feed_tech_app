import React, { Component } from "react";
import styles from "./list.module.css";
import Navbar from "../navbar/navbar";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      description: [],
      category: [],
      body: [],
      readMoreModal: false,
      currentIndex: "",
    };
  }

  componentDidMount() {
    let titleArray = [];
    let descriptionArray = [];
    let categoryArray = [];
    let bodyArray = [];
    axios
      .get(`http://localhost:5000/dashboard/list`)
      .then((res) => {
        console.log(res);
        res.data.map((el, index) => {
          titleArray.push(el.title);
          descriptionArray.push(el.description);
          categoryArray.push(el.category);
          bodyArray.push(el.body);
        });
        this.setState({ title: titleArray });
        this.setState({ description: descriptionArray });
        this.setState({ category: categoryArray });
        this.setState({ body: bodyArray });
      })
      .catch((err) => err);
  }
  modalHandler = (index) => {
    this.setState({ readMoreModal: true });
    this.setState({ currentIndex: index });
  };
  modalCloser = () => {
    this.setState({ readMoreModal: false });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 pt-5">
          <div className="row">
            {this.state.title.map((el, index) => {
              return (
                <div id={styles["column"]} className="col-sm-3">
                  <div>
                    <h6>Title</h6>
                    {el}
                  </div>
                  <div>
                    <h6>Description</h6>
                    {this.state.description[index]}
                  </div>
                  <button
                    id={styles["btn"]}
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.modalHandler(index)}
                  >
                    Read More...
                  </button>
                  <div
                    style={{
                      visibility: this.state.readMoreModal
                        ? "visible"
                        : "hidden",
                    }}
                    className={styles.modal}
                  >
                    <div className={styles.modalCard}>
                      <h2>Title</h2>
                      <div style={{ marginBottom: "15px" }}>
                        {this.state.title[this.state.currentIndex]}
                      </div>
                      <h2>Description</h2>
                      <div style={{ marginBottom: "15px" }}>
                        {this.state.description[this.state.currentIndex]}
                      </div>
                      <h2>Category</h2>
                      <div style={{ marginBottom: "15px" }}>
                        {this.state.category[this.state.currentIndex]}
                      </div>
                      <h2>Body</h2>
                      <div style={{ marginBottom: "15px" }}>
                        {this.state.body[this.state.currentIndex]}
                      </div>
                      <button
                        onClick={this.modalCloser}
                        type="submit"
                        class="btn btn-primary"
                        id={styles["btn2"]}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
