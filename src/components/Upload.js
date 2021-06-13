import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import ImageGrid from "../components/ImageGrid";

function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  function changeHandler(e) {
    const types = ["image/png", "image/jpeg"];
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select appropriate file type");
    }
  }

  return (
    <div>
      <form>
          <label for="addBtn" ><div className="btn"><p>+</p></div></label>
        <input id="addBtn" style={{display: "none"}} type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div className="fileName">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} file={file} />}
          {/* {file && <ImageGrid />} */}
        </div>
      </form>
    </div>
  );
}

export default Upload;
