import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import ProjectsHero from '../../Components/Images/projects.png';

// images
import portfolio from '../../Components/Images/projects/portfolio.gif';
import flyHi from '../../Components/Images/projects/fly-hi.gif';
import picasso from '../../Components/Images/projects/picasso.gif';
import blackNotes from '../../Components/Images/projects/black-notes.gif';
import weather from '../../Components/Images/projects/weather.gif';
import checklist from '../../Components/Images/projects/checklist.gif';
import findingFlix from '../../Components/Images/projects/finding-flix.gif';
import tree from '../../Components/Images/projects/tree.gif';
import kingPong from '../../Components/Images/projects/king-pong.gif';
import ticTacToe from '../../Components/Images/projects/tictactoe.gif';
import snakes from '../../Components/Images/projects/snakes.gif';
import forBinge from '../../Components/Images/projects/for-binge.gif';
import emotiKon from '../../Components/Images/projects/emoti-kon.gif';
import messageMorse from '../../Components/Images/projects/message-morse.gif';
import minion from '../../Components/Images/projects/talk-like-minion.gif';
import expenseTracker from '../../Components/Images/projects/expense-tracker.gif';
import yourTodos from '../../Components/Images/projects/your-todos.gif';

function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [modalImages, setModalImages] = useState([]);

    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio',
            desc: 'Creating a personal web development portfolio project to showcase my skills and projects, aiming to impress potential clients and employers. This website will feature my latest work, highlight my expertise, and provide a platform to connect with the web development community.',
            url: 'https://suryakannankumbhar.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/portfolio',
            relatedImages: [portfolio],
        },
        {
            id: 2,
            title: 'Expense Tracker',
            desc: "Introducing 'Track My Money,' a web app designed to effortlessly manage your finances. Say goodbye to wondering where your hard-earned money went! Built with ReactJS, JavaScript, Speechly for speech detection, CSS, and Material UI, this user-friendly app lets you track all your incomes and expenses. All transactions are securely stored in the browser's LocalStorage for your convenience.",
            url: 'https://track-my-money-v1.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/expense-tracker',
            relatedImages: [expenseTracker],
        },
        {
            id: 3,
            title: 'Your Todos',
            desc: "Stay organized with 'Your Todos,' the todo app that goes beyond tasks. Built with React, this app features Firebase for storage and Google authentication for security. It takes your productivity to the next level by categorizing todos into food, sports, and mental health. Effortlessly manage your daily priorities with this all-in-one solution.",
            url: 'https://your-todos-v1.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/your-todos',
            relatedImages: [yourTodos],
        },
        {
            id: 4,
            title: 'Fly Hi',
            desc: 'Immerse yourself in a Flappy Bird-inspired game, powered by HTML, CSS, JavaScript, canvas, and sprites. Navigate a challenging obstacle course with your bird character, and aim for the high score to become the ultimate flapping champion!',
            url: 'https://fly-hi.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/fly-hi',
            relatedImages: [flyHi],
        },
        {
            id: 5,
            title: "Picasso's Playground",
            desc: "Welcome to 'Picasso's Playground'! Unleash your creativity with our interactive web project. Using HTML, CSS, JavaScript, and canvas, you have a palette of pens and erasers at your disposal to draw and create on the webpage. Express yourself and turn the digital canvas into your masterpiece!",
            url: 'https://suryakannankumbhar.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/picasso-lite',
            relatedImages: [picasso],
        },
        {
            id: 6,
            title: 'Black Notes',
            desc: "Introducing 'Black Notes' – a user-friendly note-taking web application crafted using the magic of ReactJS. With 'Black Notes,' you can effortlessly create and organize your notes, all securely stored in your web browser's LocalStorage. Experience a seamless way to keep your thoughts and ideas readily accessible.",
            url: 'https://black-notes-v1.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/notes-v1',
            relatedImages: [blackNotes],
        },
        {
            id: 7,
            title: 'Check Weather',
            desc: 'Introducing an innovative weather data solution – an API-based WebApp designed to provide global weather information. Crafted using the simplicity of Vanilla JS and powered by the OpenWeather API, this application offers real-time weather updates from around the world. Stay informed about weather conditions on a global scale effortlessly.',
            url: 'https://check-weather-v1.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/weather-app-v1',
            relatedImages: [weather],
        },
        {
            id: 8,
            title: 'Check List',
            desc: 'Step into the world of productivity with our straightforward todo list app. Crafted using Vanilla JS and Local Storage, this user-friendly application streamlines your task management. Stay organized and accomplish more with this simple yet effective tool.',
            url: 'https://check-list-v1.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/todo-list-v1',
            relatedImages: [checklist],
        },
        {
            id: 9,
            title: 'Finding Flix',
            desc: 'Step into the world of cinematic exploration with our API-based WebApp. Engineered to fetch IMDb results with ease, this application is built using the simplicity of Vanilla JS and draws power from the IMDb API. Dive into a seamless experience and uncover the details you seek from the vast IMDb database. Your gateway to cinematic information awaits, effortlessly crafted for your browsing pleasure.',
            url: 'https://imdb-api-v1.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/imdb-api-v1',
            relatedImages: [findingFlix],
        },
        {
            id: 10,
            title: 'Crazy Tree',
            desc: 'Discover the magic of simplicity with our fractal tree web app. Using basic Vanilla JS, it brings to life captivating self-replicating patterns. Enjoy the beauty of nature-inspired artistry in a straightforward and easy-to-explore experience.',
            url: 'https://fractal-tree-v1.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/fractal-tree-v1',
            relatedImages: [tree],
        },
        {
            id: 11,
            title: 'King Pong',
            desc: 'Get ready for some classic gaming nostalgia with our simple Ping Pong game. Created using the PyGame module, it offers a straightforward and enjoyable gaming experience. Bounce into the fun and relive the excitement of Ping Pong in a hassle-free gaming environment.',
            url: 'https://github.com/suryakannankumbhar/King-Pong/raw/main/kingpong.exe',
            github: 'https://github.com/suryakannankumbhar/King-Pong',
            relatedImages: [kingPong],
        },
        {
            id: 12,
            title: 'Tic Tac Toe',
            desc: 'Experience the timeless joy of gaming with our straightforward Tic Tac Toe game. Crafted using the PyGame module, it promises simple and engaging gameplay. Dive into the fun, reliving the classic excitement of Tic Tac Toe in an easy and enjoyable gaming environment.',
            url: 'https://github.com/suryakannankumbhar/TicTacToe/raw/main/tictactoe.exe',
            github: 'https://github.com/suryakannankumbhar/TicTacToe',
            relatedImages: [ticTacToe],
        },
        {
            id: 13,
            title: 'Feeding Python',
            desc: 'Indulge in gaming fun with our easy-to-play Snake Feeding game, skillfully crafted using the PyGame module. Immerse yourself in a straightforward and enjoyable gaming experience, feeding the snake and navigating the challenges. Join the adventure and relish the simplicity of Snake Feeding in a hassle-free gaming environment.',
            url: 'https://github.com/suryakannankumbhar/FeedingPython/raw/main/game.exe',
            github: 'https://github.com/suryakannankumbhar/FeedingPython',
            relatedImages: [snakes],
        },
        {
            id: 14,
            title: 'ForBinge',
            desc: "Feeling bored and in need of some entertainment? Give 'ForBinge' a try! This platform, aptly named for your binge-watching cravings, provides recommendations on what to watch this weekend. Discover a world of entertainment tailored just for you.",
            url: 'https://for-binge.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/for-binge',
            relatedImages: [forBinge],
        },
        {
            id: 15,
            title: 'Emoti-Kon',
            desc: "Emoji struggles? Introducing 'Emoti-kon'! This simple app is your go-to guide to decode those mysterious emojis. Quickly understand what those quirky symbols mean with ease. Say goodbye to emoji confusion and embrace the world of 'Emoti-kon'!",
            url: 'https://emoti-kon.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/emoti-kon',
            relatedImages: [emotiKon],
        },
        {
            id: 16,
            title: 'Message Morse',
            desc: "Worried about strangers reading your personal messages? Enter 'Message Morse'! Safeguard your privacy by using this app to both encode and decode your messages. Keep your communication secure and enjoy peace of mind with 'Message Morse'.",
            url: 'https://message-morse.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/morse-code',
            relatedImages: [messageMorse],
        },
        {
            id: 17,
            title: 'Talk Like Minion',
            desc: "Love the language of minions? Check out this small app that lets you speak 'banana'—the language of the minions. Have some fun expressing yourself in true minion style with this delightful and entertaining app.",
            url: 'https://talk-like-minion.netlify.app/',
            github: 'https://github.com/suryakannankumbhar/minion-translator',
            relatedImages: [minion],
        },
    ];

    const openModal = images => {
        setModalImages(images);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImages([]);
    };

    return (
        <div className='projectsContainer'>
            <Header />
            <div className='heroImage'>
                <img src={ProjectsHero} alt='Hero' />
            </div>
            <div className='projectList'>
                {projects.map(project => (
                    <div className='projectBox' key={project.id}>
                        <span>
                            <h3>{project.title}</h3>
                        </span>
                        <p>{project.desc}</p>
                        <div className='buttonBox'>
                            <NavLink
                                to={project.url}
                                className='exploreProjectsButton'
                                target='_blank'
                            >
                                <span>See the Project</span>
                            </NavLink>

                            <NavLink
                                to={project.github}
                                className='exploreProjectsButton'
                                target='_blank'
                            >
                                <span>Check Github</span>
                            </NavLink>

                            <NavLink
                                className='exploreProjectsButton'
                                onClick={() => openModal(project.relatedImages)}
                            >
                                <span>Related Images</span>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className='modalOverlay' onClick={closeModal}>
                    <div
                        className='modalContent'
                        onClick={e => e.stopPropagation()}
                    >
                        {modalImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Project Sample`}
                            />
                        ))}
                        <span className='closeModal' onClick={closeModal}>
                            &times;
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
