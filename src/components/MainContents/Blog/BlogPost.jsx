import React from 'react';
import BlogCard from './BlogCard'; // Import the memoized BlogCard component

const BlogPost = () => {
    const blogPostsData = [
        {
            id: 1,
            imageUrl: 'https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-1-m.jpg',
            title: 'Journeys Are Best Measured In New Friends',
            date: 'January 2, 2025',
            comments: 3,
        },
        {
            id: 2,
            imageUrl: 'https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-3-m.jpg',
            title: 'Exploring Hidden Gems Across Continents',
            date: 'February 10, 2025',
            comments: 5,
        },
        {
            id: 3,
            imageUrl: 'https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-4-m.jpg',
            title: 'A Culinary Adventure in Vibrant Asia',
            date: 'March 1, 2025',
            comments: 2,
        },
        {
            id: 4,
            imageUrl: 'https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-6-m.jpg',
            title: 'The Unparalleled Beauty of Mountain Trails',
            date: 'April 15, 2025',
            comments: 7,
        },
        {
            id: 5,
            imageUrl: 'https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-5-m.jpg',
            title: 'City Breaks: Perfect Weekend Escapes',
            date: 'May 20, 2025',
            comments: 1,
        },
        {
            id: 6,
            imageUrl: 'https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-7-m.jpg',
            title: 'Discovering Ancient Civilizations\' Secrets',
            date: 'June 5, 2025',
            comments: 4,
        },
        {
            id: 7,
            imageUrl: 'https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-2-m.jpg',
            title: 'Coastal Drives and Breathtaking Ocean Views',
            date: 'July 1, 2025',
            comments: 6,
        },
        {
            id: 8,
            imageUrl: 'https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-8-m.jpg',
            title: 'Witnessing the Magic of Northern Lights',
            date: 'August 10, 2025',
            comments: 0,
        },
    ];
    return (
        <div className='mt-20'>
            <div className='flex flex-col text-center gap-4'>
                <h2 className='text-5xl font-serif'>Blog Posts</h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'> 
                    One inspiring story is worth traveling. Discover more about local food, tradition and history. Read the stories that make you want to travel.
                </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-10 lg:px-20 gap-10 mt-15'> 
            
                {blogPostsData.map(post => (
                    <BlogCard
                        key={post.id} 
                        imageUrl={post.imageUrl}
                        title={post.title}
                        date={post.date}
                        comments={post.comments}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogPost;