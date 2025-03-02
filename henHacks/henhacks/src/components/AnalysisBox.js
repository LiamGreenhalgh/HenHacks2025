import { useState } from "react";
import Loading from "./Loading";

function AnalysisBox({
  handleAnalyse,
  loading,
  setLoading,
  output,
  setOutput
}) {

  const [inputValue, setInputValue] = useState("");

  function handleEnterPrompt(e) {
    handleAnalyse(e.target.value, setLoading, setOutput);
    setInputValue("");
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
      <div className="output-box">{loading ? <Loading /> : output}</div>

      <div className="prompt-container">
        <div className="prompt-entry">
          <textarea
            placeholder="type something"
            className="entry"
            value={inputValue}
            onChange={(e) => setInputValue(e)}
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
