import React, { useState, useEffect, useInterval } from "react";
import { Link } from "react-router-dom";
import "./Timer.css";
import "./components/Sticky.css";

function formatter(time) {
  if (time < 10) {
    return "0" + time.toString();
  }
  return time;
}

function Timer() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    let counter = setInterval(() => {
      if (second < 59) {
        setSecond(second + 1);
      } else {
        setSecond(0);
        setMinute(minute + 1);
      }
      window.minute = minute;
      window.second = second;
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  });

  return (
    <div className="container-timer">
      <div className={`blink ${flash ? "" : "hide"}`}></div>
      <div className="timer-graphic">
        <p>
          {formatter(minute)}:{formatter(second)}
        </p>
      </div>
      <Link to="/complete">
        <div className="sticky">식사종료</div>
      </Link>
    </div>
  );
}

export default Timer;
