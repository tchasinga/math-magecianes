import './App.css';
import Caculating from './Components/Calculators';
import Quotes from './Components/Quotes';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcom</h1>
        <Caculating />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
