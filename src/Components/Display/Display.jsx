import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import './Diplay.css';
import ReadTime from '../ReadTime/ReadTime';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Display = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [store, setStore] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);




    const handleAddToCart = (blog) => {
        if (cart.find(a => a.id === blog.id)) {
            toast('You Have Already Bookmarked This Blog');
        }
        else {
            const newCart = [...cart, blog]
            setCart(newCart);

        }





    }
    const handleReadTime = (blog) => {
        const newStore = [...store, blog];
        setStore(newStore);
    }

    return (
        <div className='display-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToCart={handleAddToCart}

                        handleReadTime={handleReadTime}

                    >

                    </Blog>)

                }
                <ToastContainer />
            </div>



            <div>
                <div className='cart-container'>
                    <ReadTime store={store}></ReadTime>
                    <Cart cart={cart}></Cart>


                </div>
            </div>

        </div>
    );
};

export default Display;