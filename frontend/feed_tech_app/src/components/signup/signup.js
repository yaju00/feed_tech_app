import React, { Component } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import Modal from "../dashboard/modal/modal";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      selectOptions: [
        "politics",
        "sports",
        "entertainment",
        "business",
        "economics",
      ],
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
      phone: "",
      pref: "",
      modalState: false,
      modalErrState: false,
    };
  }

  onChangefisrtname = (e) => {
    this.setState({ firstname: e.target.value });
  };
  onChangelasttname = (e) => {
    this.setState({ lastname: e.target.value });
  };
  onChangepassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onChangecpassword = (e) => {
    this.setState({ cpassword: e.target.value });
  };
  onChangeemail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangephone = (e) => {
    this.setState({ phone: e.target.value });
  };
  onChangedate = (e) => {
    this.setState({ date: e.target.value });
  };
  onChangePreference = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ pref: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      fname: this.state.firstname,
      lname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword,
      phone: this.state.phone,
      date: this.state.date,
      preference: this.state.pref,
    };
    axios
      .post(`http://localhost:5000/signup`, user)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          this.setState({ modalState: true });
        } else {
          this.setState({ modalErrState: true });
        }
      })
      .catch((err) => {
        return err;
      });
    console.log(user);
  };

  errorModalCloser = () => {
    this.setState({ modalErrState: false });
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <h2>New User Registration</h2>
        </div>
        <form onSubmit={this.onSubmit} className={styles.mainForm}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.onChangefisrtname}
              type="text"
              name="firstname"
              className="form-control"
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.onChangelasttname}
              type="text"
              name="lastname"
              className="form-control"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={this.onChangeemail}
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.onChangepassword}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              onChange={this.onChangecpassword}
              name="cpassword"
              className="form-control"
              id="exampleInputPassword1"
              placeholder=" Re-enter Password"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              onChange={this.onChangephone}
              name="phone"
              className="form-control"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              onChange={this.onChangedate}
              name="date"
              type="date"
              className="form-control"
              placeholder="Enter Date of Birth"
            />
          </div>

          <div className="form-group">
            <label>Article Prefrence(s)</label>
            <br />
            <p>
              Hold down the Ctrl (windows) or Command (Mac) button to select
              multiple options.
            </p>
            <select
              name="preference"
              onChange={this.onChangePreference}
              className="form-select"
              aria-label="Default select example"
              multiple
            >
              {this.state.selectOptions.map((el, index) => {
                return (
                  <option key={el + "1"} value={el}>
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
        <Modal
          viewState={this.state.modalState}
          viewErrState={this.state.modalErrState}
          errorModalCloser={this.errorModalCloser}
        />
        {console.log(this.state.modalErrState)}
      </div>
    );
  }
}

export default Signup;
