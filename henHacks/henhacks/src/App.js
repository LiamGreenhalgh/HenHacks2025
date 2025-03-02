import { useState, memo, useRef, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import handleAnalyse from "./utils/handleAnalyse";
import AnalysisBox from "./components/AnalysisBox";
import InfoContainer from "./components/InfoContainer";
import ListContainer from "./components/ListContainer";
import "./App.css";

function App() {
  const [packets, setPackets] = useState([]);
  const [selected, setSelected] = useState(null)
  
  useEffect(() => {
    console.log(packets[selected]);
  }, [selected])

  useEffect(() => {
    axios
      .get("http://localhost:8000/packets")
      .then((data) => {
        console.log(data.data.packets);
        setPackets(data.data.packets);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <div className="wrap-list-container">
        <ListContainer packets={packets} selected={selected} setSelected={setSelected} />
      </div>
      <div className="centre-analysis">
        <AnalysisBox handleAnalyse={handleAnalyse} packets={packets} />
      </div>
      {selected !== null && packets.length > 0 ? (
        <InfoContainer
          pkt={packets[selected]}
          num={selected}
          time={Date.now()}
          appData="Placeholder"
        />
      ) : (
        <p>Loading...</p>
      )}
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
