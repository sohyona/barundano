import React from "react";
import "./Setting.css";
import Title from "./components/Title";
import Sticky from "./components/Sticky";

function Setting() {
  return (
    <div className="container-setting">
      <Title text="STEP 1: 메뉴 선택" />
      식사시간
      <select value="30">
        <option value="20">20분</option>
        <option value="25">25분</option>
        <option value="30">30분</option>
        <option value="35">35분</option>
        <option value="40">40분</option>
      </select>
      <p>각 메뉴에 따라 적절한 식사시간을 제안해드립니다.</p>
      <Sticky />
    </div>
  );
}

export default Setting;
