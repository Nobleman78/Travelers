import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";


const BlogCard = React.memo(({ imageUrl, title, date, comments }) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='overflow-hidden'>
                <img className='w-full h-80 object-cover transition-transform duration-500 ease-in-out hover:scale-105'src={imageUrl}alt={title}  />
            </div>
            <h2 className='text-xl hover:text-yellow-500 mt-2'>{title}</h2>
            <div className='flex items-center justify-between text-gray-700 text-sm'> {/* Adjusted text size and color */}
                <div className='flex items-center gap-2'>
                    <CiCalendarDate />
                    <p>{date}</p>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <FaRegComments />
                    <span>{comments}</span>
                </div>
            </div>
        </div>
    );
});

export default BlogCard;