"use client";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import base from "lib/base";
import { useEffect, useState } from "react";

import htmlToFormattedText from "html-to-formatted-text";
import moment from "moment";

import { getNews, getSlugCategory } from "lib/news";
import Loading from "app/loading";
import NotFound from "components/NotFound";
import HighlightNews from "./HighlightNews";

const NewsList = ({ categoryslug }) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [topNews, setTopNews] = useState(null);
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState("Мэдээ мэдээлэл");

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      const { category } = await getSlugCategory(categoryslug);
      if (category) {
        setTitle(category.name);
        setCategory(category);
      }
      const { news, pagination } = await getNews(
        `status=true&categories=${category && category._id}`
      );
      const { news: topNews } = await getNews(
        `status=true&star=true&&categories=${category && category._id}&limit=1`
      );
      if (news) {
        setData(news);
        setPagination(pagination);
      }
      if (topNews) {
        setTopNews(topNews[0]);
      }
    };
    fetchDatas()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  const handlePageChange = async (pageNumber) => {
    const { news, pagination } = await getNews(
      `status=true&categories=${category && category._id}&page=${pageNumber}`
    );

    if (news) {
      setPagination(pagination);
      setData((bn) => [...bn, ...news]);
    }
  };

  return (
    <>
      {loading === true && <Loading />}
      <h3 className="page-header"> {title} </h3>
      <HighlightNews news={topNews} />
      <div className="section_news_title">
        <h4> Сүүлд нэмэгдсэн </h4>
      </div>

      <div className="row news_col">
        {data && data.length > 0 ? (
          data.map((el) => (
            <div className="col-md-12">
              <div className="news__column_item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="news__column_image column-news-image">
                      <a href={`/n/${el.slug}`} scroll={false}>
                        {el.pictures && el.pictures[0] ? (
                          <img src={`${base.cdnUrl}/450/${el.pictures[0]}`} />
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
                          ? htmlToFormattedText(el.details).substr(0, 170) +
                            "..."
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
      {data &&
        data.length > 0 &&
        pagination &&
        pagination.pageCount > 1 &&
        pagination.page != pagination.pageCount && (
          <button
            className="more-btn"
            onClick={() => {
              handlePageChange(pagination.nextPage);
            }}
          >
            {" "}
            Цааш үзэх{" "}
          </button>
        )}
    </>
  );
};

export default NewsList;
