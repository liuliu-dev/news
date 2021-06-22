import React, { useState } from "react";
import CalendarDisplay from "./CalendarDisplay.js";
import NewsBoard from "./NewsBoard.js";
import "./App.css";
import newsUrlComponent from "./newsUrlComponent.js";

function App() {
  const [newsDate, setDate] = useState(new Date());
  const [country, setCountry] = useState("us");
  const [source, setSource] = useState("associated-press");
  const [keyword, setKeyword] = useState("Coronavirus OR Covid-19 pandemic");
  return (
    <div className="App">
      <newsUrlComponent.Provider
        value={{
          newsDate,
          setDate,
          country,
          setCountry,
          source,
          setSource,
          keyword,
          setKeyword,
        }}
      >
        <CalendarDisplay />
        <input
          type="text"
          placeholder="Search News..."
          value={keyword}
          onChange={(userInput) => {
            setKeyword(userInput.target.value);
          }}
        ></input>
        <NewsBoard />
      </newsUrlComponent.Provider>
    </div>
  );
}

export default App;
