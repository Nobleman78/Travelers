import logo from '../../../assets/logo-light.png'
import travelImage from '../../../assets/Travel_Navbar_Image.avif'
import travelImageTwo from '../../../assets/Travel_Image_Two.avif'
import travelImageThree from '../../../assets/Travel_Image_Three.avif'
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaSearch, FaTwitter } from 'react-icons/fa';
import { FiAlignCenter } from 'react-icons/fi';
import { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from 'react-icons/ci';
import { CiFlag1 } from 'react-icons/ci';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Navbar = () => {
    const [activeTab, setActiveTab] = useState('HOME');
    const [openSearchBar, setOpenSearchBar] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)

    const images = [
        travelImage,
        travelImageTwo,
        travelImageThree
    ]
    const tabs = [
        { name: 'HOME', path: '/' },
        { name: 'PAGES', path: '/pages' },
        { name: 'DESTINATIONS', path: '/destinations' },
        { name: 'TOURS', path: '/tours' },
        { name: 'BLOG', path: '/blog' },
        { name: 'SHOP', path: '/shop' },
        { name: 'ELEMENTS', path: '/elements' },
    ];

    return (
        <div className='relative '>
            {/* <img className='w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover' src={travelImage} alt='' /> */}
            <div className=''>
                <Carousel
                    autoPlay
                    interval={4000}
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showArrows={true}
                    className='relative z-10'>
                    {images.map((src, index) => (
                        <div key={index} className='relative'>
                            <img src={src} alt='Slider-Image' className='h-[300px] md:h-[400px] lg:h-[600px] object-cover' />
                            <div className='absolute inset-0 bg-black/35'></div>
                        </div>
                    ))}
                </Carousel>

            </div>

            <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4'>
                <h1 className='text-white text-7xl  mb-4 font-serif'>Your Journey Begins</h1>
                <p className='text-white text-2xl max-w-3xl'>
                   We travel, some of us forever, to seek other states, other lives, other souls." - Anaïs Nin .
                </p>
            </div>
            {/* Navigation bar part */}
            <div className='flex items-center justify-around font-semibold px-10 py-5 absolute top-0 z-30 w-full'>
                <div>
                    <img src={logo} alt='website-logo' className='w-30' />
                </div>

                <div className='flex items-center gap-10 text-white z-50'>
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
                        <span className='w-4 h-4 rounded-full text-center absolute top-[-10px] right-[-10px] r text-white flex  items-center justify-center bg-yellow-400 text-xs '>0</span>
                    </div>
                    <FaSearch onClick={() => setOpenSearchBar(!openSearchBar)} className='hover:text-yellow-500 cursor-pointer' />
                    <div className='px-2 py-1 bg-yellow-400 cursor-pointer hover:bg-black'>
                        <FiAlignCenter onClick={() => setOpenSidebar(!openSearchBar)} className='text-xl ' />
                    </div>
                </div>
            </div>
            {/* Navigation bar end */}

            {/* Search Bar Start */}
            <div className='absolute flex left-0 right-0 bottom-10 z-30  px-6 py-7 bg-white max-w-5xl mx-auto'>
                <div className='flex items-center gap-2 border border-gray-300   w-1/4'>
                    <IoLocationOutline className='ms-2' />
                    <input type='text' placeholder='Where to?' className='border-none outline-none' />
                </div>
                <div className='flex items-center gap-2 border border-gray-300  w-1/4'>
                    <CiCalendarDate  className='ms-2'/>
                    <select id='time' name='time' className='border-none outline-none'>
                        <option value=''>When?</option>
                        <option value='bd'>Jan</option>
                        <option value='us'>Feb</option>
                        <option value='uk'>March</option>
                    </select>
                </div>
                <div className='flex items-center gap-2 border border-gray-300  w-1/4'>
                    <CiFlag1 className='ms-2' />
                    <select id='type' name='type' className='border-none outline-none'>
                        <option value='bd'>Travel Type</option>
                        <option value='us'>United States</option>
                        <option value='uk'>United Kingdom</option>
                    </select>
                </div>
                <div className='w-1/4 border border-yellow-500 bg-yellow-500 text-white hover:bg-black hover:border-black'>
                    <button className='w-full my-3 cursor-pointer'>FIND NOW</button>
                </div>
            </div>


            {openSearchBar && <div className='w-full px-10 absolute top-0 z-30 bg-black duration-300 transition-all'>
                <div className='flex items-center gap-10 text-white'>
                    <FaSearch className=' text-2xl' />
                    <input type='text' placeholder='What do you want to search?' className='text-white font-semibold px-4 py-5 w-full border-none outline-none ' />
                    <button onClick={() => setOpenSearchBar(false)} className='cursor-pointer'>X</button>
                </div>
            </div>}
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

export default Navbar;
