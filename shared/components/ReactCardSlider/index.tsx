"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import Consulting from "../Consulting";

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
              <img
                src={`${
                  index === 1
                    ? "/Images/images/blackwhite_1.jpg"
                    : index === 2
                    ? "/Images/images/blackwhite_0.jpg"
                    : index === 3
                    ? "/Images/images/blackwhite_3.webp"
                    : "/Images/images/blackwhite_4.webp"
                }`}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  display: index != slideIndex ? "none" : "block",
                }}
              />
              {/* {index === 1 ? (
                <Consulting
                  title="test"
                  subTitle="subTitle"
                  description="description"
                />
              ) : null} */}
            </div>
          ))}
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          {[1, 2, 3, 4].map((index) => (
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
