import React from 'react'
import Img from 'gatsby-image'
import './../components/projet.css'
import {graphql, useStaticQuery} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from './../components/SEO'



const Projet = ({data}) => {
    console.log(data)
    const project = data.projet
    const imageMarine = data.imageMarine
    const imagePaul = data.imagePaul
    return (
        <div className='one-project-page'>
            <SEO title={project.titre} description={project.description ? project.description.description : ''}/>
            <div className='one-project-nav'><AniLink className='btn2' to='/'>Accueil</AniLink><AniLink className='btn2' to='/notre-travail'>Projets</AniLink></div>
            <div className='main-image-container'>
                <Img fluid={project.imagePrincipale.fluid} className='main-image'/>
            </div>
            <div className='project-info-container'>
                <div className='info-div-1'>
                    <div>
                        <h4 className='orange'>Client</h4>
                        <p>{project.client}</p>
                    </div>
                    <div>
                        <h4 className='orange'>Année</h4>
                        <p>{project.annee}</p>
                    </div>
                </div>
                <div className='info-div-2'>
                    <h4 className='orange'>Livraison</h4>
                    {project.categorie.map((categorie, i) => {
                        return  <p key={i}>
                                    {categorie}
                                </p>
                    })}
                </div>
                <div className='info-div-3'>
                    <h2 className='orange'>Une duo s'associe pour des sites clefs en main</h2>
                    <p>De la conception graphique jusqu'au déploiement et la prise en main du site, nous vous
                    accompagons et vous conseillons. Sites vitrines ou e-commerce, nous répondons à votre besoin,
                    pour un budget convenable.</p>
                </div>
            </div>
            <div className='project-info-container'>
                <div className='project-description'>
                    <h2 className='green'>{project.titre}</h2>
                    {project.description && <p>{project.description.description}</p>}
                </div>
                <div className='project-title-container'>
                    {/* <h1>{project.titre}</h1> */}
                    <section id='about-images-container'>
                        {(project.auteur === 'Marine' || project.auteur == 'M&P') && <div>
                            <div>
                                <Img className='about-image' fluid={imageMarine.childImageSharp.fluid} alt="sudfa logo"/>
                            </div>
                        </div>}
                        {(project.auteur === 'Paul' || project.auteur == 'M&P') && <div>
                            <div>
                                <Img className='about-image' fluid={imagePaul.childImageSharp.fluid} alt="sudfa logo"/>
                            </div>
                        </div>}
                    </section>
                </div>
            </div>
            {/* <div className='galerie-container'>
                <div className='galerie-image-1'></div>
                <div>
                    <div className='galerie-image-2'>

                    </div>
                    <div className='galerie-image-3'>

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export const query = graphql`
query getData($slug:String) {
	projet: contentfulProjet(slug:{eq:$slug}){
        titre
    auteur
    imagePrincipale{fluid{...GatsbyContentfulFluid}}
    client
    annee
    categorie
    enCours
    description{description}
    }

    imageMarine:file(relativePath:{eq:"Marine.jpg"}){
        relativePath
        childImageSharp{
        fluid(quality:90, maxWidth: 4160){
            ...GatsbyImageSharpFluid
            }
        }
    }
    imagePaul:file(relativePath:{eq:"Paul.jpg"}){
        relativePath
        childImageSharp{
        fluid(quality:90, maxWidth: 4160){
            ...GatsbyImageSharpFluid
            }
        }
    }
}
`

export default Projet
