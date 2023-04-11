import React, { useEffect, useState } from 'react';
import '../../App.scss';
import Loader from 'react-loaders';
import './style.css';
import data from '../../datas/projetsweb.json';
import DisplayWebProjects from '../../components/DisplayWebProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    const {projetsWeb} = data;
    const reverseArray = Object.values(projetsWeb).reverse();
    const [projectToDisplay, setProjectToDisplay] = useState(reverseArray);
    const techArray = ['Javascript','NodeJS','PHP'];
    const handleClick = (tech)=>{
        const techTrim = tech.trim();
        const selectedTech = reverseArray.filter((tech)=> (tech.technosTag.includes(techTrim)));
        setProjectToDisplay(selectedTech);
    }   

    const [renderLoader, setRenderLoader] = useState(true);
    useEffect(()=>{          
        const timer = setTimeout(() => {
            setRenderLoader(false) ;
            }, 1000);
        return () => clearTimeout(timer);
    }, [])

    if(renderLoader) return <Loader type='ball-rotate'/>
    
    return (
        <section className='portfolio'>
            <header>
                <div>
                    <figure>
                        <img src="./images/screen.png" alt="formation développeur" width="70"/>
                    </figure>
                    <h2>Projets webs</h2>
                    <figure>
                        <img src="./images/screen.png" alt="formation développeur" width="70"/>
                    </figure>
                </div>
                <p>Projets webs réalisés en formation ou en alternance.</p>
                <nav>
                    <ul>
                        {
                            techArray.map((tech, index)=>(
                                <li key={index} onClick={()=>{handleClick(tech)}}><FontAwesomeIcon icon={faComputerMouse} color="#fff"/>{tech.toUpperCase()}</li>
                            ))
                        }
                    </ul>
                </nav>
            </header>

            <article className='portfolio__section__article'>
                {
                    projectToDisplay.map((project, idx)=>{
                        if(project.visibility === 'true') return project.visibility && <DisplayWebProjects key={idx} project={project}/>
                    }

                    )
                }
            </article>

        </section>
    );
};

export default Portfolio;