import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard/dashboard";
import Settings from "./components/dashboard/settings/setting";
import Create from "./components/dashboard/create/create";
import Edit from "./components/dashboard/edit/edit";
import List from "./components/dashboard/list/list";
import Logout from "./components/dashboard/logout/logout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuntheticated: false,
    };
  }
  render() {
    return (
      <Router>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login authHandler={this.authHandler} />
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/settings">
          <Settings />
        </Route>
        <Route exact path="/dashboard/create">
          <Create />
        </Route>
        <Route exact path={"/dashboard/edit/:id"} component={Edit} />
        <Route exact path="/dashboard/list">
          <List />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Router>
    );
  }
}

export default App;
