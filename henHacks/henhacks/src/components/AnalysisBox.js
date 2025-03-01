import Loading from "./Loading";

function AnalysisBox({
  handleAnalyse,
  loading,
  setLoading,
  output,
  setOutput,
}) {
  return (
    <>
      <button
        className="analyse-button"
        onClick={() => handleAnalyse("What are femboys?")}
      >
        Analyse
      </button>
      <div className="output-box">{loading ? <Loading /> : output}</div>
    </>
  );
}

export default AnalysisBox;
