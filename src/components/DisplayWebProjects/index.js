import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, chev } from '@fortawesome/free-solid-svg-icons';
const DisplayWebProjects = ({project, idx}) => {

    return (
        <article className='portfolio__section__article-project' key={idx}>
           <img className='portfolio__section__article-cover' src={project.cover?project.cover : './images/internet.png' } alt={project.title}/>
            <div className='portfolio__section__article-content'>
                <div className='portfolio__section__article-content-header'>
                    <h3 className='portfolio__section__article-title'>{project.titre} <FontAwesomeIcon icon={faChevronDown} color="#fff" /></h3>
                    <p>
                    {
                        project.technosTag.map((tech, index)=>(
                            <span key={index}>{tech}</span>
                        ))
                    }
                </p>
                </div>
                <p className='portfolio__section__article-description'> {project.description}</p>
                <div className='portfolio__section__article-content-footer'>
                    <h4>{project.typeProjet}</h4>
                    {project.url &&<a href={project.url} target="_blank" onClick={()=> window.open(project.url)}>Voir le project</a>}
                </div >
            </div> 
        </article>
    );
};

export default DisplayWebProjects;