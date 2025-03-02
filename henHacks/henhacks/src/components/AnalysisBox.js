import Loading from "./Loading";

function AnalysisBox({
  handleAnalyse,
  loading,
  setLoading,
  output,
  setOutput
}) {
  return (
    <div className="analysis-container">
      <div
        className="analyse-button"
        onClick={() => handleAnalyse("What are femboys?", setLoading, setOutput)}
      >
        Analyse
      </div>
      <div className="output-box">{loading ? <Loading /> : output}</div>
    </div>
  );
}

export default AnalysisBox;
