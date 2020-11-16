import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'


import Img from 'gatsby-image'

const query = graphql`
query {
    design:file(relativePath:{eq:"design.png"}){
        relativePath
        childImageSharp{
          fluid(quality:100, maxWidth: 4160){
            ...GatsbyImageSharpFluid
            }
          }
    }
    developpement:file(relativePath:{eq:"developpement.png"}){
      relativePath
      childImageSharp{
        fluid(quality:100, maxWidth: 4160){
          ...GatsbyImageSharpFluid
          }
        }
  }
  maintenance:file(relativePath:{eq:"maintenance.png"}){
    relativePath
    childImageSharp{
      fluid(quality:100, maxWidth: 4160){
        ...GatsbyImageSharpFluid
        }
      }
}
}
`
const Services = ({mode}) => {
    const {design, developpement, maintenance} = useStaticQuery(query);

    const mainBG = {
        backgroundColor: 'white'
    }

    const containerBG = {
        backgroundColor: '#F7FDFE'
    }

    const fonth2 = {
        color: '#F46B47',
        fontFamily: 'Alatsi',
        fontWeight: 400
    }

    const fontP = {
        color: 'black'
        // color: '#207D85'
    }

    if (mode === 'Paul') {
        mainBG.backgroundColor= '#333333'
        containerBG.backgroundColor = '#FCF3EB'
        fontP.color = '#207D85'
    } else if (mode === "Marine") {
        containerBG.backgroundColor = '#FCF3EB'
    }

    return (
        <div id='services-main-container' style = {mainBG}>
            <div id='services-container' style={containerBG}>
                <h2 style = { fonth2 } id='services-title'>
                    Nos services
                </h2>
                <div id='services-cards'>
                    <section>
                        <h4>
                            UX/UI Design
                        </h4>
                        <div className="services-icone"><Img fluid={design.childImageSharp.fluid} alt="logo design"/></div>
                        <p style = { fontP}>
                            Besoin d'un site vitrine ? D'un blog  ? D'une boutique e-commerce ? Quel que soit votre projet, nous vous accompagnons dans la conception de services intuitifs et d'interfaces esthétiques.                        </p>
                    </section>
                    <section>
                        <h4>
                            Développement
                        </h4>
                        <div className="services-icone"><Img fluid={developpement.childImageSharp.fluid} alt="logo dev"/></div>
                        <p style = { fontP}>
                            Le développement peut se faire sur du Wordpress et PHP, mais nous préférons utiliser des technologies nouvelles, performantes et écologiques, notamment la jamstack. 
                        </p>
                    </section>
                    <section>
                        <h4>
                            Maintenance
                        </h4>
                        <div className="services-icone"><Img fluid={maintenance.childImageSharp.fluid} alt="logo maintenance"/></div>
                        <p  style = { fontP}>
                            Une fois votre site web livré, nous ne vous abandonnons pas. Nous vous accompagnons dans vos désirs de changement et vos besoins de maintenance, que nous soyons où non les concepteurs d'origine. 
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Services
