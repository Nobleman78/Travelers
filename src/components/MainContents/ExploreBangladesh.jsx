import React from 'react';
import Coxsbazar from '../../assets/CoxsBazar.avif'
import Sylet from '../../assets/Sylet.avif'
import Chittagong from '../../assets/Chittagong.avif'


const ExploreBangladesh = () => {
    return (
        <div className='mt-20'>
            <div className='flex flex-col gap-5 text-center'>
                <h2 className='font-serif text-5xl'>Explore Bangladesh</h2>
                <p className='text-gray-600'>Prepare to experience Bangladesh's rich culture and explore the majestic beauties of Cox’s Bazar, Sylhet, Bandarban, Sajek Valley, Rangamati etc. Plan your trip now!</p>
            </div>
            <div className='grid grid-cols-3 '>
                <div className='relative px-10 mt-10 '>
                    <div className='overflow-hidden'>
                        <img className=' w-full transition-transform  cursor-pointer duration-500 ease-in-out hover:scale-115' src={Coxsbazar} alt="" />
                    </div>
                    <div className='absolute bottom-10 text-white px-10'>
                        <h2 className='text-xl'>Cox's bazar</h2>
                        <p>97 Hotel's Available</p>
                    </div>
                </div>
                <div className='relative px-10 mt-10 '>
                    <div className='overflow-hidden '>
                        <img className=' cursor-pointer w-full transition-transform duration-500 ease-in-out hover:scale-115 ' src={Sylet} alt="" />
                    </div>
                    <div className='absolute bottom-10 text-white px-10'>
                        <h2 className='text-xl'>Sylet</h2>
                        <p>24 Hotel's Available</p>
                    </div>
                </div>
                <div className='relative px-10 mt-10 '>
                    <div className='overflow-hidden'>
                        <img className='w-full cursor-pointer transition-transform duration-500 ease-in-out hover:scale-115' src={Chittagong} alt="" />
                    </div>
                    <div className='absolute bottom-10 text-white px-10'>
                        <h2 className='text-xl'>Chittagong</h2>
                        <p>54 Hotel's Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreBangladesh;