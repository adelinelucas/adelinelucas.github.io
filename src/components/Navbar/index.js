import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faSuitcase, faBars, faLocationDot, faGraduationCap, faX} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <section className='header__nav-section'>
            <nav className='header_nav-section-desktop'>
                <NavLink exact='true' activeclassname="active" to="/">
                    Home<FontAwesomeIcon icon={faHome} color="#D95B96" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/about" className="about-link">
                    A propos<FontAwesomeIcon icon={faUser} color="#D95B96" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/portfolio" className="portfolio-link">
                    Portfolio<FontAwesomeIcon icon={faSuitcase} color="#D95B96" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/experiences-pro" className="portfolio-link">
                    Experiences pro<FontAwesomeIcon icon={faGraduationCap} color="#D95B96" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/contact" className="contact-link">
                    Localisation<FontAwesomeIcon icon={faLocationDot} color="#D95B96" />
                </NavLink>
            </nav>

            <button className={`${showLinks ? 'nav-toggle ':'nav-toggle open' }`} onClick={()=>setShowLinks(!showLinks)}>
                    <FontAwesomeIcon icon={faBars} color="#D95B96" />
                </button>

            <div className={`${showLinks ? 'header_nav-section-mobile show-link':'header_nav-section-mobile' }`}>
                <button className={`${showLinks ? 'nav-toggle close':'nav-toggle' }`} onClick={()=>setShowLinks(!showLinks)}>
                    <FontAwesomeIcon icon={faX} color="#D95B96" />
                </button>
                <nav className={`${showLinks ? 'show-links':'' }`}>
                    <NavLink exact='true' activeclassname="active" to="/" onClick={()=>setShowLinks(!showLinks)}>
                        Home<FontAwesomeIcon icon={faHome} color="#D95B96" />
                    </NavLink>
                    <NavLink exact='true' activeclassname="active" to="/about" className="about-link" onClick={()=>setShowLinks(!showLinks)}>
                        A propos<FontAwesomeIcon icon={faUser} color="#D95B96" />
                    </NavLink>
                    <NavLink exact='true' activeclassname="active" to="/portfolio" className="portfolio-link" onClick={()=>setShowLinks(!showLinks)}>
                        Portfolio<FontAwesomeIcon icon={faSuitcase} color="#D95B96" />
                    </NavLink>
                    <NavLink exact='true' activeclassname="active" to="/experiences-pro" className="portfolio-link" onClick={()=>setShowLinks(!showLinks)}>
                        Experiences pro<FontAwesomeIcon icon={faGraduationCap} color="#D95B96" />
                    </NavLink>
                    <NavLink exact='true' activeclassname="active" to="/contact" className="contact-link" onClick={()=>setShowLinks(!showLinks)}>
                        Localisation<FontAwesomeIcon icon={faLocationDot} color="#D95B96" />
                    </NavLink>
                </nav>
            </div>
            
        </section>
    );
};

export default Navbar;