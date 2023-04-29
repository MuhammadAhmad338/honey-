import { useEffect } from 'react';
import './home.css';
import ScrollReveal from 'scrollreveal';

const Home = () => {
    
    useEffect(() => {
        ScrollReveal().reveal('.home-text', {
            duration: 1200,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
        });
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-text">
                <h1>Meet, <span>Eat &</span> <br /> Enjoy the True <br /></h1>
                <a href="#" className="button1">Explore Menu<i className="bx bxs-right-arrow"></i></a>
                <a href="#" className="button2">Order Now</a>
            </div>
            <div className="home-img">
                <img src="src/assets/hero.png" />
            </div>
        </section>
    );
}

export default Home;