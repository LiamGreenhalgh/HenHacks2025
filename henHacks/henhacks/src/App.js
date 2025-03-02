import { useState, memo, useRef, useEffect } from "react";
import axios from "axios";
import handleAnalyse from "./utils/handleAnalyse";
import AnalysisBox from "./components/AnalysisBox";
import ListItem from "./components/ListItem";
import InfoContainer from "./components/InfoContainer";
import ListContainer from "./components/ListContainer";
import "./App.css";
import PromptContainer from "./components/PromptContainer";

function App() {
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/packets")
      .then((data) => {
        console.log(data.data.packets);
        setPackets(data.data.packets);
      })
      .catch((error) => console.log(error));
  }, []);
  //function loadData() {}

  return (
    <div className="app">
      <div className="wrap-list-container">
        <ListContainer packets={packets} />
      </div>
      <div className="centre-analysis">
        <AnalysisBox handleAnalyse={handleAnalyse} />
      </div>
      <InfoContainer />
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
