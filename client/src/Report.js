import React from "react";
import "./Report.css";
import { Link, withRouter } from "react-router-dom";

function Report() {
  return (
    <div className="container-report">
      <div className="report-header">
        <p>
          혜경님의 이번달은 <strong>빠른 식사</strong> 횟수가
          <br />
          지난달 대비 <strong>5회 증가</strong> 했습니다.
        </p>
      </div>
      <div className="report-box-wrap">
        <div className="report-box">
          <p>
            오늘까지 <span className="red">빠른 식사는 7회</span>
            <br />
            <span className="green">적절한 식사는 10회</span>입니다.
          </p>
          <div className="divider"></div>
          <p className="desc">빠른 식사 후, '기분이 좋았어요'는 5회</p>
          <p className="desc">'기분이 별로에요'는 10회입니다.</p>
        </div>
      </div>
      <div className="report-box">
        <h4>식사별 평균 소요 시간</h4>
        <p className="desc">
          나의 식사시간을 바른다노 사용자 평균과 비교해보세요.
        </p>
        <div className="divider"></div>
        <img src="/images/report.png" alt="report" />
      </div>
      <div className="report-box">
        <h4>이번 달 내가 먹은 음식</h4>
        <div className="divider"></div>
        <div className="thumb-wrap">
          <div className="thumb-item">
            <img src="/images/thumb_01.jpg" alt="report" />
            <p className="caption">잘했어요 :)</p>
          </div>
          <div className="thumb-item">
            <img src="/images/thumb_02.jpg" alt="report" />
          </div>
          <div className="thumb-item">
            <img src="/images/thumb_03.jpg" alt="report" />
            <p className="caption">잘했어요 :)</p>
          </div>
          <div className="thumb-item">
            <img src="/images/thumb_04.jpg" alt="report" />
            <p className="caption">잘했어요 :)</p>
          </div>
          <div className="thumb-item">
            <img src="/images/thumb_05.jpg" alt="report" />
          </div>
          <div className="thumb-item">
            <img src="/images/thumb_06.jpg" alt="report" />
          </div>
          <div className="thumb-item">
            <img src="/images/thumb_07.jpg" alt="report" />
            <p className="caption">잘했어요 :)</p>
          </div>
          <div className="thumb-item">
            <img src="/images/thumb_08.jpg" alt="report" />
          </div>
          <div className="thumb-item">
            <img src="/images/thumb_09.jpg" alt="report" />
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="sticky">홈으로</div>
      </Link>
    </div>
  );
}

export default withRouter(Report);
