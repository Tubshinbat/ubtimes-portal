import NewsTopSeaction from "components/Home/NewsTopSeaction";
import HomeAds from "components/Home/HomeAds";
import NewNews from "components/Home/NewNews";
import TopCategories from 'components/Home/TopCategories'
import VideoSection from "components/Home/VideoSection";
import TopAfterCategories from "components/Home/TopAfterCategories";

export default function Page() {
  return (
    <div>
      <main>
        <NewsTopSeaction />
        <NewNews />
        <HomeAds />
        <TopCategories />
       
        {/* <TopAfterCategories /> */}
      </main>
    </div>
  );
}
