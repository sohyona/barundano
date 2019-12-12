import React, { useState } from "react";
import "./Home.css";
import { Redirect, withRouter } from "react-router-dom";
import Title from "./components/Title";
import Sticky from "./components/Sticky";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./components/ImagePreview";

function Home() {
  const [dataUri, setDataUri] = useState("");
  function handleTakePhoto(dataUri) {
    console.log("called");
    setDataUri(dataUri);
  }

  const isFullscreen = false;

  const [foodName, setFoodName] = useState("샐러드");

  function handleChange(e) {
    setFoodName(e.target.value);
  }

  return (
    <div className="container-home">
      <Title text="STEP 1: 메뉴 선택" />
      <div className="square-crop">
        {dataUri ? (
          <div className="photo-frame">
            <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
            <input
              className="food"
              type="text"
              value={foodName}
              onChange={handleChange}
            />
            <p className="helper-text">
              해당 메뉴가 아닐 경우 메뉴명을 눌러 수정이 가능합니다
            </p>
          </div>
        ) : (
          <div className="photo-frame">
            <Camera
              onTakePhoto={dataUri => {
                handleTakePhoto(dataUri);
              }}
            />
          </div>
        )}
      </div>
      <Sticky path="/setting" />
    </div>
  );
}

export default withRouter(Home);
