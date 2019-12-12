import React, { useEffect, useState } from "react";
import "./Setting.css";
import Title from "./components/Title";
import Sticky from "./components/Sticky";
import axios from "axios";

const API_URL = "http://localhost:8000";

function Setting() {
  const [timer, setTimer] = useState(0);

  const dispatch = async () => {
    const data = { user: "dano", meal_type: 1, food: "샐러드" };
    const response = await axios
      .post(`${API_URL}/barundano/timesuggest/`, data)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });

    console.log(response);

    setTimer(response.msg);
  };

  useEffect(() => {
    dispatch();

    // axios({
    //   method: "post",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json"
    //   },
    //   url: `${API_URL}/barundano/timesuggest/`,
    //   data
    // }).then(res => {
    //   console.log(res);
    // });

    setTimer(30);
  }, []);

  return (
    <div className="container-setting">
      asfasfsadf
      <Title text="STEP 2: 식사 시간 설정" />
      식사시간
      <select defaultValue={timer}>
        <option value={timer}>{timer}분</option>
      </select>
      <p>각 메뉴에 따라 적절한 식사시간을 제안해드립니다.</p>
      <Sticky path="/timer" />
    </div>
  );
}

export default Setting;
