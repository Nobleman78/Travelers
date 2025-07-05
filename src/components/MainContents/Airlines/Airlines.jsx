import React from 'react';
import BimanBangladesh from '../../../assets/download-removebg-preview.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Airlines = () => {
    const airlines = [
        {
            name: "Biman Bangladesh Airlines",
            logo: BimanBangladesh
        },
        {
            name: "US‑Bangla Airlines",
            logo: "https://cdn.usbair.com/website/public/images/home_page/homepage_logo.png.svg"
        },
        {
            name: "NOVOAIR",
            logo: "https://www.flynovoair.com/assets/images/logo-novoair2.png"
        },

        {
            name: "NOVOAIR",
            logo: "https://www.flynovoair.com/assets/images/logo-novoair2.png"
        },
        {
            name: "US‑Bangla Airlines",
            logo: "https://cdn.usbair.com/website/public/images/home_page/homepage_logo.png.svg"
        },
           {
            name: "Biman Bangladesh Airlines",
            logo: BimanBangladesh
        },

    ];

    return (
        <div className='bg-gray-50 mt-20'>
            {/* Search Top Airnlines */}
            <main className=''>
                <div className='text-center py-10 flex flex-col gap-5'>
                    <h2 className='text-5xl font-serif'>Search Top Airlines</h2>
                    <p className='text-xl text-gray-700 w-4xl mx-auto'>ShareTrip's user-friendly platform connects you to top airlines instantly. Enjoy a comfortable and hassle-free journey on any destination and get tickets of top airlines easily</p>
                </div>
                <div className='grid grid-cols-3 mx-20 '>
                    {airlines.map((airlines, index) =>
                        <div key={index} className='flex items-center justify-between gap-5 h-20 px-5 hover:bg-white  hover:rounded-xl cursor-pointer'>
                            <div className='flex items-center gap-3'>
                                <img className='w-30' src={airlines.logo} alt="" />
                                <p className='text-sm'>{airlines.name}</p>
                            </div>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Airlines;