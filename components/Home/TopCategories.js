import base from "lib/base";
import htmlToFormattedText from "html-to-formatted-text";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { getMenus } from "lib/menus";
import { getNews } from "lib/news";

const TopCategories = async () => {
  const { menus } = await getMenus();
  const { news: topCat1 } = await getNews(
    `limit=3&status=true&categories=${menus[0]._id}`
  );
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
            <div className="col-lg-4">
              <div class="section-header">
                <a href={`/news/${menus[0].slug}`}>
                  <h3> {menus[0].name} </h3>
                </a>
              </div>
              <div className="news-home-list">
                {topCat1 &&
                  topCat1.map((el, index) => (
                    <div className="col-md-12">
                      <div className="cat__list">
                        {index === 0 && (
                          <div className="cat__item_big">
                            <a
                              href={`/news/${el.slug}`}
                              className="cat__item_big_img"
                            >
                              <img
                                src={`${base.cdnUrl}/450/${el.pictures[0]}`}
                              />
                            </a>
                            <a href={`/news/${el.slug}`}>
                              {el.name.length > 90
                                ? el.name.substr(0, 90) + "..."
                                : el.name}
                            </a>
                          </div>
                        )}
                        {index !== 0 && (
                          <div className="side-news">
                            <div className="side-news-img">
                              <a href={"/n/" + el.slug}>
                                <img
                                  src={
                                    base.cdnUrl + "/150x150/" + el.pictures[0]
                                  }
                                />
                              </a>
                            </div>
                            <div className="side-news-content">
                              <a
                                className="side-news-link"
                                href={"/n/" + el.slug}
                              >
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
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div class="section-header">
                <a href={`/news/${menus[1].slug}`}>
                  <h3> {menus[1].name} </h3>
                </a>
              </div>
              <div className="news-home-list">
                {topCat2 &&
                  topCat2.map((el, index) => (
                    <div className="col-md-12">
                      <div className="cat__list">
                        {index === 0 && (
                          <div className="cat__item_big">
                            <a
                              href={`/news/${el.slug}`}
                              className="cat__item_big_img"
                            >
                              <img
                                src={`${base.cdnUrl}/450/${el.pictures[0]}`}
                              />
                            </a>
                            <a href={`/news/${el.slug}`}>
                              {el.name.length > 90
                                ? el.name.substr(0, 90) + "..."
                                : el.name}
                            </a>
                          </div>
                        )}
                        {index !== 0 && (
                          <div className="side-news">
                            <div className="side-news-img">
                              <a href={"/n/" + el.slug}>
                                <img
                                  src={
                                    base.cdnUrl + "/150x150/" + el.pictures[0]
                                  }
                                />
                              </a>
                            </div>
                            <div className="side-news-content">
                              <a
                                className="side-news-link"
                                href={"/n/" + el.slug}
                              >
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
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div class="section-header">
                <a href={`/news/${menus[2].slug}`}>
                  <h3> {menus[2].name} </h3>
                </a>
              </div>
              <div className="news-home-list">
                {topCat3 &&
                  topCat3.map((el, index) => (
                    <div className="col-md-12">
                      <div className="cat__list">
                        {index === 0 && (
                          <div className="cat__item_big">
                            <a
                              href={`/news/${el.slug}`}
                              className="cat__item_big_img"
                            >
                              <img
                                src={`${base.cdnUrl}/450/${el.pictures[0]}`}
                              />
                            </a>
                            <a href={`/news/${el.slug}`}>
                              {el.name.length > 90
                                ? el.name.substr(0, 90) + "..."
                                : el.name}
                            </a>
                          </div>
                        )}
                        {index !== 0 && (
                          <div className="side-news">
                            <div className="side-news-img">
                              <a href={"/n/" + el.slug}>
                                <img
                                  src={
                                    base.cdnUrl + "/150x150/" + el.pictures[0]
                                  }
                                />
                              </a>
                            </div>
                            <div className="side-news-content">
                              <a
                                className="side-news-link"
                                href={"/n/" + el.slug}
                              >
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
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategories;
