function PromptContainer({
  inputValue,
  setInputValue,
  handleAnalyse,
  setLoading,
  setOutput,
}) {
  return (
    <div className="prompt-container">
      <div className="prompt-entry">
        <textarea
          placeholder="type something"
          className="entry"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.inputValue)}
        ></textarea>
        <button
          className="submit-btn"
          onClick={() => handleAnalyse(inputValue, setLoading, setOutput)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PromptContainer;
