"use client";
import NewsList from "components/News/NewsList";
import NotFound from "components/NotFound";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import base from "lib/base";
import { getNews } from "lib/news";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import htmlToFormattedText from "html-to-formatted-text";
import moment from "moment";

export default function Page({}) {
  const searchParams = useSearchParams();
  const name = searchParams.get("s");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetcherNews = async (name) => {
      const { news, pagination } = await getNews(
        `status=true&name=${name}&limit=100`
      );
      setData(news);
    };

    if (name) {
      fetcherNews(name);
    }
  }, [searchParams]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="search-page">
              <h5> Хайлт: {name}</h5>
              <div className="row news_col">
                {data && data.length > 0 ? (
                  data.map((el) => (
                    <div className="col-md-12">
                      <div className="news__column_item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="news__column_image column-search-image">
                              <a href={`/n/${el.slug}`} scroll={false}>
                                {el.pictures && el.pictures[0] ? (
                                  <img
                                    src={`${base.cdnUrl}/450/${el.pictures[0]}`}
                                  />
                                ) : (
                                  <img src={`/images/img_notfound.jpg`} />
                                )}
                              </a>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="news__column_content">
                              <a href={`/n/${el.slug}`} scroll={false}>
                                <h4>
                                  {el.name.length > 90
                                    ? el.name.substr(0, 90) + "..."
                                    : el.name}
                                </h4>
                              </a>

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

                              <p>
                                {htmlToFormattedText(el.details).length > 170
                                  ? htmlToFormattedText(el.details).substr(
                                      0,
                                      170
                                    ) + "..."
                                  : htmlToFormattedText(el.details)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <NotFound />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
