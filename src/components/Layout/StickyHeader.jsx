import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-light.png';
import { FiShoppingCart, FiAlignCenter } from 'react-icons/fi';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaSearch, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

const tabs = [
    { name: 'HOME', path: '/' },
    { name: 'PAGES', path: '/pages' },
    { name: 'DESTINATIONS', path: '/destinations' },
    { name: 'TOURS', path: '/tours' },
    { name: 'BLOG', path: '/blog' },
    { name: 'SHOP', path: '/shop' },
    { name: 'ELEMENTS', path: '/elements' },
];

const StickyHeader = () => {
    const [activeTab, setActiveTab] = useState('HOME');
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className='sticky top-0 z-50 bg-black/70 backdrop-blur px-20 py-5 flex items-center justify-around text-white'>
            <img src={logo} alt='Logo' className='w-28' />
            <div className='flex items-center gap-10 font-semibold'>
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.name}
                        to={tab.path}
                        onClick={() => setActiveTab(tab.name)}
                        className={`hover:text-yellow-500 transition-colors duration-200 ${activeTab === tab.name ? 'text-yellow-500 ' : ''}`}>
                        {tab.name}
                    </NavLink>
                ))}
                <div className='relative'>
                    <FiShoppingCart className='hover:text-yellow-500 cursor-pointer' />
                    <span className='w-4 h-4 rounded-full text-center absolute top-[-10px] right-[-10px] text-white flex items-center justify-center bg-yellow-400 text-xs'>0</span>
                </div>
                <FaSearch onClick={() => setOpenSearchBar(!openSearchBar)} className='hover:text-yellow-500 cursor-pointer' />
                <div className='px-2 py-1 bg-yellow-400 cursor-pointer hover:bg-black'>
                    <FiAlignCenter onClick={() => setOpenSidebar(!openSearchBar)} className='text-xl ' />
                </div>
            </div>
            {openSidebar &&
                <div className='absolute top-0  transition-transform duration-700 ease-in-out right-0 z-30 flex flex-col gap-5  text-white bg-black px-20  h-[600px]'>
                    <img className='w-40' src={logo} alt='' />
                    <p className='w-100 '>Proin gravida nibh vel velit auctor aliquet. Aenean sollic itudin, lorem quis bibendum auctornisi elit consequat ipsum, nec nibh id elit. Lorem ipsum dolor.</p>
                    <h2>Latest Posts</h2>
                    <div className='flex gap-5'>
                        <img className='w-15 ' src='https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-1-150x150.jpg' alt='solo-travel' />
                        <div>
                            <h2>Solo Traveler Learns On The Road</h2>
                            <p>March 25, 2025</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <img className='w-15' src='https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-4-150x150.jpg' alt='solo-travel' />
                        <div>
                            <h2>Use Your Social Network To Travel</h2>
                            <p>April 17, 2025</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaPhone />
                        <p>1-677-124-44227</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaEnvelope />
                        <p>someone@gmail.com</p>
                    </div>
                    <div className='flex gap-4'>
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaFacebook />
                    </div>
                    <button onClick={() => setOpenSidebar(false)} className='absolute right-0 px-10 text-2xl cursor-pointer hover:text-yellow-500'>X</button>
                </div>}
        </div>
    );
};

export default StickyHeader;