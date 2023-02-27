"use client";
import base from "lib/base";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ({ info, menus, socialLinks }) => {
  const [phoneNumber, setPhoneNumber] = useState([]);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  useEffect(() => {
    if (info.phone) {
      const phones = info.phone.split(",");
      setPhoneNumber(phones);
    }
  }, [info]);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="footer">
            <div className="footer-about">
              {info.logo && (
                <Link href="/">
                  <img src={`${base.cdnUrl}/${info.logo}`} />
                </Link>
              )}
              <p className="footerDescription">{info.siteInfo}</p>
            </div>

            <div className="footerContacts">
              <div className="footerTitle">Холбоо барих</div>
              <li>
                <a href={`tel:${phoneNumber && phoneNumber[0]}`}>
                  <i className="fa fa-phone"> </i>
                  Утас: {info.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${info.email}`}>
                  {" "}
                  <i className="fa-solid fa-envelope"></i>Имэйл: {info.email}{" "}
                </a>
              </li>
              <li>
                <i className="fa-solid fa-house"></i> {info.address}
              </li>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} Ubtimes.mn • Бүх эрх хуулиар
              хамгаалагдсан
            </p>
            <div className="socialsLinks">
              {socialLinks &&
                socialLinks.map((el) => (
                  <a
                    onClick={() => openInNewTab(el.link)}
                    key={`${el._id}-social`}
                  >
                    <i className={`fa-brands fa-${el.name.toLowerCase()}`}></i>
                  </a>
                ))}
            </div>{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
