import "./header.css";
import "../main.css";
import { useState, useEffect } from "react";

const Header = () => {

    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
       <header>
           <a href="#" className="logo"><i className='bx bxs-home-circle'></i>Honey</a>
            <ul className={ isOpen ? "navlist open" : "navlist close"}>
               <li> <a href="#home" className="active">Home </a></li>
               <li> <a href="#about">About Us </a></li>
               <li> <a href="#shop">Our Shop </a></li>
               <li> <a href="#review">Our Customer </a></li>
               <li> <a href="#contact">Contact Us </a></li>
           </ul>
        <div className="nav-icons">
                <a href="#"><i className='bx bx-search'></i></a>
                <a href="#"><i className='bx bx-cart'></i></a>
                <div className="bx bx-menu" id="menu-icon" onClick={() => setOpen(!isOpen)}></div>
        </div>
       </header>
    );
}
export default Header
