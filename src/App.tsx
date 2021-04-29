import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [mytimes, setMyTimes] = useState<string>("");
  const times = () => {
    let x = 15; //minutes interval
    let times = []; // time array
    let tt = 540; // start time 540 / 60 = 9 hours
    let ap = ["AM", "PM"]; // AM-PM

    // 15:30 + 90
    //15*60 + 30 = 930 = thats 15:30 in time
    //loop to increment the time and push results in array
    for (let i = 0; tt < 18 * 60; i++) {
      let hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      let mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] = ("0" + (hh % 24)).slice(-2) + ":" + ("0" + mm).slice(-2);
      tt = tt + x;
    }
    const copy = [...times];
    const found = copy.indexOf(skipTimes().start);
    copy.splice(found, skipTimes().end);
    console.log(copy);
    return copy;
  };
  console.log(mytimes);
  const skipTimes = () => {
    let x = 15; //minutes interval
    let times = []; // time array
    let tt = 585; // start time 540 / 60 = 9 hours (585 = 9;45 with duration 30 min gonna be 10 :15)

    // Example start time - 15:30 +  duration of 90 = thats 17:00 oclock
    // so 15*60 + 30 = 930 = thats 15:30 in time , the time i start
    //loop to increment the time and push results in array

    for (let i = 0; tt < 615; i++) {
      //615 is 585+ duration(30min) ; and 585 comes from 585 = 9;45 (9*60+45)
      // 17 here is the result of start+duration time
      let hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      let mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] = ("0" + (hh % 24)).slice(-2) + ":" + ("0" + mm).slice(-2);
      tt = tt + x;
    }
    console.log(times, "skip");
    console.log(times.length); // how many arrays to delete after it !
    console.log(times[0]); // from where it starts splice start
    return { start: times[0], end: times.length };
  };

  return (
    <div className="App">
      <h1> Appointment APp</h1>
      {skipTimes().end}
      {times().map((el, index) => {
        return (
          <p key={index} onClick={() => setMyTimes(el)}>
            {el}
          </p>
        );
      })}
    </div>
  );
}

export default App;
