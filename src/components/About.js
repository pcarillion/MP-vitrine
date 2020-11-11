import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'


import Img from 'gatsby-image'

const query = graphql`
query {
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
const About = ({mode}) => {
    const {imageMarine, imagePaul} = useStaticQuery(query);
    const bg = {
        backgroundColor: '#FCE7D5'
    }
    const fontColor = {
        color: '#F46B47'
    }
    if (mode === 'Paul') {
        bg.backgroundColor= '#002C3B'
        fontColor.color = '#FCF3EB'
    } else if (mode === 'Marine') {
        bg.backgroundColor= '#F7FDFE'
    }

    return (
        <div id="about-container" style={bg}>
            <section>
                <h2 id="about-title" style = {fontColor}>
                    Deux professionnel.les qui sauront être à l'écoute de votre besoin
                </h2>
                <p style = {fontColor}>
                    Nous sommes salarié.es de l'entreprise <a href='www.ringover.fr' target='_blanck' className='orange'>Ringover</a>, Marine en tant que graphiste et Paul en tant que dev fullstack.
                    Nous avons l'habitude de travailler ensemble, et surtout nous sommes ami.es. Passionné.es par notre métier, nous attendons vos projets avec impatience. 
                </p>
            </section>
            <section id='about-images-container'>
                {(mode === 'Marine' || mode == 'MP') && <div>
                    <div>
                        <Img className='about-image' fluid={imageMarine.childImageSharp.fluid} alt="sudfa logo"/>
                    </div>
                </div>}
                {(mode === 'Paul' || mode == 'MP') && <div>
                    <div>
                        <Img className='about-image' fluid={imagePaul.childImageSharp.fluid} alt="sudfa logo"/>
                    </div>
                </div>}
            </section>
        </div>
    )
}

export default About
