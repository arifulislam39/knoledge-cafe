import React from 'react';
import './Cart.css';
import ReadTime from '../ReadTime/ReadTime';

const Cart = (props) => {
    //console.log(props)
    const cart = props.cart;
    // console.log(cart)
    const listItems = cart.map((blogInfo) =>
        <p>{blogInfo.blog_title}</p>
    );

    return (
        <div className='bookmark-cart'>
            <div>
                <h3>Bookmarked Blogs: {cart.length}</h3>
                <p>{listItems}</p>
            </div>



        </div>

    );
};

export default Cart;