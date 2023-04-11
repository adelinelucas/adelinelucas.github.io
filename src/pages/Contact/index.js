import React, { useEffect, useState } from 'react';
import '../../App.scss';
import Loader from 'react-loaders';
import './style.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Contact = () => {
    console.log(process.env.REACT_APP_API_KEY)
    const center=['48.912259', '2.384049'];
    const url = `https://maps.geoapify.com/v1/tile/osm-carto/{z}/{x}/{y}.png?apiKey=${process.env.REACT_APP_API_KEY}`
    
    const [renderLoader, setRenderLoader] = useState(true);
    useEffect(()=>{          
        const timer = setTimeout(() => {
            setRenderLoader(false) ;
                    console.log(renderLoader)
            }, 1000);
        
        return () => clearTimeout(timer);

    }, [])

    if(renderLoader) return <Loader type='ball-rotate'/>
    
    return (
        <section className='contact__section'>
            <article className='contact__section__article-infos'>
                <h2>Une entreprise oui, mais quel secteur ?</h2>
                <p>Je recherche une entreprise basée sur Paris ou au nord de l'Ile-de-France.</p>
                <p>100 % présentiel ou avec une partie en distanciel, mais je ne suis pas fan du 100 % distanciel en tant que junior ! :)</p>
                <figure>
                    <img src="./images/team_work.png" alt="Réunion d'équipe" width="155" />
                </figure>
            </article>
            <article className="contact__section__article-map">
                <MapContainer
                    center={center}
                    zoom={15}
                >
                    <TileLayer
                    url={url}
                    attribution='Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>' />
                </MapContainer>
            </article>
        </section>
    );
};

export default Contact;