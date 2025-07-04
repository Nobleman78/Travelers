// Layout.jsx

import { Outlet } from 'react-router-dom';
import StickyHeader from './StickyHeader';
import HomeHero from './HomeHero';

const Layout = () => {
    return (
        <div>
            <StickyHeader />
            <HomeHero/>
            <Outlet />
        </div>
    );
};

export default Layout;
