import React, { useState } from "react";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";
import Title from "./components/Title";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./components/ImagePreview";
import "./components/Sticky.css";

let model, webcam, labelContainer, maxPredictions;
const URL = "/";

function Home() {
  const [dataUri, setDataUri] = useState("");

  async function handleTakePhoto(dataUri) {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await window.tmImage.load(modelURL, metadataURL);
    console.log(model.predict);
    maxPredictions = model.getTotalClasses();

    await setDataUri(dataUri);

    async function predict(dataUri) {
      const prediction = await model.predict(dataUri);
      let maxVal = 0;
      let foodName = "";
      for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability > maxVal) {
          maxVal = prediction[i].probability;
          foodName = prediction[i].className;
        }
      }
      console.log(foodName);
      window.foodName = foodName;
    }

    await predict("http://localhost:3000/images/shh.png");
  }

  const isFullscreen = false;

  window.foodName = "샐러드";

  function handleChange(e) {
    window.foodName = e.target.value;
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
              defaultValue={window.foodName}
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
      <Link to="/setting">
        <div className="sticky">다음</div>
      </Link>
    </div>
  );
}

export default withRouter(Home);
