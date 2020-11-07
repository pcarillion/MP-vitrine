import React, {useState} from "react"

import Img from 'gatsby-image'

import ToggleMode from './../components/ToggleMode'

import Nav from './../components/Nav'
import Layout from './../components/Layout'
import Header from './../components/Header'
import Services from './../components/Services'
import Travail from './../components/Travail'
import Tarifs from './../components/Tarifs'
import About from './../components/About'
import Footer from './../components/Footer'

import Contact from './../components/Contact'

export default function Home() {

  const [mode, setMode] = useState('MP')
  const[contactModalOpened, setModal] = useState(false)

  function handleMode (x) {
    setMode(x)
  }

  function handleModal(x) {
    setModal(x)
  }

  return <Layout>
            
            <ToggleMode mode={mode} callback={handleMode}/>
            
            <Nav mode={mode} openModal={handleModal}/>

            <Contact open={contactModalOpened} openModal={handleModal}/>

            <Header mode={mode} openModal={handleModal}/>
            <Services mode={mode}/>
            <Travail mode={mode} composant={true}/>
            <Tarifs mode={mode}/>
            <About mode={mode}/>
            
            <Footer mode={mode}/>
  </Layout>
}
