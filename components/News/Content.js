"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "styles/banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Navigation } from "swiper";

import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import moment from "moment";

import Share from "components/Share";
import base from "lib/base";
import { useState } from "react";
import { toastControl } from "lib/toastControl";
import { addComment, getComments } from "lib/newsComment";

const Content = ({
  news,
  shareUrl,
  count,
  comments: initComments,
  pagination: initPagination,
}) => {
  const [comment, setComment] = useState({
    name: "",
    comment: "",
  });

  const [comments, setComments] = useState(initComments);
  const [pagination, setPagination] = useState(initPagination);

  const handleChange = (e) => {
    const name = e.target.name;
    setComment((bc) => ({ ...bc, [name]: e.target.value }));
  };

  const handleAdd = async () => {
    if (comment) {
      if (
        !comment.name ||
        (!comment.comment && !comment.comment && !comment.name)
      ) {
        toastControl("error", "Сэтгэгдэл бичих талбарыг бүрэн бөгөлнө үү");
      } else {
        const data = { ...comment, news: news._id };
        const { error, newComment } = await addComment(data);
        if (!newComment) {
          toastControl("error", "Алдаа гарлаа сэтгэгдэл бичих боломжгүй байна");
        } else {
          // console.log(comments);
          // console.log([newComment]);
          setComment((b) => ({ name: "", comment: "" }));
          setComments((bc) => [newComment, ...bc]);
        }
      }
    }
  };

  const handlePageChange = async (pageNumber) => {
    const { comments, pagination } = await getComments(
      `newsId=${news._id}&page=${pageNumber}`
    );

    if (comments) {
      setPagination(pagination);
      setComments((bn) => [...bn, ...comments]);
    }
  };

  return (
    <>
      <div className="content__main">
        <div className="content__header">
          <h2> {news.name} </h2>
          <div className="header__details">
            <li>
              <a href={"/news/" + news.categories && news.categories[0].slug}>
                {news.categories[0].name}
              </a>
            </li>
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
        <div className="news__details_image">
          {news.pictures && news.pictures.length === 1 && (
            <img src={`${base.cdnUrl}/${news.pictures[0]}`} />
          )}
          {news.pictures && news.pictures.length > 1 && (
            <Swiper
              modules={[Navigation]}
              autoHeight={true}
              navigation={{
                prevEl: ".newsViewSlider__prev",
                nextEl: ".newsViewSlider__next",
              }}
              className="newsViewSlider"
            >
              {news.pictures.map((pic, index) => (
                <SwiperSlide className="newsViewSlide" key={index + "nview"}>
                  <img src={`${base.cdnUrl}/${pic}`} />
                </SwiperSlide>
              ))}
              <div className="newsViewSlide__nav">
                <div className="newsViewSlider__prev swiper-button-prev"></div>
                <div className="newsViewSlider__next swiper-button-next"></div>
              </div>
            </Swiper>
          )}
        </div>

        <div className="news__content">
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: news.details,
            }}
          ></div>
        </div>
        <div className="news__socials">
          <Share shareUrl={shareUrl} />
        </div>
        <div className="news_comments">
          <div className="news_count">НИЙТ {count} СЭТГЭГДЭЛ</div>
          <div className="news__comment_box">
            <input
              type="text"
              name="name"
              value={comment.name}
              placeholder="Таны нэр"
              onChange={handleChange}
            />
            <textarea
              placeholder="Сэтгэгдэл"
              name="comment"
              value={comment.comment}
              onChange={handleChange}
            />
            <button className="comment_btn" onClick={handleAdd}>
              Илгээх
            </button>
          </div>
          <div className="news_comment_list">
            {comments &&
              comments.map((com) => (
                <div className="comment_item">
                  <div className="write_user">
                    <h6> {com.name}</h6>
                    <span>
                      {moment(com.createAt)
                        .utcOffset("+0800")
                        .format("YYYY-MM-DD HH:mm:ss")}
                    </span>
                  </div>
                  <p className="comment"> {com.comment} </p>
                </div>
              ))}
            {pagination &&
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
