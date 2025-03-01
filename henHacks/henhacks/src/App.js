import './App.css';
import './index.css';


function App() {
  // eslint-disable-next-line no-useless-concat
  var message = "Extra info will display here if applicable \n upon press of the analysis button";
  return (
    <div className="App">
      <header>
        <p>
          Additional Info
        </p>
        <p>
          <text className="App-txt" style={{backgroundColor: '##332c2c', color: 'white', height: 10}}>
            {message}
          </text>
        </p>
      </header>
    </div>
  );
}

export default App;
