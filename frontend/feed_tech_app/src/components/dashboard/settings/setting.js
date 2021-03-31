import React, { Component } from "react";
import styles from "./setting.module.css";
import Navbar from "../navbar/navbar";

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
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <div id={styles["mainDiv"]} className="container">
          <div>
            <h2 className="text-center">Edit Your Info</h2>
          </div>
          <form className={styles.mainForm}>
            <div className="form-group">
              <label>New Password</label>
              <input
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter New Password"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                name="cpassword"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=" Confirm New Password"
              />
            </div>
            <div className="form-group">
              <label>New Phone Number</label>
              <input
                name="firstname"
                className="form-control"
                placeholder="Enter New Phone Number"
              />
            </div>
            <div className="form-group">
              <label>Edit Article Prefrence(s)</label>
              <br />
              <p>
                Hold down the Ctrl (windows) or Command (Mac) button to select
                multiple options.
              </p>
              <select className="form-select" multiple>
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
      </div>
    );
  }
}

export default Settings;
