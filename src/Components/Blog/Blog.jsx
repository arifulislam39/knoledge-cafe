import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const { blog_cover_img, blog_title, author_name, author_img, publish_in, read_time
    } = props.blog;
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
                    <p>{read_time} min read</p>

                </div>
            </div>
            <h2 className='blog-title'>{blog_title}</h2>

            <a className='btn-mark' href="#">Mark as read</a>


        </div>
    );
};

export default Blog;