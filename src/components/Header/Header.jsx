import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';


const Header = () => {
    return (
        <div className='flex items-center justify-between  font-semibold bg-black px-20 py-5 text-white'>
            <div className='flex items-center gap-10'>
                <div className='flex gap-3 items-center cursor-pointer'>
                    <h2>FOLLOW US: </h2>
                    <a href="https://www.facebook.com/"><FaFacebook /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://x.com/"><FaTwitter /></a>
                </div>
                <div className='flex items-center gap-5 '>
                    <FaPhone />
                    <p>+880167893456</p>
                </div>
            </div>
            <button className='bg-yellow-500 px-4 py-1 cursor-pointer rounded-full'>LOGIN</button>
        </div>
    );
};

export default Header;