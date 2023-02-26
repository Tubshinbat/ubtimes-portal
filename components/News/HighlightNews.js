import htmlToFormattedText from "html-to-formatted-text";
import moment from "moment";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import base from "lib/base";

const HighlightNews = ({ news }) => {
  if (!news) {
    return <></>;
  }
  return (
    <>
      <div className="highlight-big">
        <div className="highlight-img">
          <a href={"/n/" + news.slug}>
            <img src={base.cdnUrl + "/450/" + news.pictures[0]} />
          </a>
        </div>
        <div className="highlight-content">
          <div className="newsbox-categories">
            <a href={"/news/" + news.categories[0].slug}>
              {news.categories[0].name}
            </a>
          </div>
          <a href={"/n/" + news.slug} className="highlight-title-big">
            <h4> {news.name}</h4>
          </a>
          <p className="highlight-desc">
            {htmlToFormattedText(news.details).length > 200
              ? htmlToFormattedText(news.details).substr(0, 200) + "..."
              : htmlToFormattedText(news.details)}
          </p>
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
    </>
  );
};
export default HighlightNews;
