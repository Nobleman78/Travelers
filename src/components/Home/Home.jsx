import React from 'react';
import Banner from '../Layout/MainContent/Banner';
import Explore from '../Layout/MainContent/Explore';
import Reviews from '../Layout/MainContent/Reviews';
import ExotikPlaces from '../Layout/MainContent/ExotikPlaces';
import DareToExplore from '../Layout/MainContent/DareToExplore';
import TourFilter from '../Layout/MainContent/TourFilter';
import BlogPost from '../Layout/MainContent/Blog/BlogPost';
import Offer from '../Layout/MainContent/Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Explore/>
            <Reviews/>
            <ExotikPlaces/>
            <DareToExplore/>
            <Offer/>
            <TourFilter/>
            <BlogPost/>

        </div>
    );
};

export default Home;