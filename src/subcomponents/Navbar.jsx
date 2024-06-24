import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.svg'
import logo5 from '../assets/logo5.svg'
import logo6 from '../assets/logo6.svg'
import logo7 from '../assets/logo7.svg'


const Navbar = () => {
    function toggleNavbar() {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    }
  return (
    <>
        <div className='nav'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='nav-links'>
                <ul>
                    <li><a href='#'>Services</a></li>
                    <li><span>Portfolio <i class="fa-solid fa-caret-down"></i></span>
                        <ul>
                            <li><a href="">General</a></li>
                            <li><a href="">International</a></li>
                        </ul>
                    </li>
                    <li><span>Company <i class="fa-solid fa-caret-down"></i></span>
                        <ul>
                            <li><a href=""><img src={logo1} alt="" />About Us</a></li>
                            <li><a href=""><img src={logo2} alt="" />Team</a></li>
                            <li><a href=""><img src={logo3} alt="" />Work With Us</a></li>
                            <li><a href=""><img src={logo4} alt="" />Awards and Achievements</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>GeoAI</a></li>
                    <li><span>Events & Media <i class="fa-solid fa-caret-down"></i></span> 
                        <ul>
                            <li><a href=""><img src={logo5} alt="" /> Events</a></li>
                            <li><a href=""><img src={logo6} alt="" /> Media</a></li>
                            <li><a href=""><img src={logo7} alt="" /> Publications</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>Blogs</a></li>
                </ul>
            </div>
            <div className="right-nav">
                <button className='nav-btn'>Let's Talk <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="toggle">
                <i class="fa-solid fa-bars" onClick={toggleNavbar}></i>
            </div>
        </div>
    </>
  )
}

export default Navbar
