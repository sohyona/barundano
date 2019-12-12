import React from "react";
import "./Report.css";

function Report() {
  return (
    <div className="container-report">
      <div className="title">목표한 시간에 맞춰 천천히 먹기 성공!</div>
      <div className="food">
        <div>
          <strong>총 식사시간</strong> 38분 28초
        </div>
        <div>
          <strong>점심</strong> 김치찌개
        </div>
      </div>
      <div className="with">
        <strong>누구와 식사 하셨나요?</strong>
        <span>혼자</span> <span>함께</span>
      </div>
      <div className="with">
        <strong>식사하는 동안 기분은 어떠셨나요?</strong>
        <div>별로에요</div>
        <div>괜찮아요</div>
        <div>좋아요</div>
      </div>
    </div>
  );
}

export default Report;
