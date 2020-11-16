import React, {useState, useEffect, useRef} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


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
                slug
            }
        }
    }
}
`


const Travail = ({mode, composant}) => {

    var limit = 100;
    if (composant == true) {
        limit = 6;
    }
    const projectImages = useRef(null);
    const {projets} = useStaticQuery(query);

    console.log(projets)

    const [btnClicked, setBtnClicked] = useState(0)
    const [projectsDisplayed, setProjectsDisplayed] = useState([])
    const [category, setCategory] = useState('all')

    useEffect(() => {
        if ((mode == 'Marine' && category == 'Développement') || (mode == 'Paul' && category == 'Branding')) {
            document.getElementById('btn-all').click()
            setBtnClicked(1)
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
        document.querySelectorAll('.filter-btns')[btnClicked].click()
        setProjectsDisplayed(array)
        


    }, [mode, category])
    
    
        function handleFilter(e) {
            var filterBtns = document.querySelectorAll('.filter-btns')
            for (let i = 0; i < filterBtns.length; i ++) {
                if (filterBtns[i] === e.target) {
                    filterBtns[i].style.opacity = "1"
                    filterBtns[i].style.border = clickedBorder.border
                    setBtnClicked(i)
                } else {
                    filterBtns[i].style.opacity = "0.4"
                    filterBtns[i].style.border = "solid 1px rgba(0,0,0,0)"
                }
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
        opacity : "0.4",
        border: 'solid 1px rgba(0,0,0,0)',
        cursor: 'pointer'
    }


    const moreProjectsStyle = {
        border: '1px solid #207D85',
    }

    const clickedBorder = {
        border: '1px solid #207D85'
    }

    const retourBtn = {
        border: '1px solid #207D85',
        left: '0',
        position: 'fixed',
        padding: '5px 20px', 
        borderRadius: '90px',
        margin: '24px 30px'
    }

    if (mode === 'Paul') {
        mainBG.backgroundColor= '#333333'
        fonth2.color = '#F46B47'
        fontBtn.color = '#FCF3EB'
        clickedBorder.border = '1px solid #FCF3EB'
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
            {composant == false && 
                <AniLink to='/' style={retourBtn} className='btn2'>Retour</AniLink>
            }
            <h2 style = { fonth2 } id='travail-id'>
                {mode === 'MP' ? "Notre travail" : `Le travail de ${mode}`}
            </h2>
            <ul id="travail-btns-list">
                <li id = 'btn-all' style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='all'>Tout</li>
                <li style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='Web design'>Web design</li>
                {mode != 'Marine' && <li style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='Développement'>Développement</li>}
                {mode != 'Paul' && mode != 'MP' && <li style = { fontBtn } onClick={handleFilter} className='filter-btns' data-filter='Branding'>Branding</li>}
                {/* <li style = { fontBtn } className='filter-btns'>Maintenance</li> */}
            </ul>
            <div id="projects-container">
                {projectsDisplayed.length > 0 && projectsDisplayed.map((project, i) => {
                    var slug = project.node.slug? `/${project.node.slug}` : '/'
                    if (i < limit) {
                        return <AniLink to className='project-card fade-in' key={i} to={`/projets${slug}`}>
                    <div className='project-image-div'>
                            {project.node.imagePrincipale && <BackgroundImage className='project-image' fluid={project.node.imagePrincipale.fluid}/>}
                            <div className="plus-div">
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                    </div>
                    <h4>
                        {project.node.titre}
                    </h4>
                </AniLink>
                    }
                })}
            </div>
            {composant == true && <div className='more-projects-container'>
                <AniLink to='/notre-travail' style={moreProjectsStyle} className='btn2'>Plus de projets</AniLink>
            </div>}
        </div>
    )
}

export default Travail
