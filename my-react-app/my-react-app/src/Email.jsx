import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h2 className="mb-3">Email Form</h2>

        <label htmlFor="email" className="form-label">
          Email
        </label>

        <input
          id="email"
          type="email"
          className="form-control"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <h5 className="mt-3">
          Entered Email: {email}
        </h5>
      </div>
    </div>
  );
};

export default Email;