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
                <h2 id="about-title" style = {fontColor}>Nous on est des BG alors on parle de nous un peu quand même.</h2>
                <p style = {fontColor}>
                    Lorem ipsum amet, consectetur adipiscing elit. Consectetur imperdiet congue nulla augue Donec tellus maecenas proin phasellus nec scelerisque. Faucibus libero vel. Eu scelerisque
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
