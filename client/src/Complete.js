import React, { useState, useEffect } from "react";
import "./Complete.css";
import Title from "./components/Title";
import { Link } from "react-router-dom";
import "./components/Sticky.css";
import axios from "axios";

// const API_URL = "http://192.168.43.238:8000";
const API_URL = "https://django-barun.herokuapp.com";

function formatter(time) {
  if (time < 10) {
    return "0" + time.toString();
  }
  return time;
}

function Complete() {
  const [data, setData] = useState({});
  const [titleText, setTitleText] = useState("");

  useEffect(() => {
    window.minute = window.minute ? window.minute : 0;

    if (window.minute < window.timer) {
      setTitleText("목표한 시간보다 빨리 먹었어요.");
    } else {
      setTitleText("목표한 시간에 맞춰 잘 먹었어요!");
    }

    setData({
      ...data,
      user: "dano",
      real_meal_time: `00:${formatter(window.minute)}`
    });
  }, []);

  async function handleSubmit() {
    console.log(data);
    await axios.post(`${API_URL}/barundano/mealregist/`, data).then(res => {
      console.log(res.data);
    });
  }

  return (
    <div className="container-complete">
      <Title text={titleText} />
      <div className="food">
        <div className="box">
          <strong>점심식사</strong> {window.foodName}
          <br />
          <strong>목표 식사시간 </strong> {formatter(window.timer)}분
          <br />
          <strong>총 식사시간 </strong>
          {window.minute + 1}분
        </div>
      </div>
      <div className="box">
        <strong>누구와 식사 하셨나요?</strong>
        <br />
        <div
          onClick={() => {
            setData({ ...data, eat_together: 1 });
          }}
          className={data.eat_together === 1 ? "selected" : ""}
        >
          <div className="icon-wrap">
            <img src="/images/emoji_2.png" alt="emoji" />
          </div>
          <p>혼자</p>
        </div>
        <div
          onClick={() => {
            setData({ ...data, eat_together: 2 });
          }}
          className={data.eat_together === 2 ? "selected" : ""}
        >
          <div className="icon-wrap">
            <img src="/images/emoji_2.png" alt="emoji" />
            <img src="/images/emoji_2.png" alt="emoji" />
          </div>
          <p>함께</p>
        </div>
      </div>
      <div className="box">
        <strong>식사하는 동안 기분은 어떠셨나요?</strong>
        <br />
        <div className="emoji-wrap">
          <div
            onClick={() => {
              setData({ ...data, feeling: 1 });
            }}
            className={data.feeling === 1 ? "selected" : ""}
          >
            <img src="/images/emoji_1.png" alt="emoji" />
            <p>좋아요</p>
          </div>
          <div
            onClick={() => {
              setData({ ...data, feeling: 2 });
            }}
            className={data.feeling === 2 ? "selected" : ""}
          >
            <img src="/images/emoji_2.png" alt="emoji" />
            <p>괜찮아요</p>
          </div>
          <div
            onClick={() => {
              setData({ ...data, feeling: 3 });
            }}
            className={data.feeling === 3 ? "selected" : ""}
          >
            <img src="/images/emoji_3.png" alt="emoji" />
            <p>별로에요</p>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="sticky" onClick={handleSubmit}>
          확인
        </div>
      </Link>
    </div>
  );
}

export default Complete;
