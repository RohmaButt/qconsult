"use client";
import React, { useState, useEffect } from "react";
import ReactCard from "../ReactCard";
import "./style.css";

//https://dev.to/shantanu_jana/automatic-image-slideshow-in-html-css-26jl
//https://codepen.io/fghty/pen/VwWPRwX

export default function () {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = () => {
    setSlideIndex((prevIndex) => (prevIndex % 4) + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(showSlides, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-main-container">
      <div className="slider-wrapper">
        <div className="slideshow-container">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`mySlides fade ${
                index === slideIndex ? "active" : "inactive"
              }`}
            >
              <ReactCard
                title="test"
                subTitle="subTitle"
                description="description"
                index={index}
                slideIndex={slideIndex}
              />
            </div>
          ))}
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          {[1, 2, 3, 4].map((index) => (
            <span
              key={index}
              className={`slider-dot ${index === slideIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
