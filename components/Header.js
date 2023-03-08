"use client";
import base from "lib/base";
import Link from "next/link";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = ({ webInfo, menus, socialLinks, weather, rates }) => {
  const renderMenu = (categories, child = false, parentSlug = "") => {
    let myCategories = [];
    categories &&
      categories.map((el) => {
        myCategories.push(
          <li className={el.children.length > 0 && "dropMenu"}>
            <Link key={el._id} href={`/news/${el.slug}`} scroll={false}>
              {" "}
              {el.name}
            </Link>

            {el.children.length > 0 && !child ? (
              <ul className={`dropdownMenu`}>
                {renderMenu(el.children, true, el.slug)}
              </ul>
            ) : null}
          </li>
        );
      });

    return myCategories;
  };
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
  const [weathers] = useState(weather && JSON.parse(weather).xml);
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    // window.onscroll = () => {
    //   let header = document.querySelector(".main__header");
    //   let sticky = header.offsetTop;
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add(`headerSticky`);
    //   } else {
    //     header.classList.remove(`headerSticky`);
    //   }
    // };
  }, []);

  const handleSearch = () => {
    setSearchOpen((bf) => (bf === true ? false : true));
  };

  return (
    <>
      <header className="main__header">
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
        <div className="container">
          <div className="top_header">
            <div className="logo">
              <a href="/">
                <img
                  src={`${base.cdnUrl}/${webInfo.logo}`}
                  className="headerLogo"
                />
              </a>
            </div>
          </div>
        </div>

        <nav className="header_top_menu">
          <div className="container">
            <div className="top__header_menu">
              <MobileMenu
                info={webInfo}
                socialLinks={socialLinks}
                menus={menus}
              />
              <ul className={`headerMenu`}>{renderMenu(menus)}</ul>
              <div className="search__icon-box" onClick={() => handleSearch()}>
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`search__header_box ${
          searchOpen == false ? "displayNone" : "displayBlock"
        }`}
      >
        <div className="container">
          <form action="/search" className="search__header_form">
            <input name="s" type="text" placeholder="Мэдээллээс хайх... " />{" "}
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
