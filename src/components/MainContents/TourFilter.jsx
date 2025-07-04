import React from 'react';

const TourFilter = () => {
    return (
        <div className='mt-20'>
            <div className='relative'>
                <img className='w-full h-[500px]' src="https://plus.unsplash.com/premium_photo-1700391547517-9d63b8a8b351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwYmFja2dyb3VuZCUyMGZvciUyMHRvdXIlMjBoZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className='absolute top-20 left-1/3 -translate-x-1/5 flex flex-col gap-4 text-white'>
                    <h2 className='text-5xl font-serif text-center '>Choose Tour</h2>
                    <p className='text-center text-2xl w-200 mx-auto'>Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour. Check out our popular destinations.</p>
                </div>
                <div className='flex absolute bottom-20 px-20 w-full justify-around items-center text-white'>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-1-hover.png" alt="" />
                        <p>Self Guided</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-2-hover.png" alt="" />
                        <p>Self Guided</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-3-hover.png" alt="" />
                        <p>Self Guided</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-4-hover.png" alt="" />
                        <p>Self Guided</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-5-hover.png" alt="" />
                        <p>Self Guided</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TourFilter;