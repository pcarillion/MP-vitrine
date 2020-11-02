import React, {useState, useEffect} from 'react'

import Isotope from 'isotope-layout/js/isotope'

const Travail = ({mode}) => {

    const [btnClicked, setBtnClicked] = useState(0)

    const mainBG = {
        backgroundColor: 'white'
    }
    const fonth2 = {
        color: '#207D85',
    }

    const fontBtn = {
        color: '#207D85',
        opacity : "0.4"
    }
    const fontBtnDep = {
        color: '#207D85',
        opacity : "1"
    }


    const moreProjectsStyle = {
        border: '1px solid #207D85',
        color: '#207D85',
    }

    if (mode === 'Paul') {
        mainBG.backgroundColor= '#333333'
        fonth2.color = '#F46B47'
        fontBtn.color = '#FCF3EB'
        fontBtnDep.color = '#FCF3EB'
    }

    // isotope config

    var iso = new Isotope('#projects-container', {
        itemSelector: '.project-card',
        layoutMode: 'fitRows'
    })






    function handleFilter(e) {

        console.log(fontBtn)

        var filterBtns = document.querySelectorAll('.filter-btns')
        for (let i = 0; i < filterBtns.length; i ++) {
            if (filterBtns[i] === e.target) {
                filterBtns[i].style.opacity = "1"
            } else (
                filterBtns[i].style.opacity = "0.4"
            )
        }
        var value = e.target.getAttribute('data-filter')
        iso.arrange({filter: value})
    }


    return (
        <div id='travail-container' style = {mainBG}>
            <h2 style = { fonth2 } id='travail-id'>Notre travail</h2>
            <ul id="travail-btns-list">
                <li style = { fontBtnDep } onClick={handleFilter} className='filter-btns' data-filter='*'>Tout</li>
                <li style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='.web-design'>Web design</li>
                <li style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='.developpement'>Développement</li>
                <li style = { fontBtn } className='filter-btns'>Branding</li>
                {/* <li style = { fontBtn } className='filter-btns'>Maintenance</li> */}
            </ul>
            <div id="projects-container">
                <div className='project-card developpement'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        Thomas Jardin Photographie
                    </h4>
                </div>
                <div className='project-card web-design'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        MUS
                    </h4>
                </div>
                <div className='project-card developpement'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        El Rap El Arabi
                    </h4>
                </div>
                <div className='project-card developpement'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        Mission Climat
                    </h4>
                </div>
                <div className='project-card web-design'>
                    <div className='project-image'>
                        <div></div>
                    </div>
                    <h4>
                        Gris
                    </h4>
                </div>
                <div className='project-card web-design'>
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
