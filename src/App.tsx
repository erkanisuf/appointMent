import React, { useState } from "react";

import "./App.css";
import Main from "./components/Main";
import { avaibleTimes, stringTimeToMinutes } from "./utils/Functions";

function App() {
  console.log(stringTimeToMinutes("15:30"));

  const [timesToHide, setTimesToHide] = useState<string[]>([
    "10:30",
    "10:45",
    "11:00",
    "09:15",
  ]);

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <div style={{ height: "100px" }}></div>
      <Main />
      {/* {avaibleTimes(timesToHide).map((el, index) => {
        return (
          <p key={index} onClick={() => setTimesToHide([...timesToHide, el])}>
            {el}
          </p>
        );
      })} */}
    </div>
  );
}

export default App;
