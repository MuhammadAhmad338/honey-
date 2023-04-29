import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './reviews.css';

const Reviews = () => {


    useEffect(() => {
        ScrollReveal().reveal('.box', {
            duration: 1200,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
        });
    }, []);

    return (
        <section className='review' id='review'>

            <div className='middle-text'>
                <h4>Our Customer</h4>
                <h2>Clients that review about our food </h2>
            </div>

            <div className="review-content">
                <div className="box">
                    <p>The taste is still in my mouth and i can feel the depth of the taste of the every ingredrients used in the food. I really love info</p>

                    <div className="in-box">
                        <div className="bx-img">
                            <img src="src/assets/r1.jpg" />
                        </div>
                        <div className="bxx-text">
                            <h4>John Karahan</h4>
                            <h5>Food Vlogger</h5>
                            <div className="ratings">
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="box">
                    <p>The taste is still in my mouth and i can feel the depth of the taste of the every ingredrients used in the food. I really love info</p>
                    <div className="in-box">
                        <div className="bx-img">
                            <img src="src/assets/r2.jpg" />
                        </div>
                        <div className="bxx-text">
                            <h4>John Karahan</h4>
                            <h5>Food Vlogger</h5>
                            <div className="ratings">
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <p>The taste is still in my mouth and i can feel the depth of the taste of the every ingredrients used in the food. I really love info</p>

                    <div className="in-box">
                        <div className="bx-img">
                            <img src="src/assets/r3.jpg" />
                        </div>
                        <div className="bxx-text">
                            <h4>John Karahan</h4>
                            <h5>Food Vlogger</h5>
                            <div className="ratings">
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                                <a href="#"><i className='bx bx-star'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}


export default Reviews;