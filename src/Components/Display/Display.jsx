import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Diplay.css'

const Display = () => {
    const [blogs, setBlogs]=useState([]);

useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then (data => setBlogs(data))
}, []);

    return (
        <div className='display-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}>

                    </Blog>)
                }
            </div>
            <div className='cart-container'>
                <h3>bookmarked</h3>

            </div>
            
        </div>
    );
};

export default Display;