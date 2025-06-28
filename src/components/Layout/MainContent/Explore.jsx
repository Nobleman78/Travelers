import MexicoImage from '../../../assets/Mexico.avif'
import ThailandImage from '../../../assets/Thailand.avif'
import IndiaImage from '../../../assets/India.avif'
import Switzerland from '../../../assets/Switchzerland.avif'
import Nepal from '../../../assets/Nepal.avif'
import America from '../../../assets/America.avif'
import Chaina from '../../../assets/Chaina.avif'
import Canada from '../../../assets/Canada.avif'
import France from '../../../assets/France.avif'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Explore = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        pauseOnHover: true,
        slidesToScroll: 3,

    };
    return (
        <div className='px-10 '>
            <div className='mb-10 flex flex-col gap-4'>
                <h2 className='text-5xl text-center font-serif'>Explore Differnet Countries</h2>
                <p className='text-center text-xl text-gray-700'>'The world is a book, and those who do not travel read only one page.' — St. Augustine</p>
            </div>
            <Slider className='flex gap-10' {...settings}>
                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={IndiaImage} alt='Slide 1' className='w-full h-full object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3  transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>India Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>
                                Visit One Of The Largest Country in The World.
                            </p>
                            <p className='text-2xl'>$700</p>
                        </div>
                    </div>
                </div>

                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={ThailandImage} alt='Slide 1' className='w-full h-64 object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3  transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>Thailand Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>Visit Thailand for Enoy Natural Beauty</p>
                            <p className='text-2xl'>$700</p>
                        </div>
                    </div>
                </div>

                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={MexicoImage} alt='Slide 1' className='w-full h-64 object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3 transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>Mexico Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>Feel the rhythm and culture of Mexico</p>
                            <p className='text-2xl'>$1300</p>
                        </div>
                    </div>
                </div>

                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={America} alt='Slide 1' className='w-full h-64 object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3 transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>America Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>Discover the United States' vast beauty</p>
                            <p className='text-2xl'>$1500</p>
                        </div>
                    </div>
                </div>

                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={Nepal} alt='Slide 1' className='w-full h-64 object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3 transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>Nepal Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>Explore the land of the Himalayas</p>
                            <p className='text-2xl'>$1200</p>
                        </div>
                    </div>
                </div>

                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={Switzerland} alt='Slide 1' className='w-full h-64 object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3 transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>Switzerland Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>Experience the Alps and charming villages</p>
                            <p className='text-2xl'>$900</p>
                        </div>
                    </div>
                </div>

                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={France} alt='Slide 1' className='w-full h-64 object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3 transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>France Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>Taste wine, art, and the Eiffel Tower</p>
                            <p className='text-2xl'>$1000</p>
                        </div>
                    </div>
                </div>

                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={Chaina} alt='Slide 1' className='w-full h-64 object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3 transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>Chaina Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>Step into centuries of ancient heritage</p>
                            <p className='text-2xl'>$1200</p>
                        </div>
                    </div>
                </div>

                <div className='relative px-2 cursor-pointer group'>
                    <div className='relative h-64 w-full'>
                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10'></div>
                        <img src={Canada} alt='Slide 1' className='w-full h-64 object-cover' />
                    </div>
                    <div className='absolute bottom-5 left-5 text-white font-serif z-30 p-3 transition-all duration-700'>
                        <div className='flex flex-col gap-3 transition-all duration-700'>
                            <h2 className='text-4xl font-semibold transition-all duration-700'>Canada Tour</h2>
                            <p className='opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700'>Embrace nature in Canada’s great outdoors</p>
                            <p className='text-2xl'>$1000</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default Explore;
