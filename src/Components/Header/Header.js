import ProjectsTab from './HeaderTabs/ProjectsTab';
import HomeTab from './HeaderTabs/HomeTab';
import BlogsTab from './HeaderTabs/BlogsTab';
function Header() {
    return (
        <div className='headerContainer'>
            <div className='headerTitle'>
                <h1>
                    <span>S</span>URYA <span>K</span>ANNAN <span>K</span>UMBHAR
                </h1>
            </div>
            <div className='headerTabs'>
                <ProjectsTab />
                <HomeTab />
                <BlogsTab />
            </div>
        </div>
    );
}

export default Header;
