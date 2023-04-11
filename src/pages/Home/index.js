import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    let [baseline, setBaseline] = useState([]);
    let [baselineIndex, setBaselineIndex]= useState(0)
    const speed = 150;
    const injectTab = () =>{
        let tab = document.getElementById('baseline-tab')
        tab.style.borderRight = '4px solid #190F26';
        tab.classList.add('tab-animated')
    }


    useEffect(()=>{
        const interval = setInterval(()=>{
            const baselineComplete= 'Adeline, développeuse junior'.split('');

            if(baselineIndex <= baselineComplete.length){
                setBaseline(oldArray => [...oldArray,baselineComplete[baselineIndex]])
                setBaselineIndex(baselineIndex + 1);
                if(baselineIndex === baselineComplete.length){
                    injectTab()
                }
            }else{
                clearInterval(interval);
            }
        },speed)

        return ()=>{
            clearInterval(interval)
        }
    }, [baselineIndex])
    return (
        <section className='home'>
            <h1 id="baseline">{baseline}<span id="baseline-tab"></span></h1>
            <div className="home__div">
                <article className='home__article'>
                    <p>Après une année d'alternance en tant que dévelopeurse full stack, je souhaite rejoindre une équipe de dev !
                    <br/>Profil fullstack avec une petite préférence pour le front.
                    <br/>A travers ce portfolio je vous partage les projets que j'ai pu développer en entreprise ou en formation.
                    </p>
                    <Link to="./portfolio">Projets Web<FontAwesomeIcon icon={faHandPointer} color="#fff" /></Link>
                    <p>Forte de cette année d'alternance et de mes précédentes expériences professionnelles, découvrez-en plus sur mon profil et comment je pourrais m'intégrer à votre équipe !</p>
                    <Link to="./about">Ma personnalité<FontAwesomeIcon icon={faHandPointer} color="#fff" /></Link>  
                    <Link to="./ressourcesPDF/rapportAlternance_SV.pdf" download target='_blank'>
                        Rapport d'alternance<FontAwesomeIcon icon={faHandPointer} color="#fff" />
                    </Link>     
                </article>
                <figcaption>
                    <img src="./images/tech_woman.png" alt="Illustration d'une développeuse web" width='300' height='auto' />
                </figcaption>
            </div>
            
        </section>
        
    );
};

export default Home;