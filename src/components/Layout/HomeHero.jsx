import travelImage from '../../assets/Travel_Navbar_Image.avif';
import travelImageTwo from '../../assets/Travel_Image_Two.avif';
import travelImageThree from '../../assets/Travel_Image_Three.avif';
import { IoLocationOutline } from "react-icons/io5"; // Keep only used icons
import { CiCalendarDate } from 'react-icons/ci'; // Import CiCalendarDate if used
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const images = [travelImage, travelImageTwo, travelImageThree];
const filters = ['Business', 'Couples', 'Families', 'Friends', 'Solo'];

const HomeHero = () => {
    const today = new Date();
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date(new Date().setDate(new Date().getDate() + 2)));
    const [selectedFilters, setSelectedFilters] = useState([]); // Initialize with 'Families' checked

    const handleFilterChange = (filterName) => {
        setSelectedFilters((prevSelectedFilters) => {
            if (prevSelectedFilters.includes(filterName)) {
                // If already selected, remove it
                return prevSelectedFilters.filter((f) => f !== filterName);
            } else {
                // If not selected, add it
                return [...prevSelectedFilters, filterName];
            }
        });
    };

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

            <div className='absolute top-20 left-0 right-0 flex flex-col items-center justify-center text-center z-20 px-4'>
                <h1 className='text-white text-7xl mb-4 font-serif'>Welcome to WandNess</h1>
                <p className='text-white text-3xl max-w-3xl'>
                    Find the best hotel here
                </p>
            </div>

            {/* Search bar */}
            <div className='absolute flex left-0 right-0 bottom-30 z-30 px-6 py-7 rounded-xl bg-white max-w-5xl mx-auto flex-col'>
                <div className='flex w-full mb-4'>
                    {/* Destination */}
                    <div className='flex items-center gap-2 border border-gray-300 w-1/4 p-2'>
                        <IoLocationOutline className='ms-2 text-xl text-gray-500' />
                        <input
                            type='text'
                            placeholder="Cox's Bazar"
                            className='border-none outline-none w-full text-sm text-gray-700'
                            aria-label="Destination" // Added for accessibility
                        />
                    </div>

                    {/* Check-in */}
                    <div className='flex items-center gap-2 border border-gray-300 w-1/4 p-2'>
                        <CiCalendarDate className='ms-2 text-xl text-gray-500' /> {/* Used CiCalendarDate */}
                        <div className='flex flex-col w-full'>
                            <label htmlFor="check-in-date" className='text-xs text-gray-400'>Check-in</label>
                            <DatePicker
                                id="check-in-date" // Added id for label
                                selected={checkIn}
                                onChange={(date) => {
                                    setCheckIn(date);
                                    if (date >= checkOut) {
                                        const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
                                        setCheckOut(nextDay);
                                    }
                                }}
                                minDate={today}
                                dateFormat="dd MMMM, EEEE"
                                className='outline-none text-sm w-full'
                                placeholderText="Select check-in"
                                popperPlacement="bottom"
                            />
                        </div>
                    </div>

                    {/* Check-out */}
                    <div className='flex items-center gap-2 border border-gray-300 w-1/4 p-2'>
                        <CiCalendarDate className='ms-2 text-xl text-gray-500' /> {/* Used CiCalendarDate */}
                        <div className='flex flex-col w-full'>
                            <label htmlFor="check-out-date" className='text-xs text-gray-400'>Check-out</label>
                            <DatePicker
                                id="check-out-date" // Added id for label
                                selected={checkOut}
                                onChange={(date) => setCheckOut(date)}
                                minDate={new Date(checkIn.getTime() + 24 * 60 * 60 * 1000)}
                                dateFormat="dd MMMM, EEEE"
                                className='outline-none text-sm w-full'
                                placeholderText="Select check-out"
                                popperPlacement="bottom"
                            />
                        </div>
                    </div>

                    {/* Rooms & Guests */}
                    <div className='flex items-center gap-2 border border-gray-300 w-1/4 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ms-2 text-xl text-gray-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292V15m0 0v2.323M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="rooms-guests" className='text-xs text-gray-400'>Rooms & Guests</label>
                            <input
                                id="rooms-guests" // Added id for label
                                type='text'
                                value='1 Room, 2 Guests'
                                readOnly
                                className='border-none outline-none w-full text-sm text-gray-700 cursor-pointer'
                                aria-haspopup="true" // Indicate that this might open a popup/modal
                                aria-expanded="false" // Initial state, will change if a popup is opened
                            />
                        </div>
                    </div>
                </div>

                {/* Filter Keywords - Multi-selector Version */}
                <div className='flex items-center gap-4 text-sm mb-4'>
                    <span className='font-semibold text-gray-600'>Search for:</span>
                    {filters.map((filter) => (
                        <label key={filter} className='flex items-center cursor-pointer'>
                            <input
                                type='checkbox'
                                checked={selectedFilters.includes(filter)} // Check if filter is in array
                                onChange={() => handleFilterChange(filter)} // Use the new handler
                                className='form-checkbox h-4 w-4 text-yellow-500 rounded border-gray-300 focus:ring-yellow-500' // Basic checkbox styling
                            />
                            <span
                                className={`ml-2 py-1 px-3 border rounded-full transition-all duration-200 ${selectedFilters.includes(filter)
                                        ? 'bg-yellow-500 border-yellow-500 text-white shadow-md' // Active state for text
                                        : 'border-gray-300 text-gray-600 hover:bg-gray-100' // Inactive state for text
                                    }`}
                            >
                                {filter}
                            </span>
                        </label>
                    ))}
                </div>

                {/* Search Button */}
                <div className='w-full border border-yellow-500 bg-yellow-500 text-white hover:bg-black hover:border-black flex items-center justify-center rounded-md'>
                    <button className='w-full my-3 cursor-pointer'>SEARCH</button>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;