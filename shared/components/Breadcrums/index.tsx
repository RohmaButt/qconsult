"use client";
import React from "react";
import BreadCrumCard from "../BreadCrumCard";
import BreadCrumCardProps from "@/shared/types/SharedTypes";
import "./style.css";

const Breadcrums: React.FunctionComponent<BreadCrumCardProps> = ({
  title,
  description0,
  description1,
}) => {
  return (
    <div className="slider-main-container">
      <div className="slider-wrapper">
        <div className="slideshow-container">
          <div className="mySlides fade active">
            <BreadCrumCard
              title={title}
              description0={description0}
              description1={description1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrums;
