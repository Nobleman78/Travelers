
import mapBackground from '../../../assets/whiteMap.jpg'
import seaImage from '../../../assets/Sea.webp'

const Banner = () => {
    return (
        <div className='relative'>
            <img className='z-10 opacity-10 h-[700px] w-full' src={mapBackground} alt="" />
            <div className='absolute top-2/6 -translate-y-1/4 flex gap-10 left-1/5 -translate-x-1/6'>
                <img src={seaImage} alt="sea-image" />
                <div className='flex flex-col gap-10'> 
                    <h2 className='text-5xl font-serif'>A Simply Perfect Place To Get Lost</h2>
                    <p className='text-xl text-gray-600'>The deep sea, a realm of profound mystery and breathtaking beauty, invites us to explore its hidden wonders. Here, vibrant bioluminescent creatures dance in the perpetual twilight, and ancient, majestic geological formations paint a mesmerizing underwater landscape.</p>
                    <button className='px-4 py-2 bg-yellow-500 w-40 cursor-pointer hover:bg-black text-white'>SEE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;