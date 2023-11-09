import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeTab = () => {
    return (
        <NavLink exact to='/' activeClassName='active-tab'>
            <h3 className='button-text'>Home</h3>
        </NavLink>
    );
};

export default HomeTab;
