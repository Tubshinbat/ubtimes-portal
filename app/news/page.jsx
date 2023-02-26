import NewsList from "components/News/NewsList";
import NewsSide from "components/News/NewsSide";

export default  function Page({ searchParams }) {
 

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <NewsList />
            </div>
            <div className="col-xl-3">
              <NewsSide />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
