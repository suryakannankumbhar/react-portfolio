import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectsTab = () => {
    return (
        <NavLink to='/projects' activeClassName='active-tab'>
            <h3 className='button-text'>Projects</h3>
        </NavLink>
    );
};

export default ProjectsTab;
