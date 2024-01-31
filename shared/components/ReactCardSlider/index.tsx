"use client";
import React, { useState, useEffect } from "react";
import "./style.css";

//https://dev.to/shantanu_jana/automatic-image-slideshow-in-html-css-26jl
//https://codepen.io/fghty/pen/VwWPRwX

export default function () {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = () => {
    setSlideIndex((prevIndex) => (prevIndex % 3) + 1);
  };
  // console.log("slideIndex", slideIndex);

  useEffect(() => {
    const intervalId = setInterval(showSlides, 2000);
    // console.log("slideIndex", slideIndex, showSlides, intervalId);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log("slideIndex", slideIndex);
  }, [slideIndex]);

  return (
    <div className="slider-main-container">
      <div className="slider-wrapper">
        <div className="slideshow-container">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`mySlides fade ${
                index === slideIndex ? "active" : "inactive"
              }`}
            >
              <img
                src={`${
                  index === 1
                    ? "/Images/images/blackwhite_1.jpg"
                    : index === 2
                    ? "/Images/images/blackwhite_0.jpg"
                    : "/Images/images/blackwhite_3.webp"
                }`}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  display: index != slideIndex ? "none" : "block",
                }}
              />
              <div className="text">Caption {index}</div>
            </div>
          ))}
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          {[1, 2, 3].map((index) => (
            <span
              key={index}
              className={`dot ${index === slideIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
{
  /* <img src="/Images/images/computer.jpg" />
        <img src="/Images/images/hand-touching-symbols.jpg" />
        <img src="/Images/images/data-analysis.jpg" />
        <img src="/Images/images/artificial-intelligence.jpg" /> */
}

//  <div className="container">
//       <div className="slider-wrapper">
//         <div className="img1">
//           <div className="line">
//             <h1 className="lineUp">
//               Consulting <br />
//             </h1>
//           </div>
//         </div>
//         <div className="img2" />
//         <div className="img3" />
//         <div className="img4" />
//       </div>
//       <div>
//         <span className="dot"></span>
//         <span className="dot"></span>
//         <span className="dot"></span>
//       </div>
//     </div>
