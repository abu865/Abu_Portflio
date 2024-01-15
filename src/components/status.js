import React from "react";
import { stats } from "../data";
import parse from 'html-react-parser';
import "../components/status.css";
const Status = () => {
  return (
    <div  className="Status__wrapper">
      {stats.map(({ no, title },index) => {
        return (
          <div className="info__item stats__box" key={index}>
            <h3 >{no}</h3>
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Status;
