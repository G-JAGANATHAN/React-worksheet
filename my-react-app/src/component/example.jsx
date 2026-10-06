import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Example() {
  const [name, setName] = useState("");

  return (
    <div className="mb-3">
      <label className="form-label">UserName</label>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        className="form-control"
        onChange={(event) => setName(event.target.value)}
      />
      <h2>Hello, {name} Welcome to React</h2>
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}

export default Example;