import React from "react";
import "./Menu.css";
import Title from "./components/Title";
import Sticky from "./components/Sticky";

function Menu() {
  return (
    <div className="container-menu">
      <Title text="STEP 1: 메뉴 선택" />
      <div className="select-photo"></div>
      <select value="아침">
        <option value="아침">아침</option>
        <option value="점심">점심</option>
        <option value="저녁">저녁</option>
      </select>
      <input type="text" value="샐러드"></input>
      <p className="helper-text">
        해당 메뉴가 아닐 경우 메뉴명을 눌러 수정이 가능합니다
      </p>
      <Sticky />
    </div>
  );
}

export default Menu;
