import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
        <Route path="/add">
            <AddUser />
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>         
        </Switch>
      </Router>
    </div>
  );
}

export default App;