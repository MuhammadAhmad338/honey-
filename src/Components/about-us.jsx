import { useEffect } from 'react';
import './aboutus.css';
import ScrollReveal from 'scrollreveal';

const AboutUs = () => {
   
    useEffect(() => {
        ScrollReveal().reveal('.about-text', {
            duration: 1200,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
        });
    }, [])

    return (
        <section className='about' id='about'>
            <div className="about-img">
                <img src="src/assets/about.png" />
            </div>
            <div className="about-text">
                <h2>Living well beings <br /> with eating well <br /></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="#" className="button1">Explore Story <i className="bx bxs-right-arrow"></i></a>
            </div>
        </section>
    );
}

export default AboutUs