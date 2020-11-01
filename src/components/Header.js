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

const Header = () => {

    const {image} = useStaticQuery(query);

    console.log(image)
    return (
        <header>
  <section className='title-section'>
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh. 
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit convallis posuere varius nibh. Risus id duis et purus dui aliquet ut laoreet. Et lacinia sagittis et massa nisl velit ipsum maecenas. Diam vel vestibulum dictum euismod.
    </p>
    <div className='header-btns-container'>
      <div>
        Demander un devis
      </div>
      <div>
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
