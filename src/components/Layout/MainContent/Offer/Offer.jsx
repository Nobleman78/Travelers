import React from 'react';
import OfferCard from './OfferCard'; 
import IndiaImage from '../../../../assets/India.avif';
import Alaska from '../../../../assets/Alaska.avif';
import Coconut from '../../../../assets/CoconutTree.avif';
import Pyramid from '../../../../assets/Pyramids.avif';
import AsianDiscovery from '../../../../assets/AsianDiscovery.avif';

const Offer = () => {
    
    const offersData = [
        {
            id: 1, 
            imageUrl: IndiaImage,
            title: 'India Tour',
            description: 'Visit one of the largest countries in the world.',
            price: '$700',
        },
        {
            id: 2,
            imageUrl: AsianDiscovery,
            title: 'Explore Asia',
            description: 'Explore the Asian country which has phenomenal natural beauty.',
            price: '$700',
        },
        {
            id: 3,
            imageUrl: Alaska,
            title: 'Alaska Tour',
            description: 'One of the most beautiful places in the world.',
            price: '$700',
        },
        {
            id: 4,
            imageUrl: Pyramid,
            title: 'Ancient Pyramid Tour',
            description: 'See the ancient pyramids, which are memorable.',
            price: '$700',
        },
        {
            id: 5,
            imageUrl: Coconut,
            title: 'Mexico Tour',
            description: 'Enjoy the sea beach under the coconut tree.',
            price: '$700',
        },
        {
            id: 6,
            imageUrl: IndiaImage, 
            title: 'Another India Tour', 
            description: 'Experience India again with new routes!',
            price: '$750', 
        },
    ];

    
    return (
        <div className='mt-20'>
            <div className='text-center flex flex-col gap-5 mb-10'>
                <h2 className='text-5xl font-serif'>Last Minute Offers</h2>
                <p className='text-lg text-gray-600 max-w-3xl mx-auto'> 
                    Book a memorable tour at a great price! Grab our last-minute offer and pack your bags for the journey you've dreamed about. See our recommendations.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 lg:px-20'>
               
                {offersData.map(offer => (
                    <OfferCard
                        key={offer.id} 
                        imageUrl={offer.imageUrl}
                        title={offer.title}
                        description={offer.description}
                        price={offer.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Offer;