import { useEffect } from 'react';
import './ourShop.css';
import ScrollReveal from 'scrollreveal';

const OurShop = () => {

    useEffect(() => {
        ScrollReveal().reveal('.row', {
            duration: 1200,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
        });
    }, []);


    return (
        <section className="shop" id="shop">
            <div className="middle-text">
                <h4>Our middle app</h4>
                <h2>Lets Check our popular products</h2>
            </div>
            <div className="shop-content">
                <div className="row">
                    <img src='src/assets/p1.png' />
                    <h3>Blueberry honey</h3>
                    <p>It is a long established fact that a reader</p>

                    <div className='in-text'>
                        <div className='price'>
                            <h6>$21.00</h6>
                        </div>
                        <div className='s-btnn'>
                            <a href='#'>Order Now</a>
                        </div>
                    </div>

                    <div className='top-icon'>
                        <a href='#'><i className='bx bx-heart'></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src='src/assets/p2.png' />
                    <h3>Blueberry honey</h3>
                    <p>It is a long established fact that a reader</p>

                    <div className='in-text'>
                        <div className='price'>
                            <h6>$21.00</h6>
                        </div>
                        <div className='s-btnn'>
                            <a href='#'>Order Now</a>
                        </div>
                    </div>

                    <div className='top-icon'>
                        <a href='#'><i className='bx bx-heart'></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src='src/assets/p3.png' />
                    <h3>Blueberry honey</h3>
                    <p>It is a long established fact that a reader</p>

                    <div className='in-text'>
                        <div className='price'>
                            <h6>$21.00</h6>
                        </div>
                        <div className='s-btnn'>
                            <a href='#'>Order Now</a>
                        </div>
                    </div>

                    <div className='top-icon'>
                        <a href='#'><i className='bx bx-heart'></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src='src/assets/p4.png' />
                    <h3>Blueberry honey</h3>
                    <p>It is a long established fact that a reader</p>

                    <div className='in-text'>
                        <div className='price'>
                            <h6>$21.00</h6>
                        </div>
                        <div className='s-btnn'>
                            <a href='#'>Order Now</a>
                        </div>
                    </div>

                    <div className='top-icon'>
                        <a href='#'><i className='bx bx-heart'></i></a>
                    </div>
                </div>
            </div>

            
          <div className='row-btn'>
                <a href="#" className="button1">See All Products<i className="bx bxs-right-arrow"></i></a>
          </div>

        </section>
    );
}

export default OurShop