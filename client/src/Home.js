import React from "react";
import "./Home.css";
import Title from "./components/Title";
import Sticky from "./components/Sticky";

function Home() {
  return (
    <div className="container-home">
      <Title text="STEP 1: 메뉴 선택" />
      <div className="select-photo">
        사진을 촬영하면 음식을 자동으로 인식합니다.
      </div>
      <Sticky />
    </div>
  );
}

export default Home;
