import React from "react";
import "./style.css";
import BreadCrumCardProps from "@/shared/types/SharedTypes";

const BreadCrumCard: React.FunctionComponent<BreadCrumCardProps> = ({
  title,
  description0,
  description1,
  description2,
}) => (
  <>
    <img
      src="/Images/images/img17.jpg"
      style={{
        width: "100%",
      }}
    />
    <div className="breadcrum">
      <div className="breadcrum-container">
        <h1>{title}</h1>
        <p>
          <span className="breadcrum-blue-colored-text"> {description0} </span>
          {description1}
          <span className="breadcrum-blue-colored-text"> {description2} </span>
        </p>
      </div>
    </div>
  </>
);

export default BreadCrumCard;
