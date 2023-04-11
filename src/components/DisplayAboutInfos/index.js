import React, { useState } from 'react';
import './style.css';
const DisplayAboutInfos = ({info}) => {
    const [showInfo, setShowInfo] = useState(false);
    const [displayCardInfo, setDisplayCardInfo] = useState(false)
    const handleClick = ()=>{
        setShowInfo(!showInfo)
        setDisplayCardInfo(!displayCardInfo)
    }
    return (
        <aside className={displayCardInfo ? 'about__section__aside display-content' : 'about__section__aside'}>
            
            {!showInfo && 
                <div className='about__section__aside-front-card'>
                    <h5>{info.titre}</h5>
                    <button onClick={handleClick}>C'est à dire ? 🧐</button>
                </div>
            }
                
            {showInfo &&
                <div className='about__section__aside-content'>
                    <h5>{info.titre}</h5>
                    {info?.description && <p> {info.description}</p>}
                    {info?.expl && <p> {info.expl}</p>}
                    <button onClick={handleClick}>Back</button>
                </div>
            }
        </aside>
    );
};

export default DisplayAboutInfos;