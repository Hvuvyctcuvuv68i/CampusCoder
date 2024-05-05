import React, { useState } from "react";
import "../Styles/Editor.css";

const Editor = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const run = () => {
    const output = document.getElementById("output");
    if (output) {
      output.contentDocument.body.innerHTML = `${htmlCode}<style>${cssCode}</style>`;
      output.contentWindow.eval(jsCode);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="pane">
          HTML
          <button onClick={run} className="clkon">
            Run
          </button>
        </div>
        <textarea
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        ></textarea>

        <label>
          <i className="fab fa-css3-alt"></i> CSS
        </label>
        <textarea
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
        ></textarea>

        <label>
          <i className="fab fa-js-square"></i> JAVASCRIPT
        </label>
        <textarea
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
        ></textarea>
      </div>
      <div className="right">
        <label>
          <i className="fas fa-play"></i> Output
        </label>
        <iframe id="output"></iframe>
      </div>
    </div>
  );
};

export default Editor;
