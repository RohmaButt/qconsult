import React from "react";
import "./style.css";

interface CardProps {
  flexcardTitle?: string;
  flexcardText?: string;
  flexcardimgItem?: string;
  flexcardImgHref?: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
  flexcardTitle,
  flexcardText,
  flexcardimgItem,
  flexcardImgHref,
}) => {
  return (
    <div className="flexcard flexcardGreen">
      <a href={flexcardImgHref}>
        <div className="flex card-flex flexcardTitle">{flexcardTitle}</div>
        <div className="flex card-flex flexcardText">{flexcardText}</div>
      </a>
    </div>
  );
};
