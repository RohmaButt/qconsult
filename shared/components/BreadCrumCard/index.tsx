import React from "react";
import BreadCrumCardProps from "@/shared/types/SharedTypes";
import "./style.css";

const BreadCrumCard: React.FunctionComponent<BreadCrumCardProps> = ({
  title,
  image,
  description0,
  description1,
  description2,
  blue_color0,
  blue_color1,
  blue_color2,
}) => (
  <div className="breadcrum-card">
    <img alt="" src={image} />
    <div className="breadcrum">
      <div className="breadcrum-container">
        <h1>{title}</h1>
        <p>
          <span
            className={
              blue_color0 === true ? "breadcrum-blue-colored-text" : ""
            }
          >
            {description0}
          </span>
          <span
            className={
              blue_color1 === true ? "breadcrum-blue-colored-text" : ""
            }
          >
            {description1}
          </span>
          <span
            className={
              blue_color2 === true ? "breadcrum-blue-colored-text" : ""
            }
          >
            {description2}
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default BreadCrumCard;
