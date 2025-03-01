import './App.css';
import './index.css';


function App() {
  var message = "Info here";
  return (
    <div className="App">
      <header className=' = App'>
        <p>
          Additional Info(per req)
        </p>
        <p>
          <textarea>
            {message}
          </textarea>
        </p>
      </header>
    </div>
  );
}

export default App;
