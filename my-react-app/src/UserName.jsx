import { useState } from "react";

const UserName = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <h2>Hello, {name}</h2>
    </div>
  );
};

export default UserName;