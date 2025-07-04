import React from 'react';
import NaturalBeauty from '../../assets/NaturalBeauty.avif';
import BlackWorldMap from '../../assets/BlackWorldMap.avif'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
    const reviews = [
        {
            name: "Alice Johnson",
            description: "Amazing experience! The service was top-notch and everything went smoothly.",
            reviewStar: 5
        },
        {
            name: "Brian Smith",
            description: "Pretty good overall. A few minor issues, but still worth it.",
            reviewStar: 4
        },
        {
            name: "Chloe Lee",
            description: "It was okay, but not as expected. Needs improvement.",
            reviewStar: 3
        },
        {
            name: "David Kim",
            description: "Not satisfied. Poor customer service and delays.",
            reviewStar: 4
        },
        {
            name: "Emma Brown",
            description: "Terrible experience. I wouldn’t recommend it to anyone.",
            reviewStar: 3.5
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        pauseOnHover: true,
        slidesToScroll: 1,
        arrows: false,
    
    };

    return (
        <div className='flex flex-col md:flex-row mt-30 rounded-lg overflow-hidden shadow-lg'>
            {/* Left Side Image */}
            <div className='w-full md:w-1/2'>
                <img className='w-full h-full object-cover' src={NaturalBeauty} alt="Natural Beauty" />
            </div>

            {/* Right Side Reviews */}
            <div className='w-full md:w-1/2 bg-cover bg-center relative' style={{ backgroundImage: `url(${BlackWorldMap})` }}>
                <div className='bg-black/70 h-full w-full p-10 flex flex-col gap-10 text-white'>
                    <h2 className='text-5xl  mb-6 font-serif text-center'>Our Top Reviews</h2>
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className='text-center px-4'>
                                <h3 className='text-2xl font-semibold mb-2'>{review.name}</h3>
                                <p className='mb-4 italic text-md'>{review.description}</p>
                                <div className='text-yellow-400 text-lg'>
                                    {'⭐️'.repeat(review.reviewStar)}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;