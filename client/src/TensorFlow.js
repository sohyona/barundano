import React, { useEffect, useState } from "react";
import "./TensorFlow.css";
import { Link, withRouter } from "react-router-dom";
import Title from "./components/Title";

let model, webcam, labelContainer, maxPredictions;
const URL = "/";

const TensorFlow = () => {
  const [image, setImage] = useState(false);
  const [food, setFood] = useState("");

  async function init() {
    window.playVideo = true;
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to window.tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "window.tmImage" object to your window (window.window.tmImage)
    model = await window.tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new window.tmImage.Webcam(375, 375, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);
    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      // and class labels
      labelContainer.appendChild(document.createElement("div"));
    }
  }
  async function loop() {
    if (window.playVideo) {
      webcam.update(); // update the webcam frame
      window.requestAnimationFrame(loop);
    } else {
      setImage(true);
      await predict();
    }
  }

  function takePhoto() {
    window.playVideo = false;
  }

  // run the webcam image through the image model
  async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);

    let maxVal = 0;
    let foodName = "";
    for (let i = 0; i < maxPredictions; i++) {
      if (prediction[i].probability > maxVal) {
        maxVal = prediction[i].probability;
        foodName = prediction[i].className;
      }
    }

    window.foodName = foodName;
    setFood(foodName);
  }

  function handleChange(e) {
    setFood(e.target.value);
    window.foodName = e.target.value;
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="container-home">
      <Title text="STEP 1: 메뉴 선택" />
      <div className="photo-frame">
        <div id="webcam-container"></div>
        <div id="label-container"></div>

        {image ? (
          <div>
            <input
              className="food"
              type="text"
              defaultValue={food}
              onChange={handleChange}
            />
            <p className="helper-text">
              해당 메뉴가 아닐 경우 메뉴명을 눌러 수정이 가능합니다
            </p>
            <Link to="/setting">
              <div className="sticky">다음</div>
            </Link>
          </div>
        ) : (
          <div onClick={takePhoto} className="camera-button">
            <div className="inner"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(TensorFlow);
