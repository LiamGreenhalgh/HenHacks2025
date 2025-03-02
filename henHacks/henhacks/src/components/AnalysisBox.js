import { useState } from "react";
import Loading from "./Loading";

function AnalysisBox({
  handleAnalyse,
}) {

  const [output, setOutput] = useState("hello world");
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
          handleAnalyse("What are femboys?", setLoading, setOutput)
        }
      >
        Analyse
      </div>
      <div className="output-box">
        <div className="output">
        {loading ? <Loading /> : output}
        </div>
      </div>

      <div className="prompt-container">
        <div className="prompt-entry">
          <textarea
            placeholder="type something"
            className="entry"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
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
