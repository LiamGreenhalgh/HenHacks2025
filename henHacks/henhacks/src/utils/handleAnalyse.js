import { GoogleGenerativeAI } from "@google/generative-ai";

async function handleAnalyse(txt, setLoading, setOutput) {
  setLoading(true);
  const genAI = new GoogleGenerativeAI(`${process.env.REACT_APP_API_KEY}`);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent(txt);
  setLoading(false);
  setOutput(() => result.response.text());
}

export default handleAnalyse;
