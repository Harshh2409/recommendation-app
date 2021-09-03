import React from "react";
import "./styles.css";
import { useState } from "react";

const genres = {
  thrill: [
    { name: "Money heist", rating: "4/5" },
    { name: "stranger things", rating: "3.5/5" }
  ],

  comedy: [
    {
      name: "Friends",
      rating: "5/5"
    },
    {
      name: "The office",
      rating: "4.5/5"
    }
  ],
  action: [
    {
      name: "Bodyguard",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("thrill");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "Montserrat", color: "#818CF8" }}>
        {" "}
        Hey welcome to my recommendation app{" "}
      </h1>
      <hr />
      <h2 style={{ fontSize: "1.5rem", color: "#818CF8" }}>
        {" "}
        select a genre and see my recommendations{" "}
      </h2>

      <div>
        {Object.keys(genres).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              color: "#3730A3",
              margin: "1rem",
              borderRadius: "0.5rem",
              border: " solid 2px",
              padding: "0.4rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {genres[selectedGenre].map((series) => (
            <li
              key={series.name}
              style={{
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 1rem 2rem 7rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", color: "#818CF8" }}>
                {" "}
                {series.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {series.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
