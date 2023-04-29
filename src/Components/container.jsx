import './container.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Container = () => {

    useEffect(() => {
        ScrollReveal().reveal('.container-box', {
            duration: 1200,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
        });
    }, []);

    return (
        <section className="container">
            <div className="container-box">
                <img src="src/assets/c1.png" />
                <h3>11:00 am - 8:00am</h3>
                <a href='#'>Working Hours</a>
            </div>
            <div className="container-box">
                <img src="src/assets/c2.png" />
                <h3>Honey Springs</h3>
                <a href='#'>Get Directions</a>
            </div>
            <div className="container-box">
                <img src="src/assets/c3.png" />
                <h3>(555) 111-929292</h3>
                <a href='#'>Call Us Now</a>
            </div>
        </section>
    );
}

export default Container;