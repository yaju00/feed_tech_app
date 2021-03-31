import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard/dashboard";
import Settings from "./components/dashboard/settings/setting";
import Create from "./components/dashboard/create/create";
import List from "./components/dashboard/list/list";
import Logout from "./components/dashboard/logout/logout";

function App() {
  return (
    <Router>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/list">
        <List />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
    </Router>
  );
}

export default App;
