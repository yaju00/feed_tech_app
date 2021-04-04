import React, { Component } from "react";
import styles from "./navbar.module.css";
import * as FaIcons from "react-icons/fa";
import * as VscIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarStatus: true,
    };
  }
  sideBarToggler = () => {
    const inter = this.state.sideBarStatus;
    this.setState({ sideBarStatus: !inter });
  };

  logoutHandler = () => {
    axios.post();
  };
  render() {
    return (
      <div className={styles.mainDiv}>
        <div
          id={styles["nav"]}
          className="navbar fixed-top navbar-dark bg-dark"
        >
          <button
            onClick={this.sideBarToggler}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={styles.sideBar}
          style={{
            display: this.state.sideBarStatus ? "inline-block" : "none",
          }}
        >
          <ul className="navbar-nav">
            <li onClick={this.sideBarToggler} className="nav-item">
              <VscIcons.VscChromeClose id={styles["close"]} />
              <p>Close</p>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <FaIcons.FaHome className={styles.icons} />
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/settings">
                <VscIcons.VscSettingsGear className={styles.icons} />
                <p>Settings</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/create">
                <MdIcons.MdCreate className={styles.icons} />
                <p>Create</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/list">
                <FaIcons.FaList className={styles.icons} />
                <p> Your List</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                <AiIcons.AiOutlineLogout className={styles.icons} />
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
