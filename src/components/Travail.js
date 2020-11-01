import React from 'react'

const Travail = () => {

    const fonth2 = {
        color: '#207D85',
    }

    const fontBtn = {
        color: '#207D85',
    }

    const moreProjectsStyle = {
        border: '1px solid #207D85',
        color: '#207D85',
    }

    return (
        <div id='travail-container'>
            <h2 style = { fonth2 }>Notre travail</h2>
            <ul id="travail-btns-list">
                <li style = { fontBtn }>Tout</li>
                <li style = { fontBtn }>Web design</li>
                <li style = { fontBtn }>Développement</li>
                <li style = { fontBtn }>Branding</li>
                <li style = { fontBtn }>Maintenance</li>
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
                <div style={moreProjectsStyle}>Plus de projets</div>
            </div>
        </div>
    )
}

export default Travail
