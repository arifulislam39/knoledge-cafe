import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    const listItems = cart.map((blogInfo) =>
        <p>{blogInfo.blog_title}</p>
    );

    return (
        <div>
            <h3>Spent time on read : </h3>
            <h3>Bookmarked Blogs: {cart.length}</h3>
            <p>{listItems}</p>
            
        </div>
    );
};

export default Cart;