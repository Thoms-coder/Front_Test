import './App.css';
import SignInSide from './SignInSide';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Dashboard}/>   
        <Route path="/signup" component={SignUp}/>
        <Route path="/" component={SignInSide}/>
      </Switch>
    </Router>
  );
}

export default App;
