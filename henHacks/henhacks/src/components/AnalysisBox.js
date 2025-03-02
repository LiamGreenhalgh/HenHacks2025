import { useEffect, useState } from "react";
import Loading from "./Loading";

function AnalysisBox({
  handleAnalyse,
  packets
}) {
  
  useEffect(() => {
    console.log("Packets updated:", packets);
  }, [packets]);

  const [output, setOutput] = useState("Your query will be answered shortly!");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleEnterPrompt(txt) {
    handleAnalyse(txt, setLoading, setOutput);
    setInputValue(" ");
  }

  return (
    <div className="analysis-container">
      <div
        className="analyse-button"
        onClick={() =>
          handleAnalyse(
            `Can you analyze the following readings, and tell me if there is anything malicious ${JSON.stringify(
              packets,
              null,
              2
            )}`,
            setLoading,
            setOutput
          )
        }
      >
        Analyse
      </div>
      <div className="output-box">
        <div className="output">{loading ? <Loading /> : output}</div>
      </div>

      <div className="prompt-container">
        <div className="prompt-entry">
          <textarea
            placeholder="Ask anything..."
            className="entry"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEnterPrompt(inputValue);
              }
            }}
          ></textarea>
          <button
            className="submit-btn"
            onClick={() => handleEnterPrompt(inputValue)}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnalysisBox;
