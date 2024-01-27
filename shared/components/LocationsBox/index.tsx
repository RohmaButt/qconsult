import React from "react";
import "./style.css";
//https://codepen.io/hexagoncircle/pen/XWbWKwL
export default function () {
  return (
    <main className="page-content">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          child={card.child}
          button={card.button}
          detail={card.detail}
        />
      ))}
    </main>
  );
}

const cards = [
  {
    title: "Pakistan",
    child: "Lahore",
    detail: "+92 42 37182466-68 Plaza 8, Sector B, Phase V, DHA",
  },
  {
    title: "UAE",
    child: "Dubai",
    detail: "+971 (4) 27229960-98 Po Box 28458 Dubai Emirates",
  },
  {
    title: "United States",
    child: "",
    button: "Coming Soon",
  },
  {
    title: "Australia",
    child: "",
    button: "Coming Soon",
  },
];

interface cardType {
  title: string;
  child: string;
  detail?: string;
  button?: any;
}

const Card: React.FunctionComponent<cardType> = ({
  title,
  child,
  button,
  detail,
}) => (
  <div className="card">
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="child">{child}</p>
      <p className="child">{detail}</p>
      {button && <button className="btn">{button}</button>}
    </div>
  </div>
);
