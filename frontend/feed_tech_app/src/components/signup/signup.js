import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./signup.module.css";

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
    };
  }
  dateChanger = (date) => {
    this.setState({ date: date });
  };
  render() {
    return (
      <div>
        <div className="container text-center">
          <h2>New User Registration</h2>
        </div>
        <form className={styles.mainForm}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              className="form-control"
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
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
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="cpassword"
              className="form-control"
              id="exampleInputPassword1"
              placeholder=" Re-enter Password"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="firstname"
              className="form-control"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <br />
            <TextField
              id="date"
              type="date"
              name="dob"
              defaultValue="01-01-2000"
              onChange={(x, y) => console.log(x, y)}
              InputLabelProps={{
                shrink: true,
              }}
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
              className="form-select"
              aria-label="Default select example"
              multiple
            >
              {this.state.selectOptions.map((el, index) => {
                return <option>{el}</option>;
              })}
            </select>
          </div>
        </form>
        <button
          id={styles["submitBtn"]}
          type="submit"
          className="btn btn-primary mx-auto,"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Signup;
