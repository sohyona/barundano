import React, { useState, useEffect, useInterval } from "react";
import { Link } from "react-router-dom";
import Title from './components/Title';
import "./Timer.css";
import "./components/Sticky.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      <Title text={`목표시간: ${window.timer}분`} />
      <div className="timer-graphic">
        <CircularProgressbar
          maxValue={window.timer * 60}
          value={minute * 60 + second}
          text={`
          ${formatter(minute)}:${formatter(second)}`}
          styles={buildStyles({
            pathColor: `#f86767`,
            textColor: "#f86767",
            trailColor: "#eaeaea"
          })}
        />{" "}
      </div>
      <p>
        음식을 천천히 씹으며 타이머가 울릴 때까지
        <br />
        먹을 수 있도록 노력해보세요!
      </p>

      <Link to="/complete">
        <div className="sticky">식사종료</div>
      </Link>
    </div>
  );
}

export default Timer;
