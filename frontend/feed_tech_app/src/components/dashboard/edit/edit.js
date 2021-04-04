import React, { Component } from "react";
import styles from "./edit.module.css";
import Navbar from "../navbar/navbar";
import axios from "axios";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        "politics",
        "sports",
        "entertainment",
        "business",
        "economics",
      ],
      title: "",
      description: "",
      category: "",
      image: "",
      body: "",
    };
  }
  componentDidMount = () => {
    axios
      .get(`http://localhost:5000/dashboard/` + this.props.match.params.id)
      .then((res) => {
        console.log(res);
        this.setState({
          title: res.data.title,
          description: res.data.description,
          category: res.data.category,
          image: res.data.image,
          body: res.data.body,
        });
      })
      .catch((err) => {
        throw console.log(err);
      });
    console.log(this.props.match.params.id);
  };

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };
  onChangeCategory = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ categories: value });
  };
  onChangeImage = (e) => {
    this.setState({ image: e.target.value });
  };
  onChangeBody = (e) => {
    this.setState({ body: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.categories,
      image: this.state.image,
      body: this.state.body,
    };

    axios
      .patch(
        `http://localhost:5000/dashboard/update/` + this.props.match.params.id,
        newArticle
      )
      .then((res) => {
        this.setState({ title: "" });
        this.setState({ description: "" });
        this.setState({ category: "" });
        this.setState({ image: "" });
        this.setState({ body: "" });
        console.log(res);
      })
      .catch((err) => err);

    console.log(newArticle);
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 pt-5 mb-5 pb-5" id={styles["mainDiv"]}>
          <div>
            <h2 className="text-center">Edit Your Article(s)</h2>
          </div>
          <form
            method="post"
            onSubmit={this.onSubmit}
            className={styles.mainForm}
          >
            <div className="form-group">
              <label>Title</label>
              <input
                onChange={this.onChangeTitle}
                type="text"
                name="title"
                value={this.state.title}
                className="form-control"
                placeholder="Enter Title"
                value={this.state.title}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <br />
              <select
                name="catogory"
                onChange={this.onChangeCategory}
                className="form-select"
                aria-label="Default select example"
                value={this.state.categories}
              >
                <option selected>choose</option>;
                {this.state.categories.map((el, index) => {
                  return <option value={el}>{el}</option>;
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                onChange={this.onChangeDescription}
                name="description"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Article Description"
                value={this.state.description}
              />
            </div>
            <div className="form-group">
              <label>Supporting Image</label>
              <input
                onChange={this.onChangeImage}
                name="image"
                type="file"
                className="form-control"
                placeholder="Upload Image"
              />
            </div>
            <div className="form-group">
              <label>Article Body</label>
              <textarea
                style={{ height: "100px" }}
                onChange={this.onChangeBody}
                name="body"
                className="form-control"
                placeholder=" Artcile Body"
                value={this.state.body}
              />
            </div>
            <button
              id={styles["submitBtn"]}
              type="submit"
              className="btn btn-primary mx-auto,"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
