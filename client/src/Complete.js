import React from "react";
import "./Complete.css";
import Title from "./components/Title";
import { Link } from "react-router-dom";
import "./components/Sticky.css";

function Complete() {
  return (
    <div className="container-report">
      <Title text="목표한 시간에 맞춰 천천히 먹기 성공!" />
      <div className="food">
        <div className="box">
          <strong>총 식사시간</strong> {window.minute}분 {window.second}초<br />
          <strong>아침</strong> {window.foodName}
        </div>
      </div>
      <div className="box">
        <strong>누구와 식사 하셨나요?</strong>
        <br />
        <span>혼자</span> <span>함께</span>
      </div>
      <div className="box">
        <strong>식사하는 동안 기분은 어떠셨나요?</strong>
        <br />
        <div>별로에요</div>
        <div>괜찮아요</div>
        <div>좋아요</div>
      </div>
      <Link to="/report">
        <div className="sticky">식사종료</div>
      </Link>
    </div>
  );
}

export default Complete;
