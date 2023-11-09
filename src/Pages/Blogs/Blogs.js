// Blogs.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import BlogsHero from '../../Components/Images/blogs.png';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: 'Getting Started with Pygame',
            desc: 'Want to learn Pygame Module to make some fun games? I have tried to cover all the basics into one post that will help you get started. Give this article a read.',
            url: 'https://recyclebin.hashnode.dev/getting-started-with-pygame',
        },
        {
            id: 2,
            title: 'Exploring the Power of Sprite and Canvas in HTML: Creating Dynamic Visual Experiences',
            desc: 'Explore the dynamic world of web visuals with sprites and canvas in HTML. Optimize performance and streamline animations using sprites, while canvas offers unparalleled interactivity and customization for creating intricate graphics and games. Choose the right tool to craft captivating and responsive web experiences.',
            url: 'https://recyclebin.hashnode.dev/exploring-the-power-of-sprite-and-canvas-in-html-creating-dynamic-visual-experiences',
        },
    ];

    return (
        <div>
            <Header />
            <div className='heroImage'>
                <img src={BlogsHero} alt='Hero' />
            </div>
            <div className='blogList'>
                {blogs.map(blog => (
                    <div className='blogBox' key={blog.id}>
                        <span>
                            <h3>{blog.title}</h3>
                        </span>
                        <p>{blog.desc}</p>
                        <NavLink
                            to={blog.url}
                            className='exploreBlogsButton'
                            target='_blank'
                        >
                            <span>Explore Blog</span>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
