import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'


import Img from 'gatsby-image'

const query = graphql`
query {
    image:file(relativePath:{eq:"webdev2.png"}){
      relativePath
      childImageSharp{
        fluid(quality:90, maxWidth: 4160){
          ...GatsbyImageSharpFluid
          }
        }
  }
}
`

const Header = ({mode}) => {

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh. 
                </h1>
                <p style = {fontStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit convallis posuere varius nibh. Risus id duis et purus dui aliquet ut laoreet. Et lacinia sagittis et massa nisl velit ipsum maecenas. Diam vel vestibulum dictum euismod.
                </p>
                <div className='header-btns-container'>
                    <div className='header-btn-1'>
                        Demander un devis
                    </div>
                    <div className='header-btn-2'>
                        Voir notre travail
                    </div>
                </div>
            </section>
            <section className='main-image-section'>
                <Img fluid={image.childImageSharp.fluid} alt="sudfa logo"/>
            </section>
        </header>
    )
}

export default Header
