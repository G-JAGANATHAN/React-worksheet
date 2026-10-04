import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <label>Username: </label>

      <input
        id="username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <h2>Current username: {username}</h2>
    </div>
  );
};

export default Login;