import { useState } from "react";

const ShowMessage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Show / Hide
      </button>

      {show && <p>Hello! Welcome to React.</p>}
    </div>
  );
};

export default ShowMessage;