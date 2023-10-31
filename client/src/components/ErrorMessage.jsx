import React from "react";

function ErrorMessage({ message = "Internal Server Error" }) {
  return (
    <div className="container mt-5 pt-5 text-center">
      <h1>{message}</h1>
    </div>
  );
}

export default ErrorMessage;
