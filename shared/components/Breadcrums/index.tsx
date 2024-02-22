"use client";
import React from "react";
import BreadCrumCard from "../BreadCrumCard";
import BreadCrumCardProps from "@/shared/types/SharedTypes";
import { usePathname } from "next/navigation";
import "./style.css";

const Breadcrums: React.FunctionComponent<BreadCrumCardProps> = ({
  title,
  image,
  description0,
  description1,
  description2,
  blue_color0,
  blue_color1,
  blue_color2,
}) => {
  const route = usePathname();

  return (
    <div
      className="breadcrum-wrapper"
      style={{ marginTop: route === "/contact" ? "38%" : "11%" }}
    >
      <div className="slideshow-container">
        <BreadCrumCard
          title={title}
          image={image}
          description0={description0}
          description1={description1}
          description2={description2}
          blue_color0={blue_color0}
          blue_color1={blue_color1}
          blue_color2={blue_color2}
        />
      </div>
    </div>
  );
};

export default Breadcrums;
