import React from 'react'

const Travail = () => {
    return (
        <div id='travail-container'>
            <h2>Notre travail</h2>
            <ul id="travail-btns-list">
                <li>Tout</li>
                <li>Web design</li>
                <li>Développement</li>
                <li>Branding</li>
                <li>Maintenance</li>
            </ul>
            <div id="projects-container">
                <div className='project-card'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        Thomas Jardin Photographie
                    </h4>
                </div>
                <div className='project-card'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        MUS
                    </h4>
                </div>
                <div className='project-card'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        El Rap El Arabi
                    </h4>
                </div>
                <div className='project-card'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        Mission Climat
                    </h4>
                </div>
                <div className='project-card'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        Gris
                    </h4>
                </div>
                <div className='project-card'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        Camerashop
                    </h4>
                </div>
            </div>
            <div className='more-projects-container'>
                <div>Plus de projets</div>
            </div>
        </div>
    )
}

export default Travail
