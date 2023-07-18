import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Caculating from './Components/Calculators';
import Quotes from './Components/Quotes';
import Welcomhere from './Components/Home';
import Navingonpage from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navingonpage />
        <Switch>
          <div>
            <Route exact path="/" component={Welcomhere} />
            <Route exact path="/calculator" component={Caculating} />
            <Route exact path="/quotes" component={Quotes} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
