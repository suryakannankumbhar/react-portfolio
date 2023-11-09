import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogsTab = () => {
    return (
        <NavLink to='/blogs' activeClassName='active-tab'>
            <h3 className='button-text'>Blogs</h3>
        </NavLink>
    );
};

export default BlogsTab;
