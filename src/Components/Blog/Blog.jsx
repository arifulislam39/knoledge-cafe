import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';
import ReadTime from '../ReadTime/ReadTime';

const Blog = (props) => {
    //console.log(props)
    const { tag,blog_cover_img, blog_title, author_name, author_img, publish_in, read_time
    } = props.blog;
    const handleAddToCart = props.handleAddToCart;
    const handleReadTime = props.handleReadTime;
    return (
        <div className='blog'>
            <img id='cover-img' src={blog_cover_img
            } alt="" />
            <div>

                <div className='blog-info-container'>
                    <div className='author-info'>
                        <img id='author-img' src={author_img} alt="" />
                        <div className='author-name'>
                            <h3>{author_name}</h3>
                            <p>{publish_in}</p>

                        </div>

                    </div>
                    <p>{read_time} min read <FontAwesomeIcon onClick={() => handleAddToCart(props.blog)} icon={faBookmark} /></p>

                </div>
            </div>
            <h2 className='blog-title'>{blog_title}</h2>

            <p>{tag}</p>

            <a onClick={()=>handleReadTime(props.blog)} className='btn-mark' >Mark as read</a>

            <hr />



        </div>
    );
};

export default Blog;