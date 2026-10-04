import React from "react";

const StudentData = (props) => {
  return (
    <div>
      <h2>Student Details </h2>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
    </div>
  );
};

export default StudentData;
