

import NewsList from "components/News/NewsList";
import NewsSide from "components/News/NewsSide";


export default function Page({ params: { categoryslug } }) {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [newNews, setNewNews] = useState([]);
  // const [pagination, setPagination] = useState();
  // const [topNews, setTopNews] = useState(null);
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const fetcherCategory = async (slug) => {
  //     setLoading(true);
  //     const { category: resultCategory } = await getSlugCategory(slug);
  //     return resultCategory;
  //   };

  //   fetcherCategory(categoryslug)
  //     .then(async (res) => {
  //       if (res) {
  //         setCategory(res);
  //         setTitle(res.name);
  //       }
  //     })
  //     .catch(() => {
  //       setTitle("Мэдээ мэдээлэл");
  //     });
  // }, [categoryslug]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="page-main">
            <div className="row">
              <div className="col-lg-9">
                <NewsList categoryslug={categoryslug} />
              </div>
              <div className="col-lg-3">
                <NewsSide />
              </div>
            </div>
          </div>
          {/* <div className="page-main">
          
            <div className="row">
              <div className="col-lg-9">
                {topNews && <HighlightNews news={topNews} />}
                {news && news.length > 0 ? (
                  <NewsList
               
                    categoryslug={categoryslug}
                  />
                ) : (
                  <NotFound />
                )}
              </div>
              <div className="col-lg-3">
                <NewsSide newNews={newNews} />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

// export async function generateStaticParams() {
//   const { news } = await getNews(`status=true&limit=5`);

//   return news.map((post) => ({
//     newsid: post._id,
//   }));
// }
