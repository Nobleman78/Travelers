import Airlines from "../MainContents/Airlines/Airlines";
import Banner from "../MainContents/Banner";
import BlogPost from "../MainContents/Blog/BlogPost";
import DareToExplore from "../MainContents/DareToExplore";
import ExotikPlaces from "../MainContents/ExotikPlaces";
import Explore from "../MainContents/Explore";
import ExploreBangladesh from "../MainContents/ExploreBangladesh";
import Offer from "../MainContents/Offer/Offer";
import Reviews from "../MainContents/Reviews";

const Home = () => {
    return (
        <div>
            {/* <Banner/> */}
            <Explore />
            <Offer />
            <Reviews />
            {/* <ExotikPlaces/> */}
            <ExploreBangladesh />
            {/* <DareToExplore/>    */}

            {/* <BlogPost /> */}
            {/* <Airlines /> */}

        </div>
    );
};

export default Home;