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

  const { news: newNews } = await getNews(`limit=6&status=true`);
  const { news: newNews2 } = await getNews(`limit=9&status=true&type=video`);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div class="section-header">
                <a href={`/news`}>
                  <h3> Сүүлд нэмэгдсэн</h3>
                </a>
              </div>
              <div className="new_news_cols">
                <div className="row">
                  {newNews &&
                    newNews.map((news) => (
                      <div className="col-md-4">
                        <div className="col_news_box">
                          <a
                            href={`/news/${news.slug}`}
                            className="col_news_img_box"
                            style={{
                              backgroundImage: `url(${base.cdnUrl}/450/${news.pictures[0]})`,
                            }}
                          ></a>
                         
                          <span className="create__at">
                          <FontAwesomeIcon icon={faClock} />
                            {moment(news.createAt)
                              .utcOffset("+0800")
                              .format("YYYY-MM-DD HH:mm:ss")}
                          </span>
                          <a
                            href={`/news/${news.slug}`}
                            className="col_news_link"
                          >
                            {news.name}
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div class="section-header">
                
                  <h3> Видео мэдээлэл </h3>
           
              </div>
            <div className="side-news-box">
                {newNews2 &&
                  newNews2.map((el) => (
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
                      <div className="side-news-img">
                        <a href={"/n/" + el.slug}>
                          <img
                            src={base.cdnUrl + "/150x150/" + el.pictures[0]}
                          />
                        </a>
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
