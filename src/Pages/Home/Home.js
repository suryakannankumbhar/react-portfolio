import Header from '../../Components/Header/Header';
import HeroImage from '../../Components/Images/hero.png';

function Home() {
    return (
        <div className='homeContainer'>
            <Header />
            <div className='homeHero'>
                <div className='heroImage'>
                    <img src={HeroImage} alt='Hero' />
                </div>
                <div className='heroText'>
                    <p>
                        Greetings! I'm thrilled to introduce myself -{' '}
                        <span>Surya Kannan Kumbhar</span>, a dedicated
                        university student who has wholeheartedly embraced the
                        realm of web development. My current endeavors primarily
                        revolve around the pursuit of my Computer Science
                        degree, during which I've discovered an unwavering
                        passion for engineering flawless online experiences.
                    </p>
                    <br />
                    <p>
                        The journey embarked in this digital universe initiated
                        with the fundamental building blocks: HTML, CSS, and
                        JavaScript. These languages laid the groundwork for my
                        exploration into the multifaceted world of web
                        development. But I didn't stop at the surface level; my
                        curiosity led me to delve deeper into the intricacies of
                        backend development, where I got my hands dirty with
                        databases like MongoDB and Firebase. It's here that I
                        realized the immense power in shaping the invisible
                        infrastructure that supports seamless online
                        interactivity.
                    </p>
                    <br />
                    <p>
                        However, it was my encounter with React that truly
                        marked a turning point in my web development odyssey.
                        This JavaScript library opened up a whole new dimension
                        in my skillset, enabling me to craft interactive,
                        dynamic, and captivating web experiences. The ability to
                        create immersive user interfaces, foster responsive
                        designs, and manage complex state changes took my
                        passion for web development to new heights.
                    </p>
                    <br />
                    <p>
                        What sets me apart in this ever-evolving field is my
                        innate ability to strike a balance between creativity
                        and functionality. I thrive on the challenge of not only
                        making websites visually appealing but also ensuring
                        that they function flawlessly. It's the fusion of these
                        two elements that transforms a mere website into a
                        captivating digital reality, and it's what I do best.
                    </p>
                    <br />
                    <p>
                        I invite you to accompany me on my continuing journey of
                        growth and discovery in the world of web development.
                        Together, we can explore new technologies, tackle
                        exciting projects, and transform innovative ideas into
                        compelling digital experiences. So, let's dive deeper
                        into this boundless ocean of possibilities, where every
                        line of code becomes a brushstroke on the canvas of the
                        internet.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
