import React from 'react';

const OfferCard = React.memo(({ imageUrl, title, description, price }) => {
   
    return (
        <div className='relative px-2 cursor-pointer group'>
            {/* Image Container with Hover Overlay */}
            <div className='relative h-100 w-full'>
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                <img src={imageUrl} alt={title} className='w-full h-full object-cover' />
            </div>

            {/* Text Overlay with Hover Effect */}
            <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3 transition-all duration-700'>
                <div className='flex flex-col gap-3 transition-all duration-700'>
                    <h2 className='text-4xl font-semibold transition-all duration-700'>{title}</h2>
                    <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>
                        {description}
                    </p>
                    <p className='text-2xl'>{price}</p>
                </div>
            </div>
        </div>
    );
});

export default OfferCard;