import React from "react";
import "./style.css";

interface StaticCardProps {
  flexcardTitle?: string;
  flexcardText?: string;
  flexcardImg?: string;
  styles?: object;
}

export const StaticCard: React.FunctionComponent<StaticCardProps> = ({
  flexcardTitle,
  flexcardText,
  styles,
  flexcardImg,
}) => {
  return (
    <div className="staticflexcard" style={styles}>
      {flexcardImg ? (
        <img src={flexcardImg} width={80} height={80}></img>
      ) : null}
      <div className="flex static-card-flex flexcardTitle">{flexcardTitle}</div>
      <div className="flex static-card-flex flexcardText">{flexcardText}</div>
    </div>
  );
};
