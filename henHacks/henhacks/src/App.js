<<<<<<< HEAD
import { useState, memo } from "react";
import handleAnalyse from "./utils/handleAnalyse";
import AnalysisBox from "./components/AnalysisBox";
import ListItem from "./components/ListItem";
import ListContainer from "./components/ListContainer";
import "./App.css";

function App() {
<<<<<<< HEAD
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
=======
  const [output, setOutput] = useState("hello world");
  const [loading, setLoading] = useState(false);
  const [readings, setReadings] = useState([]);
  const [demo, setDemo] = useState();

  /* const ListItem = memo(({ item }) => {
    return <li>Test</li>;
  })

  function EfficientList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const addItem = () => {
      if (inputValue.trim()) {
        setItems(prevItems => [...prevItems, {
          id: Date.now(),
        }]);
        setInputValue('');
      }
    }; */

  return (
    <div className="App">
      <header>
        <p>Additional Info(per req)</p>
        <p>
          <textarea>hello</textarea>
>>>>>>> 09bd6c50642ab9be17dced83e796f221a0b7fe13
        </p>
      </header>
      <AnalysisBox
        handleAnalyse={handleAnalyse}
        loading={loading}
        setLoading={setLoading}
        output={output}
        setOutput={setOutput}
      />
      <ListContainer />
    </div>
  );
}

export default App;



