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
    const foodName = window.foodName || '샐러드';
    const data = { user: "dano", meal_type: 1, food: foodName };
    const response = await axios
      .post(`${API_URL}/barundano/timesuggest/`, data)
      .then(res => {
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
      식사시간
      <select defaultValue={timeOption[0]} onChange={handleOnChange}>
        {timeOption.map(data => {
          return <option value={data} key={data}>{data}분</option>;
        })}
      </select>
      <p>각 메뉴에 따라 적절한 식사시간을 제안해드립니다.</p>
      <Sticky path="/timer" />
    </div>
  );
}

export default Setting;
