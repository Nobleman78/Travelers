import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-light.png';
import { FiShoppingCart, FiAlignCenter } from 'react-icons/fi';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaSearch, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

const tabs = [
    { name: 'HOME', path: '/' },
    { name: 'HOTEL', path: '/hotel' },
];

const StickyHeader = () => {
    const [activeTab, setActiveTab] = useState('HOME')
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className='sticky top-0 z-50 bg-black/70 backdrop-blur  py-5 flex items-center justify-around px-10 text-white'>
            <img src={logo} alt='Logo' loading='lazy' className='w-28' />
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


            </div>
            <button className='bg-yellow-500 px-5 py-1 cursor-pointer rounded-2xl'>LOGIN</button>
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