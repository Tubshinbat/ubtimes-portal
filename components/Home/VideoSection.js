import base from "lib/base";

import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { getNews } from "lib/news";

const VideoSection = async () => {
  const { news: videoNews } = await getNews(`limit=4&status=true&type=video`);
  return (
    <>
      <section className="section video_section">
        <div className="container">
          <div class="section-header white">
            <h3> Видео мэдээ </h3>
          </div>
          <div className="video-home-list news-home-list">
            <div className="row">
              {videoNews &&
                videoNews.map((news) => (
                  <div className="col-lg-3 col-md-6" key={`v-${news._id}`}>
                    <div className="column-news-box">
                      <div className="column-news-image big">
                        <a href={"/n/" + news.slug}>
                          <img src={base.cdnUrl + "/450/" + news.pictures[0]} />
                        </a>
                        <div className="play_button">
                        <i className="fa-solid fa-play"></i>
                        </div>
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
      </section>
    </>
  );
};

export default VideoSection;
