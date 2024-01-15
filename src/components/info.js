import React from "react";
import { personalInfo } from "../data";
const Info = () => {
  return (
    <div>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
            <span></span>
          </li>
        );
      })}
    </div>
  );
};
export default Info;
