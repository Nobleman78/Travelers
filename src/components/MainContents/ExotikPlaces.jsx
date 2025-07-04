import React, { useState } from 'react';

import RiverWithBoats from '../../assets/RiverWithBoat.webp';
import Brazil from '../../assets/Brazil.avif';
import RuralLife from '../../assets/RuralLife.avif';
import Pagoda from '../../assets/Pagoda.avif';
import Spain from '../../assets/Spain.avif'
import Nepal from '../../assets/Nepal.avif'
import America from '../../assets/America.avif'
import Mexico from '../../assets/Maxico.avif'
import Japan from '../../assets/Japan.avif'
import Australia from '../../assets/Australia.avif'
import China from '../../assets/China.avif'
import Europe from '../../assets/Europe.avif'

const ExotikPlaces = () => {
    const [seeMore, setSeeMore] = useState(false);

    const renderBlock = (img1, img2, img3, img4, title1, title2, title3, title4) => (
        <div className='flex gap-5 mt-10'>
            <div className='w-2/3 flex flex-col gap-5 relative'>
                <div className='relative overflow-hidden cursor-pointer'>
                    <img className='w-full h-80 object-cover transition-transform duration-500 ease-in-out hover:scale-105' src={img1} alt='' />
                    <h2 className='absolute text-white bottom-5 ms-5 text-4xl'>{title1}</h2>
                </div>
                <div className='flex gap-4 w-full h-64'>
                    <div className='w-1/2 overflow-hidden relative cursor-pointer'>
                        <img className='h-64 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105' src={img2} alt='' />
                        <h2 className='absolute text-white bottom-5 ms-5 text-4xl'>{title2}</h2>
                    </div>
                    <div className='w-1/2 overflow-hidden relative cursor-pointer'>
                        <img className='h-64 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105' src={img3} alt='' />
                        <h2 className='absolute text-white bottom-5 ms-5 text-4xl'>{title3}</h2>
                    </div>
                </div>
            </div>
            <div className='w-1/3 overflow-hidden relative cursor-pointer'>
                <img className='h-screen w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105' src={img4} alt='' />
                <h2 className='absolute text-white bottom-5 ms-5 text-4xl'>{title4}</h2>
            </div>
        </div>
    );

    return (
        <div className='mt-20 px-20'>
            <div>
                <div className='text-center mb-10 flex flex-col gap-5'>
                    <h2 className='text-5xl font-serif'>Go Exotic Places</h2>
                    <p className='text-gray-600'>
                        When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.
                    </p>
                </div>

                {
                    renderBlock(RiverWithBoats, Pagoda, Brazil, RuralLife, 'Africa', 'Thailand', 'Brazil', 'India')
                }
                {
                    seeMore && (
                        <>
                            <>
                                {renderBlock(Europe, Japan, Mexico, China, 'Europe', 'Japan', 'Mexico', 'China')}
                                {renderBlock(Australia, Nepal, America, Spain, 'Australia', 'Nepal',  'USA','Spain')}
                            </>
                        </>
                    )}
                <button onClick={() => setSeeMore(!seeMore)} className='cursor-pointer bg-yellow-500 px-10 py-2 mt-10 text-white hover:bg-black block mx-auto'>
                    {seeMore ? 'See Less' : 'See More'}
                </button>
            </div>
        </div>
    );
};

export default ExotikPlaces;