import React from "react";
import "./style.css";

interface CardProps {
  flexcardTitle?: string;
  flexcardText?: string;
  flexcardImgHref?: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
  flexcardTitle,
  flexcardText,
  flexcardImgHref,
}) => {
  return (
    <div className="flexcard">
      <a href={flexcardImgHref}>
        <div className="flex card-flex flexcardTitle">{flexcardTitle}</div>
        <div className="flex card-flex flexcardText">{flexcardText}</div>
      </a>
    </div>
  );
};
