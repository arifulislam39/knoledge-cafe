import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import './Diplay.css'

const Display = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    const handleAddToCart = (blog) => {
       // console.log(blog)
       const newCart=[...cart, blog];
       setCart(newCart);
    }

    return (
        <div className='display-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToCart={handleAddToCart}
                    >

                    </Blog>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Display;