import React from "react";
import "./style.css";

interface StaticCardProps {
  flexcardTitle?: string;
  flexcardText?: string;
  flexcardImg?: string;
  styles?: object;
  flexIsImageURL?: boolean;
  flexURLMessage?: string;
}

export const StaticCard: React.FunctionComponent<StaticCardProps> = ({
  flexcardTitle,
  flexcardText,
  styles,
  flexcardImg,
  flexIsImageURL,
  flexURLMessage,
}) => {
  return (
    <div
      className={
        flexIsImageURL === true
          ? "staticflexcard staticflexcard2"
          : "staticflexcard"
      }
      style={styles}
    >
      {flexcardImg ? (
        <img src={flexcardImg} width={80} height={80}></img>
      ) : null}
      {flexIsImageURL === true ? (
        <>
          <div className="flex static-card-flex flexcardTitle">
            {flexcardTitle}
          </div>
          <div className="flex static-card-flex flexcardText">
            {flexURLMessage}
          </div>
          <a
            href={`mailto:${flexcardText}?subject=${encodeURIComponent(
              "subject"
            )}&body=${encodeURIComponent("body")}`}
          >
            {flexcardText}
          </a>
        </>
      ) : (
        <>
          <div className="flex static-card-flex flexcardTitle">
            {flexcardTitle}
          </div>
          <div className="flex static-card-flex flexcardText">
            {flexcardText}
          </div>
        </>
      )}
    </div>
  );
};
