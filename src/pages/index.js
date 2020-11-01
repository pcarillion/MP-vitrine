import React from "react"


import Img from 'gatsby-image'
import Nav from './../components/Nav'
import Layout from './../components/Layout'
import Header from './../components/Header'
import Services from './../components/Services'
import Travail from './../components/Travail'
import Tarifs from './../components/Tarifs'
import About from './../components/About'
import Footer from './../components/Footer'


export default function Home() {

  const Paul = false

  return <Layout>
            <Nav></Nav>

{/* Header */}

<Header Paul={Paul}/>

{/* Nos services  */}

<Services/>

{/* Notre travail */}

<Travail/>

{/* Nos tarifs */}

<Tarifs/>

{/* Qui sommes nous */}

<About/>

            <Footer></Footer>

  </Layout>
}
