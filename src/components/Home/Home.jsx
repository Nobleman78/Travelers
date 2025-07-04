import React from 'react';
import Banner from '../MainContents/Banner';
import Explore from '../MainContents/Explore';
import Reviews from '../MainContents/Reviews';
import ExotikPlaces from '../MainContents/ExotikPlaces';
import ExploreBangladesh from '../MainContents/ExploreBangladesh';
import DareToExplore from '../MainContents/DareToExplore';
import Offer from '../MainContents/Offer/Offer';
import TourFilter from '../MainContents/Tourfilter';
import BlogPost from '../MainContents/Blog/BlogPost';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Explore/>
            <Reviews/>
            <ExotikPlaces/>
            <ExploreBangladesh/>
            <DareToExplore/>   
            <Offer/>
            <TourFilter/>
            <BlogPost/>

        </div>
    );
};

export default Home;