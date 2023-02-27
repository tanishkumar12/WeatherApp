import { useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import CardAnimated from "./UI/CardAnimated";


function App() {
  return (
    <div className="App">
      {/* <CardAnimated /> */}
      <Weather />
    </div>
  );
}

export default App;
