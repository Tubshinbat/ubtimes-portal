import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import "styles/global.css";
import "styles/laptop.css";
import "styles/mobile.css";
import "animate.css";
import "antd/dist/reset.css";

import Footer from "components/Footer";
import Header from "components/Header";
import Topbar from "components/Topbar";
import { getWebInfo } from "lib/webinfo";
import { getWeather } from "lib/weather";
import { getRate } from "lib/rate";
import { getMenus } from "lib/menus";
import { getSocials } from "lib/socialLinks";

export default async function RootLayout({ children }) {
  const { webInfo } = await getWebInfo();
  const { weather } = await getWeather();
  const { rates } = await getRate();
  const { menus } = await getMenus();
  const { socialLinks } = await getSocials();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <link
        href={`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css`}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <head />
      <body>
        {" "}
        <Topbar />
        <Header
          webInfo={webInfo}
          weather={weather}
          menus={menus}
          rates={rates}
        />
        {children}
        <Footer info={webInfo} menus={menus} socialLinks={socialLinks} />
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Script
        src="https://kit.fontawesome.com/8c5f1b6ac5.js"
        crossorigin="anonymous"
      />
      <Script src="/js/scripts.js" />
    </html>
  );
}
