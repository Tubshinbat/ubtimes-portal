"use client";
import base from "lib/base";
import Link from "next/link";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = ({ webInfo, menus, socialLinks, weather, rates }) => {
  const [weathers] = useState(weather && JSON.parse(weather).xml);

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

  return (
    <>
      <header className="main__header">
        <div className="container">
          <div className="top_header">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img
                    src={`${base.cdnUrl}/${webInfo.whiteLogo}`}
                    className="headerLogo"
                  />
                </a>
              </div>
            </div>

            <div className="header_boards">
              <div className="header_board">
                <div className="board-text">
                  <span>Улаанбаатар</span>
                  <p>
                    <img src="/images/sun.svg" />
                    {weathers &&
                      weathers.forecast5day &&
                      weathers.forecast5day[26].data.weather[0].temperatureDay
                        ._text}
                  </p>
                </div>
              </div>
              <div className="header_board">
                <div className="board-text">
                  <span>Валютын ханш</span>
                  <p>
                    <img src="/images/usa.jpg" />
                    {rates && rates[13].sellRate}
                  </p>
                </div>
              </div>
              <div className="header_search_box">
                <form action="/search">
                  <input
                    name="s"
                    type="text"
                    placeholder="Мэдээллээс хайх... "
                  />{" "}
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
            <MobileMenu
              info={webInfo}
              socialLinks={socialLinks}
              menus={menus}
            />
          </div>
        </div>
      </header>
      <nav className="header_top_menu">
        <div className="container">
          <ul className={`headerMenu`}>{renderMenu(menus)}</ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
