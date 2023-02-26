import { faBolt, faClock, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import base from "lib/base";

import moment from "moment";
import { getAdsSide } from "lib/ads";
import { getNews } from "lib/news";

export default async () => {
  const { ads } = await getAdsSide();
  const { news: newNews } = await getNews(`status=true&limit=9`);

  return (
    <>
      <div className="sides sticky-top">
        {ads && ads.length > 0 && (
          <div className="side__item ads">
            <a href={ads[0].link} target="_blank">
              <img
                src={`${base.cdnUrl}/${ads[0].picture}`}
                className="side__banner"
              />
            </a>
          </div>
        )}
        <div className="side__item">
          <div className="side-news-home-mobile">
            <div class="section-header">
              <h3> Шинэ мэдээ </h3>
            </div>
            {newNews &&
              newNews.map((el) => (
                <div className="side-news">
                  <div className="side-news-content">
                    <a className="side-news-link" href={"/n/" + el.slug}>
                      {el.name}
                    </a>
                    <div className="newsbox-categories">
                      <a href={"/news/" + el.categories[0].slug}>
                        {el.categories[0].name}
                      </a>
                    </div>
                    <div className="news_highlight_dt">
                      <li>
                        <FontAwesomeIcon icon={faBolt} /> {el.views}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faClock} />
                        {moment(el.createAt)
                          .utcOffset("+0800")
                          .format("YYYY-MM-DD HH:mm:ss")}
                      </li>
                    </div>
                  </div>
                  <div className="side-news-img">
                    <a href={"/n/" + el.slug}>
                      <img src={base.cdnUrl + "/150x150/" + el.pictures[0]} />
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <div className="side-news-box">
            {newNews &&
              newNews.map((el) => (
                <div className="side-news">
                  <div className="side-news-content">
                    <a className="side-news-link" href={"/n/" + el.slug}>
                      {el.name}
                    </a>
                    <div className="newsbox-categories">
                      <a href={"/news/" + el.categories[0].slug}>
                        {el.categories[0].name}
                      </a>
                    </div>
                    <div className="news_highlight_dt">
                      <li>
                        <FontAwesomeIcon icon={faBolt} /> {el.views}
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faClock} />
                        {moment(el.createAt)
                          .utcOffset("+0800")
                          .format("YYYY-MM-DD HH:mm:ss")}
                      </li>
                    </div>
                  </div>
                  <div className="side-news-img">
                    <a href={"/n/" + el.slug}>
                      <img src={base.cdnUrl + "/150x150/" + el.pictures[0]} />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
