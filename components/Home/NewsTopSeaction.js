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
      <section className="" >
        <div className=" top-news-header">
          {topNews &&
            topNews.length > 0 &&
            topNews.map((el, index) => {
              return (
                <a
                  className="news_top_header_box"
                  href={"/n/" + el.slug}
                  key={`n-${el._id}`}
                  style={{
                    backgroundImage: `url(${base.cdnUrl}/450/${el.pictures[0]})`,
                  }}
                >
                  
                    <div className="news_top_name"> <p>{el.name} </p>
                    <span className="create__at"> {moment(el.createAt)
                            .utcOffset("+0800")
                            .format("YYYY-MM-DD HH:mm:ss")} </span></div>
                </a>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default NewsTopSeaction;
