import React from 'react';
import './style.css';
import data from '../../datas/cv.json';
import DisplayExpPro from '../../components/DisplayExpPro';

const ExperiencesPro = () => {
    const {webDev, avantReconversion, formationUniversitaire} = data;

    return (
        <section className='exp-pro__section'>
            <article className='exp-pro__section__article'>
                <figure>
                    <h2>Reconversion développeuse web</h2>
                    <img src="./images/screen.png" alt="formation développeur" width="130" />
                </figure>
                {
                    webDev.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="webDev"/>
                    ))
                }
            </article>
            <article className='exp-pro__section__article'>
                <figure>
                    <h2>Expériences avant reconversion</h2>
                    <img src="./images/working_woman.png" alt="formation développeur" width="130" />
                </figure>
                {
                    avantReconversion.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="avantReconversion"/>
                    ))
                }
            </article>
            <article className='exp-pro__section__article'>
                <figure>
                    <h2>Formation Universitaire</h2>
                    <img src="./images/university.png" alt="formation développeur" width="130" />
                </figure>
                {
                    formationUniversitaire.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="formationUniversitaire"/>
                    ))
                }
            </article>
        </section>
    );
};

export default ExperiencesPro;