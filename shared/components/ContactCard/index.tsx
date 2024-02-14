import React from "react";
import "./style.css";

interface ContactCardProps {
  contactCardImg?: string;
  contactCardTitle?: string;
  contactCardEmail?: string;
}

export const ContactCard: React.FunctionComponent<ContactCardProps> = ({
  contactCardTitle,
  contactCardImg,
  contactCardEmail,
}) => {
  return (
    <div className="flexcard">
      <img src={contactCardImg}></img>
      <a href={contactCardEmail}>
        <div className="flex card-flex flexcardTitle">{contactCardTitle}</div>
        <div className="flex card-flex flexcardText">{contactCardTitle}</div>
      </a>
    </div>
    // <div className="contactCard">
    //   <img src={contactCardImg}></img>
    //   <div className="contactCardTitle">{contactCardTitle}</div>
    //   <a
    //     href={`mailto:${contactCardEmail}?subject=${encodeURIComponent(
    //       "subject"
    //     )}&body=${encodeURIComponent("body")}`}
    //   >
    //     {contactCardEmail}
    //   </a>
    // </div>
  );
};
