import travelImage from '../../assets/Travel_Navbar_Image.avif'
import travelImageTwo from '../../assets/Travel_Image_Two.avif';
import travelImageThree from '../../assets/Travel_Image_Three.avif';
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate, CiFlag1 } from 'react-icons/ci';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [travelImage, travelImageTwo, travelImageThree];

const HomeHero = () => {
    return (
        <div className='relative'>
            <Carousel
                autoPlay
                interval={4000}
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                className='relative z-10'
            >
                {images.map((src, index) => (
                    <div key={index} className='relative'>
                        <img src={src} alt='Slider-Image' className='h-[300px] md:h-[400px] lg:h-[600px] object-cover' />
                        <div className='absolute inset-0 bg-black/35'></div>
                    </div>
                ))}
            </Carousel>

            <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4'>
                <h1 className='text-white text-7xl mb-4 font-serif'>Your Journey Begins</h1>
                <p className='text-white text-2xl max-w-3xl'>
                    We travel, some of us forever, to seek other states, other lives, other souls." - Anaïs Nin.
                </p>
            </div>

            <div className='absolute flex left-0 right-0 bottom-10 z-30 px-6 py-7 bg-white max-w-5xl mx-auto'>
                <div className='flex items-center gap-2 border border-gray-300 w-1/4'>
                    <IoLocationOutline className='ms-2' />
                    <input type='text' placeholder='Where to?' className='border-none outline-none' />
                </div>
                <div className='flex items-center gap-2 border border-gray-300 w-1/4'>
                    <CiCalendarDate className='ms-2' />
                    <select className='border-none outline-none'>
                        <option>When?</option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>March</option>
                    </select>
                </div>
                <div className='flex items-center gap-2 border border-gray-300 w-1/4'>
                    <CiFlag1 className='ms-2' />
                    <select className='border-none outline-none'>
                        <option>Travel Type</option>
                        <option>Adventure</option>
                        <option>Relax</option>
                    </select>
                </div>
                <div className='w-1/4 border border-yellow-500 bg-yellow-500 text-white hover:bg-black hover:border-black'>
                    <button className='w-full my-3 cursor-pointer'>FIND NOW</button>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;