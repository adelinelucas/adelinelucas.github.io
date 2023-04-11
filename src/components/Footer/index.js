import React from 'react';
import './style.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <h4>Adeline LUCAS, web dev 2023 &copy;</h4>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/adeline-lucas-web-dev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/adeline-lucas-web-dev/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>                
            </ul>
        </footer>
    );
};

export default Footer;