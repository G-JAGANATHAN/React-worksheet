import { useState } from "react";

const Student = () => {
  const [Studentname, setStudentName] = useState("");

  return (
    <div>
      <label>Student Name: </label>

      <input
        type="text"
        value={Studentname}
        onChange={(event) => setStudentName(event.target.value)}
      />

      <h2>You entered: {Studentname}</h2>
    </div>
  );
};

export default Student;