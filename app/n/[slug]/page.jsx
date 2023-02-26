import Content from "components/News/Content";
import NewsSide from "components/News/NewsSide";
import NotFound from "components/NotFound";
import base from "lib/base";
import { getNews, getSlugNews } from "lib/news";
import { getComments, getCountComment } from "lib/newsComment";

export default async function Page({ params: { slug } }) {
  const { news: newNews } = await getNews(`status=true&limit=9`);
  const { news } = await getSlugNews(slug);

  if (!news) {
    return <NotFound />;
  }

  const { count } = await getCountComment(`newsId=${news._id}`);
  const { comments, pagination } = await getComments(`newsId=${news._id}`);
  const shareUrl = `${base.baseUrl}n/${slug}`;
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Content
                news={news}
                shareUrl={shareUrl}
                comments={comments}
                count={count}
                pagination={pagination}
              />
            </div>
            <div className="col-lg-3">
              <NewsSide newNews={newNews} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
