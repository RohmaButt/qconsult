import React from "react";
import "./style.css";

interface ContentCardProps {
  flexcardTitle?: string;
  flexcardText?: string;
}

export const ContentCard: React.FunctionComponent<ContentCardProps> = ({
  flexcardTitle,
  flexcardText,
}) => {
  return (
    <div className="flexcard flexcardGreen">
      <div className="flex card-flex flexcardTitle">{flexcardTitle}</div>
      <div className="flex card-flex flexcardText">{flexcardText}</div>
    </div>
  );
};
