import base from "lib/base";
import htmlToFormattedText from "html-to-formatted-text";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { getMenus } from "lib/menus";
import { getNews } from "lib/news";

const TopAfterCategories = async () => {
  const { menus } = await getMenus();

  const { news: topCat2 } = await getNews(
    `limit=3&status=true&categories=${menus[1]._id}`
  );
  const { news: topCat3 } = await getNews(
    `limit=3&status=true&categories=${menus[2]._id}`
  );

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="section-header">
                <a href={`/news/${menus[1].slug}`}>
                  <h3> {menus[1].name} </h3>
                </a>
              </div>
              <div className="news-home-list">
                <div className="row">
                  {topCat2 &&
                    topCat2.map((news) => (
                      <div
                        className="col-lg-4 col-md-6"
                        key={`tn2-${news._id}`}
                      >
                        <div className="column-news-box">
                          <div className="column-news-image big">
                            <a href={"/n/" + news.slug}>
                              <img
                                src={base.cdnUrl + "/450/" + news.pictures[0]}
                              />
                            </a>
                          </div>
                          <div className="column-news-content">
                            <a
                              href={"/n/" + news.slug}
                              className="column-news-title"
                            >
                              {news.name}
                            </a>

                            <div className="newsbox-categories">
                              <a href={"/news/" + news.categories[0].slug}>
                                {news.categories[0].name}
                              </a>
                            </div>
                            <div className="news_highlight_dt">
                              <li>
                                <FontAwesomeIcon icon={faBolt} /> {news.views}
                              </li>
                              <li>
                                <FontAwesomeIcon icon={faClock} />
                                {moment(news.createAt)
                                  .utcOffset("+0800")
                                  .format("YYYY-MM-DD HH:mm:ss")}
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div class="section-header">
                <a href={`/news/${menus[2].slug}`}>
                  <h3> {menus[2].name} </h3>
                </a>
              </div>
              <div className="news-home-list">
                <div className="row">
                  {topCat3 &&
                    topCat3.map((news) => (
                      <div
                        className="col-lg-4 col-md-6"
                        key={`tp4-${news._id}`}
                      >
                        <div className="column-news-box">
                          <div className="column-news-image big">
                            <a href={"/n/" + news.slug}>
                              <img
                                src={base.cdnUrl + "/450/" + news.pictures[0]}
                              />
                            </a>
                          </div>
                          <div className="column-news-content">
                            <a
                              href={"/n/" + news.slug}
                              className="column-news-title"
                            >
                              {news.name}
                            </a>
                            <div className="newsbox-categories">
                              <a href={"/news/" + news.categories[0].slug}>
                                {news.categories[0].name}
                              </a>
                            </div>
                            <div className="news_highlight_dt">
                              <li>
                                <FontAwesomeIcon icon={faBolt} /> {news.views}
                              </li>
                              <li>
                                <FontAwesomeIcon icon={faClock} />
                                {moment(news.createAt)
                                  .utcOffset("+0800")
                                  .format("YYYY-MM-DD HH:mm:ss")}
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopAfterCategories;
