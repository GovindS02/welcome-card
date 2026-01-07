import React from "react";

import image from "./images/react.jpg";

function App() {
  console.log("React app started");

  let yourName = "John Doe";

  return (
    <div
      className="card text-center shadow"
      style={{ width: "22rem", margin: "50px auto" }}
    >
      <div className="card-body">
        <h3
          className="card-title"
          style={{ color: "red", fontWeight: "bold" }}
        >
          Welcome Card
        </h3>

        <p className="card-text fs-5">
          Welcome to React Learning, <strong>{yourName}</strong>
        </p>

        {/* Internal Image */}
        <img
          src={image}
          className="img-fluid rounded mb-3"
          alt="React Logo"
          style={{ width: "200px" }}
        />

        {/* External Image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className="img-fluid rounded mb-3"
          alt="React Online"
          style={{ width: "200px" }}
        />

        <p className="text-muted fw-semibold">
          This is your first card with images and styles!
        </p>
      </div>
    </div>
  );
}

export default App;
