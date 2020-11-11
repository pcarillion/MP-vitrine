import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'


import Img from 'gatsby-image'

const query = graphql`
query {
    image:file(relativePath:{eq:"webdev2.png"}){
      relativePath
      childImageSharp{
        fluid(quality:100, maxWidth: 4160){
          ...GatsbyImageSharpFluid
          }
        }
  }
}
`

const Header = ({mode, openModal}) => {

    const {image} = useStaticQuery(query);

    const headerStyle = {
        backgroundColor: '#FCE7D5'
    }

    const fontStyle ={
        color: '#F46B47'
    }


    if (mode === 'Paul') {
        headerStyle.backgroundColor ='#002C3B'
        fontStyle.color = '#FCF3EB'
    } else if (mode === "Marine") {
        headerStyle.backgroundColor ='#F7FDFE'

    }

    return (
        <header style = { headerStyle }>
            <section className='title-section'>
                <h1 style = {fontStyle}>
                MP, Marine et Paul, designeuse et développeur de sites web 
                </h1>
                <p style = {fontStyle}>
                Une designeuse et un développeur s'associent pour créer et développer des sites web faits sur mesure. De la conception graphique au déploiement, nous répondons à votre besoin spécifique, pour un prix plus que raisonnable. 
                </p>
                <div className='header-btns-container'>
                    <div className='header-btn-1 btn' onClick={() => openModal(true)}>
                        Demander un devis
                    </div>
                    <a href="javascript:document.getElementById('travail-id').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});">
                        <div className='header-btn-2'>
                            Voir notre travail
                        </div>
                    </a>
                </div>
            </section>
            <section className='main-image-section'>
                <Img fluid={image.childImageSharp.fluid} alt="presentation MP"/>
            </section>
        </header>
    )
}

export default Header
