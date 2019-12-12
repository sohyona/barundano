import React, { useEffect, useState } from "react";
import "./Setting.css";
import Title from "./components/Title";
import Sticky from "./components/Sticky";
import axios from "axios";

// const API_URL = "http://localhost:8000";
const API_URL = "http://192.168.43.238:8000";

function Setting() {
  const [timeOption, setTimeOption] = useState([]);

  const dispatch = async () => {
    const foodName = window.foodName || "샐러드";
    const data = { user: "dano", meal_type: 1, food: foodName };
    const response = await axios
      .post(`${API_URL}/barundano/timesuggest/`, data)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });

    const min = Number(response.msg);
    const max = 50;
    let timeRange = [];

    for (let i = min; i <= max; i += 5) {
      timeRange.push(i);
    }

    window.timer = timeRange[0];
    setTimeOption(timeRange);
  };

  useEffect(() => {
    dispatch();
  }, []);

  function handleOnChange(e) {
    window.timer = Number(e.target.value);
  }

  return (
    <div className="container-setting">
      <Title text="STEP 2: 식사 시간 설정" />
      <div className="box">
        <strong>식사 시간</strong>
        <select defaultValue={timeOption[0]} onChange={handleOnChange}>
          {timeOption.map(data => {
            return (
              <option value={data} key={data}>
                {data}분
              </option>
            );
          })}
        </select>
        <p className="desc">
          각 메뉴에 따라 적절한 식사시간을 제안해드립니다.
          <br />
          식사 시간은 조정이 가능하나
          <br />
          제안된 시간에 맞춰 식사하실 것을 권장합니다.
        </p>
      </div>
      <div className="box">
        <img src="/images/icon_food.png" alt="food" className="icon" />
        <p>왜 천천히 먹어야 할까요?</p>
      </div>
      <div className="box">
        <img src="/images/icon_time.png" alt="time" className="icon" />
        <p>식사시간은 어떤 기준으로 제안하나요?</p>
      </div>
      <Sticky path="/timer" />
    </div>
  );
}

export default Setting;
