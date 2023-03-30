import React, { useEffect, useState } from 'react';
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
            <div className='blogs-container'><h3>blogs coming here: {blogs.length}</h3></div>
            <div className='cart-container'>
                <h3>bookmarked</h3>

            </div>
            
        </div>
    );
};

export default Display;