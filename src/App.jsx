import "./App.css";
import $ from "jquery";
import { marked } from "marked";

function App() {
  marked.setOptions({
    breaks: true
  });
  function typing() {
    $("#previewer").html(marked($("#editor").val()));
  }
  return (
    <>
      <main className="min-vh-100" style={{ backgroundColor: "#87b4b4" }}>
        <div className="container p-5 d-flex flex-column align-items-center">
          <div className="editorContainer mb-2 w-100 px-md-5">
            <h5
              className="shadow py-2 px-2 mb-0"
              style={{ backgroundColor: "#4aa3a3" }}
            >
              Editor
            </h5>
            <textarea
              onChange={typing}
              style={{ backgroundColor: "#c0d8d8" }}
              className="w-100 h-100 fs-5"
              rows="10"
              name=""
              id="editor"
            ></textarea>
          </div>
          <div className="previewerContainer w-100">
            <h5
              className="shadow py-2 px-2  mb-0"
              style={{ backgroundColor: "#4aa3a3" }}
            >
              Previewer
            </h5>
            <div
              style={{ backgroundColor: "#c0d8d8", minHeight: "200px" }}
              className="w-100 p-1 fs-5"
              name=""
              id="previewer"
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
