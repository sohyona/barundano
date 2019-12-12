import React, { useEffect } from "react";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";
import Title from "./components/Title";

let model, webcam, labelContainer, maxPredictions;
const URL = "/";

const TensorFlow = () => {
  async function init() {
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
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }
  // run the webcam image through the image model
  async function predict() {
    const prediction = await model.predict(webcam.canvas);
    let maxVal = 0;
    let foodName = ''; 
    for (let i = 0; i < maxPredictions; i++) {
      if(prediction[i].probability > maxVal) {
        maxVal = prediction[i].probability;
        foodName = prediction[i].className;
      }
    }
    console.log(foodName);
    window.foodName = foodName;
  }

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="container-home">
      <Title text="STEP 1: 메뉴 선택" />
      <div id="webcam-container"></div>
      <div id="label-container"></div>
      <Link to="/setting">
        <div className="sticky">다음</div>
      </Link>
    </div>
  );
};

export default TensorFlow;
