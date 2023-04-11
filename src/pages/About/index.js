import React from 'react';
import './style.css';
import data from '../../datas/qualitesDefauts.json';
import DisplayAboutInfos from '../../components/DisplayAboutInfos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareFull, faCheck,faBullseye, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const About = () => {
    const {qualites, defauts, attentes} = data;
    return (
        <section className='about__section'>
            <header className='about__section__header'>
                <div> 
                    <figcaption>
                        <img src="./images/laptop.png" alt="illustration câble internet" width="100"   />
                    </figcaption>
                    <h2>Hello world ;)</h2>
                </div>
                    <i>A travers cette page, je vous propose de faire connaissance, d'en savoir un peu plus sur les raisons de ma reconversion et comment je pourrais m'intégrer dans votre équipe! (et oui, je n'oublie pas l'essentiel)! </i>
                    <figcaption>
                        <img src="./images/ethernet_cable_v2.png" alt="illustration câble internet" width="120"   />
                    </figcaption>
            </header>
            <nav className='about__section__nav'>
                <ul>
                    <li><a href="#avantReconversion"><FontAwesomeIcon icon={faSquare} color="#9959f7"/>Parcours avant reconversion</a></li>
                    <li><a href="#paroursReconversion"><FontAwesomeIcon icon={faSquare} color="#9959f7"/>Parcours de reconversion</a></li>
                    <li><a href="#integrationEquipe"><FontAwesomeIcon icon={faSquare} color="#9959f7"/>Qualités - Défauts - Attentes en entreprise</a></li>
                    <li><a href="#traitspersonnalites"><FontAwesomeIcon icon={faSquare} color="#9959f7" />Et sinon dans la vie</a></li>
                </ul>
            </nav>
            <article id="avantReconversion">
                <h3>👩‍🎓 Par où commencer pour présenter mon parcours un peu atypique.</h3>
                <p>J'ai commencé par une formation universitaire en Droit, spécialisé droit public. J'ai adoré ma formation, les matières étaient passionnantes, mais je n'arrivais pas à me projeter dans un futur professionnel. J'ai fait une année en Erasmus, prendre le large, bon ok l'Espagne ce n'est pas si loin que ça! Cette année d'Erasmus ma fait prendre en maturité et m'a permis d'éveiller une consience écologique. A mon retour, c'était décidé, je suivrai un parcours droit environnement.</p>
                <p>J'ai suivi un master en Droit de l'Environnement à l'Université de Nantes. A l'issue de ce master, j'ai fais un service civique dans l'administration, pour la mise en place d'une collecte de déchets. Et paf,c'est le déclic je souhaitais travailler dans le domaine des déchets. J'ai rejoint l'équipe des Joyeux Recycleurs en tant que chargée de dévéloppement, les missions étaient trés diverses : gestion d'une équipe de 13 collecteurs, gestion des plannings, responsable du suivi client. J'ai énormément appris durant cette experience.</p><p>Souhaitant rester dans l'environnement, j'ai rejoint l'équipe de Economie d'Energie, une entreprise qui assure la gestion des Certificats d'Economie d'Energie pour ses clients.</p><p>J'ai excercé le métier assistante Grands Comptes, puis de Responsable Grand Comptes, cette expérience m'a permis d'être au coeur de l'entreprise et d'échanger régulièrment avec l'équipe projet, en charge de la gestion des plateformes web pour les bénéficiaires des Certificats d'Economie d'Energie.</p>
                <br/>
                <p>Cette expérience m'a aussi fait prendre conscience que malgré les responsabilités qui m'étaient confiées, je n'étais pas épannouie dans ce métier. J'avais besoin d'un métier autonome où je puisse être en controle de ce que je produisait. J'ai engagé ue réflexion sur ce que j'attendais d'un travail. J'avais besoin d'un métier où : </p>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} color="#9959f7"/>je peux être en <em>autonomie</em>,</li>
                    <li><FontAwesomeIcon icon={faCheck} color="#9959f7"/>j'ai la possibilité d'être en <em>apprentissage constant</em>,</li>
                    <li><FontAwesomeIcon icon={faCheck} color="#9959f7"/>un métier <em>créatif</em>,</li>
                    <li><FontAwesomeIcon icon={faCheck} color="#9959f7"/>un métier qui me permette dans un <em>temps raisonnable</em> de me reconvertir.</li>
                </ul>
            </article>
            <article id="paroursReconversion">
                <h3>💻 ⌨️ Mon parcours de reconversion ! </h3>
                <p>J'ai tout d'abord réalisé une formation sur 15 jours pour confirmer mon attrait pour ce nouveau métier que je découvrais. On a pu découvrir HTML, CSS et wordpress, le projet final était un projet ou l'on devait refaire un site wordpress pour un auto-entrepreneur, ça a vraiment été le déclic. </p>
                <p>J'ai poursuivi avec une formation de 4 mois avec l'organisme <strong>Women in Digital</strong> et l'école <strong>Web Force 3</strong>, formation hyper instense ou l'on a pu découvrir : HTML/ CSS/ JS/ JQuery/ Ajax/ Angular/ PHP/ Symfony/...</p><p>La formation était vraiment complète, mais découvrant tout juste le développement web, je souhaitais consolider ces acquis tout en continuant à apprendre.</p>
                <p>J'ai réalisé une année d'alternance avec l'école <strong>3WAcademy</strong>, le format était de 3 semaines en entreprise et 1 semaine d'école.</p><p>Cette année d'alternance a été un vrai challenge et les premiers mois ont été une vraie confrontation à la réalité du métier de développeuse et m'a permis de mesurer que je n'étais qu'au tout début de cet apprentissage.</p>
                <p>J'ai été accueilli dans une petite équipe de 3 personnes : 1 chargé de projet, un développeur et un alternant de 2ième année. J'ai travaillé en JS et PHP principalement, sur la création d'outil interne pour automatiser certains process:</p>
                <ul>
                    <li><FontAwesomeIcon icon={faSquare} color="#9959f7"/>générateur de landings page,</li>
                    <li><FontAwesomeIcon icon={faSquare} color="#9959f7"/>générateur d'offre,</li>
                    <li><FontAwesomeIcon icon={faSquare} color="#9959f7"/>un outil pour gérer l'association des offres aux landings et gérer leur activation.</li>
                </ul>
                <br/>
                <p>Cette année d'alternance a été tout aussi intense, si les premiers mois ont vraiment été compliqués, j'ai continué à travailler les cours et les notions les weekends (FreeCodeCamp est devenu mon meilleur ami), j'ai toujours cherché à progresser.</p>

                <p>Pour en savoir plus sur mon parcours, je vous laisse consulter une partie de mon rapport d'alternance :</p>
                <Link to="./ressourcesPDF/rapportAlternance_SV.pdf" download target='_blank'>
                    Rapport d'alternance<FontAwesomeIcon icon={faHandPointer} color="#fff" />
                </Link> 
                <p>Mais également la présentation réalisée à l'occasion de ma soutenance de projet :</p>
                <Link to="./ressourcesPDF/projetFinAlternance_VA.pdf" download target='_blank'>
                       Présentation projet de formation<FontAwesomeIcon icon={faHandPointer} color="#fff" />
                </Link> 
                <p>Forte de cette année d'alternance, j'espère pouvoir intégrer au mieux dans les missions qui me seront confiées.</p>
            </article>
            <article id="integrationEquipe">
                <h3>💼 💻 🚀 Pourrais-je m'intégrer dans votre équipe ?</h3>
                <p>Mon profil vous intéresse ? Et oui c'est normal une junior motivée à apprendre, je vous comprends ! Mais pas si vite, c'est important de savoir si je peux vraiment convenir à votre équipe; aussi je vous propose d'anticiper sur les fameux "3 qualités / 3 défauts" des entretiens.</p>
                <p>L'idée est que je puisse également vous dire ce que j'attends d'une entreprise, et oui une relation c'est 50/50! :) Et un employé.e qui se sent bien dans son environnement pro c'est toujours gagnant pour l'entreprise.</p>
                <div>
                    <h4><FontAwesomeIcon icon={faBullseye} color="#9959f7"/>Qualités</h4>
                    <div className='about__section__infosContent'>
                    {
                        qualites.map((info, idx)=>(
                            <DisplayAboutInfos key={idx} info={info}/>
                        ))
                    }
                    </div> 
                </div>
                <div>
                    <h4><FontAwesomeIcon icon={faBullseye} color="#9959f7"/>Axes de progression</h4>
                    <div className='about__section__infosContent'>
                    {
                        defauts.map((info, idx)=>(
                            <DisplayAboutInfos key={idx} info={info}/>
                        ))
                    }
                    </div>
                </div>
                <div>
                    <h4><FontAwesomeIcon icon={faBullseye} color="#9959f7"/>Ce que j'attends de ma future équipe</h4>
                    <div className='about__section__infosContent'>
                    {
                        attentes.map((info, idx)=>(
                            <DisplayAboutInfos key={idx} info={info}/>
                        ))
                    }
                    </div>
                </div>
            </article>
            <article id="traitspersonnalites">
                <h3>🤠 ☕ ☕ 💃 Et à part le boulot ? </h3>
                <p>Et oui, le travail le point principal mais qu'est-ce que je peux raconter d'autres à la machine à café!</p>
                <p>Le café ? Moi, non j'en bois jamais, bon ok j'avoue tout il se pourrait que j'ai une addition au café ! Mis à part le café, j'apprécie bien évidemment les afterworks, les parties de babyfoot (bien que mon niveau soit proche de néant) et les karaokés endiablés!</p>
                <p>Autre point notable, j'aime beaucoup travailler avec mes écouteurs, cela m'aide comme beaucoup à me focus. Une playlist de musique latine et c'est parti pour la journée, ok je me dandine parfois sur ma chaise, mais promis je ne chante pas!</p>
                <p>Si ces deux dernières années ont tourné autour du dev, je reste une personne qui s'intéresse à tout. Mon rituel du matin c'est d'écouter les infos à la radio ce me donne souvent de quoi débriefer à la machine à café. Bon comme je me prépare en même temps, il se peut que je n'aie qu'une moitié d'info!</p>
                <p>J'adore également cuisiner, je m'essaie au pain maison, crême maison, même si je ne saurais expliquer que parfois tout ce que je cuisine est loupé.</p>
                <p>Autre grande passion, le bricolage et l'upcycling, j'ai rénové en partie mon appartement, et j'adore particulièrement rénover des meubles, poncer, repeindre, changer leur fonction initiale.</p>
                <p>Et le gaming ?, euh, je ne suis pas une grande gameuse même si je commence à m'y mettre ; mais pour donner une idée du niveau, je suis le genre de personne qui bouge la tête et la manette quand il faut tourner sur Mario Kart !</p>
            </article>
            <aside className='about__section__footer'>
                <figcaption>
                    <img src="./images/internet.png" alt="illustration câble internet" width="120"   />
                </figcaption>
            </aside>
        </section>
    );
};

export default About;