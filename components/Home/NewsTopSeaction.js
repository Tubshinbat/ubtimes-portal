import base from "lib/base";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HighlightNews from "../News/HighlightNews";
import moment from "moment";
import { getNews } from "lib/news";

const NewsTopSeaction = async () => {
  const { news: topNews } = await getNews(`star=true&limit=4&status=true`);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <HighlightNews news={topNews[0]} />
            </div>
            <div className="col-lg-4  ">
              {topNews &&
                topNews.length > 0 &&
                topNews.map((el, index) => {
                  if (index != 0)
                    return (
                      <div className="side-news" key={`n-${el._id}`}>
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
                        <div className="side-news-img side-news-img-15">
                          <a href={"/n/" + el.slug}>
                            <img
                              src={base.cdnUrl + "/150x150/" + el.pictures[0]}
                            />
                          </a>
                        </div>
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsTopSeaction;
