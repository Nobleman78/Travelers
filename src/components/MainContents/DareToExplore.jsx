import React from 'react';
import DaretoExplore from '../../assets/DareToExplore.avif'
const DareToExplore = () => {
    return (
        <div className='mt-20 flex '>
            <div className='w-1/2 mx-10 flex flex-col items-center justify-center gap-5 '>
                <h2 className='text-5xl font-serif'>Dare To Explore</h2>
                <p className='text-gray-600 text-lg text-center'>Exploring means learning. Bring new experiences from each journey. Meet different cultures, traditions and landscapes. Choose your next destination and start your trip.</p>
                <button className='bg-yellow-600 px-10 py-2 text-white hover:bg-black cursor-pointer'>See More</button>
            </div>
            <div className='w-1/2'>
                <img className='w-full' src={DaretoExplore} alt="dare-to-explore-image" />
            </div>
        </div>
    );
};

export default DareToExplore;