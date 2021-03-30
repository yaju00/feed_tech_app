import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Signup from './components/signup/signup';
import Login from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <Router>
    <Route path='/signup'><Signup/></Route>
    <Route path='/login'><Login /></Route>
    <Route path='/dashboard'><Dashboard /></Route>   
    </Router>
  );
}

export default App;
