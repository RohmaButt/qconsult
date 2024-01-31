import React from "react";
import "./style.css";

interface inputParams {
  title: string;
  subTitle?: string;
  description?: string;
}
const Consulting: React.FunctionComponent<inputParams> = ({
  title,
  subTitle,
  description,
}) => (
  <div className="consulting">
    <div className="container">
      <div className="line">
        <h1 className="lineUp">
          {title} <br />
        </h1>
      </div>
      <div className="line">
        <p className="lineUp">
          {subTitle}
          <br />
          <br />
          {description} <br />
        </p>
      </div>
    </div>
  </div>
);

export default Consulting;
