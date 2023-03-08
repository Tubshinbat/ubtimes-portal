"use client";
import { useState } from "react";

export default ({ weather, rates }) => {
  const [weathers] = useState(weather && JSON.parse(weather).xml);
  const todayMongolia = () => {
    let month, day;
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let year = today.getFullYear();
    const arrayDate = today.toLocaleDateString().split("/");
    const stringDate = today.toString().split(" ");
    if (stringDate) {
      switch (stringDate[0]) {
        case "Sun":
          day = "Ням";
          break;
        case "Mon":
          day = "Даваа";
          break;
        case "Tue":
          day = "Мягмар";
          break;
        case "Wed":
          day = "Лхагва";
          break;
        case "Thu":
          day = "Пүрэв";
          break;
        case "Fri":
          day = "Баасан";
          break;
        case "Sat":
          day = "Бямба";
          break;
        default:
          day = "";
      }
    }

    month = arrayDate[0] + " сарын";

    return `${month} ${arrayDate[1]} , ${day}`;
  };

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar_container">
            <div className="header_boards">
              <div className="header_board">
                <div className="board-text">
                  <span>Улаанбаатар</span>

                  <img src="/images/sun.svg" />
                  {weathers &&
                    weathers.forecast5day &&
                    weathers.forecast5day[26].data.weather[0].temperatureDay
                      ._text}
                </div>
              </div>
              <div className="header_board">
                <div className="board-text">
                  <span>Валютын ханш</span>
                  <img src="/images/usa.jpg" />
                  {rates && rates[13].sellRate}
                </div>
              </div>
            </div>
            <div className="topbar_today">
              <i className={`far fa-calendar-alt `}></i>
              {todayMongolia()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
