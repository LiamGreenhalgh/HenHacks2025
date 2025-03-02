import { useState, memo, useRef, useEffect } from "react";
import handleAnalyse from "./utils/handleAnalyse";
import AnalysisBox from "./components/AnalysisBox";
import ListItem from "./components/ListItem";
import ListContainer from "./components/ListContainer";
import "./App.css";

function App() {
  const [output, setOutput] = useState("hello world");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [readings, setReadings] = useState([]);

  return (
    <div className="app">
      <div className="wrap-list-container">
        <ListContainer />
      </div>
      <div className="centre-analysis">
        <AnalysisBox
          handleAnalyse={handleAnalyse}
          loading={loading}
          setLoading={setLoading}
          output={output}
          setOutput={setOutput}
        />
      </div>
      <div className="add-info-container">
        <div className="additional-info">Info</div>
      </div>
      <div className="prompt-container">
        <div className="prompt-entry">
          <textarea placeholder="type something" className="entry" value={inputValue} onChange={(e) => setInputValue(e.target.inputValue)}></textarea>
          <button className="submit-btn" onClick={() => handleAnalyse(inputValue, setLoading, setOutput)}>submit</button>
        </div>
      </div>
    </div>
  );
}

/* const ListMember = memo(({ item }) => {
  return <li>{item}</li>;
});

function Demo() {
  const [arr, setArr] = useState([]);
  const intervalRef = useRef(null);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  function start() {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Create new interval
    intervalRef.current = setInterval(() => {
      const date = Date.now();
      // Use functional update to get latest state
      setArr((prevArr) => [...prevArr, date]);
    }, 1000);
  }

  return (
    <>
      <button onClick={start}>Start</button>
      <ul>
        {arr.map((el) => (
          <ListMember key={el} item={el} />
        ))}
      </ul>
    </>
  );
} */

export default App;
