import React, { useState, useEffect, useInterval } from "react";
import { Link } from "react-router-dom";
import Title from "./components/Title";
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
  const [minute, setMinute] = useState(4);
  const [second, setSecond] = useState(59);
  const [flash, setFlash] = useState(false);

  function startFlash(val) {
    if (val) {
      setInterval(() => {
        console.log(flash);
        setFlash(!flash);
      }, 100);
    }
  }

  useEffect(() => {
    let counter = setInterval(() => {
      console.log(minute, second);
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

  useEffect(() => {
    let flasher;
    if (minute % 5 === 0 && minute > 0 && second > 2) {
      console.log("i am here");
      clearInterval(flasher);
    }
    if (minute % 5 === 0 && minute > 0 && second === 0) {
      let counter=0;
      // startFlash(true);
      console.log("i am ...")
      flasher = setInterval(() => {
        console.log(flash);
        setFlash(!flash);
      }, 100);
    }
  })

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
