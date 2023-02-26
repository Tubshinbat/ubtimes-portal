"use client";
import { getAdsHome } from "lib/ads";
import base from "lib/base";
import { useEffect, useState } from "react";

const HomeAds = () => {
  const [ads, setAds] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { ads } = await getAdsHome();
      setAds(ads);
    };
    fetchData();
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      {ads && (
        <section className="section-ads">
          <div className="container">
            <img
              className="home_ads"
              src={base.cdnUrl + "/" + ads.picture}
              onClick={() => openInNewTab(ads.link)}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default HomeAds;
