import React from "react";
import "./style.css";

interface CardProps {
  centralPaneTitle?: string;
  centralPaneCard0_Title?: string;
  centralPaneCard0_ImgURL?: string;
  centralPaneCard0_Text?: string;
  centralPaneCard1_Title?: string;
  centralPaneCard1_ImgURL?: string;
  centralPaneCard1_Text?: string;
  centralPaneCard2_Title?: string;
  centralPaneCard2_ImgURL?: string;
  centralPaneCard2_Text?: string;
}

export const CentralPaneCard: React.FunctionComponent<CardProps> = ({
  centralPaneTitle,
  centralPaneCard0_Title,
  centralPaneCard0_ImgURL,
  centralPaneCard0_Text,
  centralPaneCard1_Title,
  centralPaneCard1_ImgURL,
  centralPaneCard1_Text,
  centralPaneCard2_Title,
  centralPaneCard2_ImgURL,
  centralPaneCard2_Text,
}) => {
  return (
    <div className="flex flex-column">
      <h1>{centralPaneTitle}</h1>
      <h2>Why Us?</h2>
      <div className="flex flex-row">
        <img src={centralPaneCard0_ImgURL}></img>
        <h1>{centralPaneCard0_Title}</h1>
        <p>{centralPaneCard0_Text}</p>
      </div>
    </div>
  );
};
