import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState(``);
  const [language, setLanguage] = useState("javascript");

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  useEffect(() => {
    prism.highlightAll();
  }, [code, language]);

  async function reviewCode() {
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URL || "https://ai-code-reviewer-and-dsa-guide.onrender.com";
      
      console.log("Using API URL:", API_URL); // Debugging log
  
      const response = await axios.post(`${API_URL}/ai/get-review`, {
        code,
        language,
      });
  
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Error fetching review. Please try again.");
    }
  }
  

  return (
    <>
      <header className="app-header" >
        <h1>
          AI Code Reviewer and DSA Guide
        </h1>
      </header>

      <main>
        <div className="left">
          <div className="code">
            <div className="language-selector">
              <select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  setReview("");
                }}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
              </select>
            </div>

            <Editor
              value={code}
              onValueChange={handleCodeChange}
              highlight={(code) => {
                if (!prism.languages[language]) {
                  console.warn(
                    `Warning: Selected language '${language}' is not recognized. Falling back to plain text.`
                  );
                  return code;
                }
                try {
                  return prism.highlight(code, prism.languages[language], language);
                } catch (error) {
                  console.error("Syntax highlighting error:", error);
                  return code;
                }
              }}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                color: code ? "#fff" : "#888",
              }}
              placeholder="Write your code..."
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>

        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
