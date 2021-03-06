import React, { Component } from "react";
import styles from "./settings.module.css";
import Navbar from "../navbar/navbar";
import axios from "axios";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [
        "politics",
        "sports",
        "entertainment",
        "business",
        "economics",
      ],
      email: "",
      password: "",
      cpassword: "",
      phone: "",
      preference: [],
    };
  }
  ChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  ChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  ChangeCpassword = (e) => {
    this.setState({ cpassword: e.target.value });
  };
  ChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  };
  ChangePrefrence = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ preference: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword,
      phone: this.state.phone,
      preference: this.state.preference,
    };
    console.log(newData);
    axios
      .patch(`http://localhost:5000/dashboard/settings`, newData)
      .then((res) => {
        this.setState({ email: "" });
        this.setState({ password: "" });
        this.setState({ cpassword: "" });
        this.setState({ phone: "" });
        this.setState({ preference: [] });
        console.log(res);
      })
      .catch((err) => err);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div id={styles["mainDiv"]} className="container mt-5 pt-5 mb-5 pb-5">
          <div>
            <h2 className="text-center">Edit Your Info</h2>
          </div>
          <form onSubmit={this.onSubmit} className={styles.mainForm}>
            <div className="form-group">
              <label>Existing Email address</label>
              <input
                onChange={this.ChangeEmail}
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                onChange={this.ChangePassword}
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter New Password"
                value={this.state.password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                onChange={this.ChangeCpassword}
                name="cpassword"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=" Confirm New Password"
                value={this.state.cpassword}
              />
            </div>
            <div className="form-group">
              <label>New Phone Number</label>
              <input
                onChange={this.ChangePhone}
                name="phone"
                className="form-control"
                placeholder="Enter New Phone Number"
                value={this.state.phone}
              />
            </div>
            <div className="form-group">
              <label>Edit Article Prefrence(s)</label>
              <br />
              <p>
                Hold down the Ctrl (windows) or Command (Mac) button to select
                multiple options.
              </p>
              <select
                name="preference"
                onChange={this.ChangePrefrence}
                className="form-select"
                multiple
                value={this.state.preference}
              >
                {this.state.selectOptions.map((el, index) => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
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

export default Settings;
