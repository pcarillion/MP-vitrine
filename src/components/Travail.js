import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const query = graphql`
query{
	projets:allContentfulProjet{
        edges{
            node{
                titre
                client
                categorie
                annee
                auteur
                imagePrincipale{
                fluid{
                    ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
}
`


const Travail = ({mode}) => {

    const {projets} = useStaticQuery(query);

    console.log(projets)

    const [btnClicked, setBtnClicked] = useState(0)
    const [projectsDisplayed, setProjectsDisplayed] = useState([])
    const [category, setCategory] = useState('all')

    useEffect(() => {
        if (mode == 'Marine' && category == 'Développement') {
            document.getElementById('btn-all').click()
        } else if (mode == 'Paul' && category == 'Branding') {
            document.getElementById('btn-all').click()
        }
        var array = []
        if (category === 'all') {
            projets.edges.map(projet => {
                if (mode === 'Paul' && projet.node.auteur == 'Paul') {
                    return array.push(projet)
                } else if (mode === 'Marine' && projet.node.auteur == 'Marine') {
                    return array.push(projet)
                } else if (mode === 'MP' && projet.node.auteur == 'M&P') {
                    return array.push(projet)
                }
            })
        }
        else {
            projets.edges.map(projet => {
                if (mode === 'Paul' && projet.node.auteur == 'Paul' && projet.node.categorie.includes(category)) {
                    return array.push(projet)
                } else if (mode === 'Marine' && projet.node.auteur == 'Marine' && projet.node.categorie.includes(category)) {
                    return array.push(projet)
                } else if (mode === 'MP' && projet.node.auteur == 'M&P' && projet.node.categorie.includes(category)) {
                    return array.push(projet)
                }
            })
        }
        setProjectsDisplayed(array)
    }, [mode, category])
    
    
    
        function handleFilter(e) {
            var filterBtns = document.querySelectorAll('.filter-btns')
            for (let i = 0; i < filterBtns.length; i ++) {
                if (filterBtns[i] === e.target) {
                    filterBtns[i].style.opacity = "1"
                } else (
                    filterBtns[i].style.opacity = "0.4"
                )
            }
            var value = e.target.getAttribute('data-filter')
            setCategory(value)
            // console.log(value)
            // iso.arrange({filter: value})
        }
    
    


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
//     if (typeof window !== 'undefined') {

// 		const Isotope = require("isotope-layout/js/isotope");


//     var iso = new Isotope('#projects-container', {
//         itemSelector: '.project-card',
//         layoutMode: 'fitRows'
//     })

// }

    return (
        <div id='travail-container' style = {mainBG}>
            <h2 style = { fonth2 } id='travail-id'>Notre travail</h2>
            <ul id="travail-btns-list">
                <li id = 'btn-all' style = { fontBtnDep } onClick={handleFilter} className='filter-btns' data-filter='all'>Tout</li>
                <li style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='Web design'>Web design</li>
                {mode != 'Marine' && <li style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='Développement'>Développement</li>}
                {mode != 'Paul' && <li style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='Branding'>Branding</li>}
                {/* <li style = { fontBtn } className='filter-btns'>Maintenance</li> */}
            </ul>
            <div id="projects-container">
                {projectsDisplayed.length > 0 && projectsDisplayed.map((project, key) => {
                    console.log(project)
                    return <div className='project-card fade-in'>
                    <div className='project-image-div'>
                            {project.node.imagePrincipale && <BackgroundImage className='project-image' fluid={project.node.imagePrincipale.fluid}/>}
                    </div>
                    <h4>
                        {project.node.titre}
                    </h4>
                </div>
                })}
                

                {/* <div className='project-card developpement'>
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
                </div> */}
            </div>
            <div className='more-projects-container'>
                <div style={moreProjectsStyle}>Plus de projets</div>
            </div>
        </div>
    )
}

export default Travail
