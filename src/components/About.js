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
const About = () => {
    const {imageMarine, imagePaul} = useStaticQuery(query);

    return (
        <div id="about-container">
            <section>
                <h2>Nous on est des BG alors on parle de nous un peu quand même.</h2>
                <p>
                    Lorem ipsum amet, consectetur adipiscing elit. Consectetur imperdiet congue nulla augue Donec tellus maecenas proin phasellus nec scelerisque. Faucibus libero vel. Eu scelerisque
                </p>
            </section>
            <section id='about-images-container'>
                <div>
                    <div>
                        <Img className='about-image' fluid={imageMarine.childImageSharp.fluid} alt="sudfa logo"/>
                    </div>
                </div>
                <div>
                    <div>
                        <Img className='about-image' fluid={imagePaul.childImageSharp.fluid} alt="sudfa logo"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
