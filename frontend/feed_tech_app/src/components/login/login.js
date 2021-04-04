import React, { Component } from "react";
import styles from "./login.module.css";
import Modal from "../dashboard/modal/modal";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginErrState: false,
      loginState: false,
      loginid: "",
      password: "",
      isAuthenticated: false,
    };
  }
  onChangeLoginId = (e) => {
    this.setState({ loginid: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  errorLoginCloser = () => {
    this.setState({ loginErrState: false });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      loginid: this.state.loginid,
      password: this.state.password,
    };
    let userIdDb;
    let sessionIds = [];
    axios
      .post(`http://localhost:5000/login`, user)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          userIdDb = res.data;
          return axios.get(`http://localhost:5000/login`);
        } else {
          this.setState({ loginErrState: true });
        }
      })
      .then((res) => {
        res.data.map((el, index) => {
          return sessionIds.push(el.userid);
        });
        if (sessionIds.includes(userIdDb)) {
          this.setState({ isAuthenticated: true });
        }
      })
      .then((res) => {
        if (this.state.isAuthenticated) {
          this.props.history.push({
            pathname: `/dashboard`,
          });
        }
        console.log(this.state.isAuthenticated);
      })
      .catch((err) => err);

    console.log(user);
  };
  loginHandler = () => {
    this.setState({ loginState: true });
  };
  render() {
    return (
      <div>
        <div className="container text-center">
          <h2>Login for Registered User</h2>
        </div>
        <form onSubmit={this.onSubmit} className={styles.mainForm}>
          <div className="form-group">
            <label>Email Id/Phone Number</label>
            <input
              onChange={this.onChangeLoginId}
              name="loginid"
              className="form-control"
              placeholder="Enter Email Id/Phone Number"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.onChangePassword}
              name="password"
              className="form-control"
              placeholder="Enter Password"
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
        <Modal
          loginErrState={this.state.loginErrState}
          errorLoginCloser={this.errorLoginCloser}
        />
        {this.props.isAuthenticated}
      </div>
    );
  }
}

export default withRouter(Login);
