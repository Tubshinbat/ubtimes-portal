"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const renderMenu = (categories) => {
  let myCategories = [];
  categories &&
    categories.map((el) => {
      myCategories.push(
        <li key={el._id}>
          <a href={`/news/${el.slug}`}>{el.name}</a>
        </li>
      );
    });

  return myCategories;
};

const MobileMenu = ({ menus, info, socialLinks }) => {
  const [dataMenus, setDataMenus] = useState([]);
  const router = useRouter();
  const [active, setActive] = useState(false);

  const backGo = () => {
    router.back();
  };

  useEffect(() => {
    if (menus) {
      setDataMenus(menus);
    }
  }, [menus]);

  const handleToggle = () => {
    setActive((ba) => {
      if (ba === true) return false;
      else return true;
    });
  };

  return (
    <>
      <div className="burger__menu" onClick={handleToggle}>
        <span className="line"> </span>
        <span className="line"> </span>
        <span className="line"> </span>
      </div>
      <div
        className={`menuMobile  ${
          active === true ? "displayBlock" : "displayNone"
        }`}
      >
        <h5>
          <i className="fa-solid fa-xmark" onClick={handleToggle}></i> Үндсэн
          цэс
        </h5>

        <div className="search-mobile">
          <form action="/search">
            <input name="s" type="text" placeholder="Мэдээллээс хайх... " />{" "}
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <ul>{renderMenu(dataMenus)}</ul>
        <div className="contactMobile">
          <li>
            <a href={`tel:${info.phone}`}> Утас: {info.phone} </a>
          </li>
          <li>
            <a href={`mailto:${info.email}`}> Имэйл: {info.email} </a>
          </li>
          <li>Хаяг: {info.address}</li>
        </div>
        <div className="socialMobile">
          {socialLinks &&
            socialLinks.map((el) => (
              <a key={`${el._id}-som`} onClick={() => openInNewTab(el.link)}>
                <i
                  className={`fa-brands fa-${el.name.toLowerCase()}-square`}
                ></i>
              </a>
            ))}
        </div>
      </div>
      <div
        className={`menuMobile-bg ${
          active === true ? "displayBlock" : "displayNone"
        }`}
        onClick={handleToggle}
      ></div>
    </>
  );
};

export default MobileMenu;
