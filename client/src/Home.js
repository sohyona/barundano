import React, { useState } from "react";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";
import "react-html5-camera-photo/build/css/index.css";

function Home() {
  return (
    <div className="container-home">
      <img src="/images/template.png" />
      <div className="box">
        <Link to="/report">
          <p className="title">
            천천히 먹기 다짐
            <img src="/images/list_arrow.png" alt="arrow" />
          </p>
        </Link>
        {window.brunchImage ? (
          <div className="meal-thumb-wrap">
            <div className="meal-thumb">
              <div className="inner breakfast"></div>
              <p className="meal-label">
                <strong>아침</strong>
                <br />
                삼겹살 40분
              </p>
            </div>
            <div className="meal-thumb">
              <div className="inner lunch"></div>
              <p className="meal-label">
                <strong>점심</strong>
                <br />
                샐러드 30분
              </p>
            </div>
            <div className="meal-thumb">
              <div className="inner">
                <img src="/images/camera.png" alt="camera" />
              </div>
              <p className="meal-label">
                <strong>저녁</strong>
                <br />
                등록해주세요
              </p>
            </div>
          </div>
        ) : (
          <div className="meal-thumb-wrap">
            <div className="meal-thumb">
              <div className="inner breakfast"></div>
              <p className="meal-label">
                <strong>아침</strong>
                <br />
                삼겹살 40분
              </p>
            </div>
            <div className="meal-thumb">
              <Link to="/camera">
                <div
                  className="inner"
                  onClick={() => {
                    window.brunchImage = true;
                  }}
                >
                  <img src="/images/camera.png" alt="camera" />
                </div>
                <p className="meal-label">
                  <strong>점심</strong>
                  <br />
                  등록해주세요
                </p>
              </Link>
            </div>
            <div className="meal-thumb">
              <div className="inner">
                <img src="/images/camera.png" alt="camera" />
              </div>
              <p className="meal-label">
                <strong>저녁</strong>
                <br />
                등록해주세요
              </p>
            </div>
          </div>
        )}
      </div>
      <footer>
        <img src="/images/footer.png" alt="footer" />
      </footer>
    </div>
  );
}

export default withRouter(Home);
