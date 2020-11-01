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


export default function Home() {

  const [mode, setMode] = useState('MP')

  function handleMode (x) {
    setMode(x)
  }


  return <Layout>
            
            <ToggleMode mode={mode} callback={handleMode}/>
            
<Nav mode={mode}/>
<Header mode={mode}/>
<Services mode={mode}/>
<Travail mode={mode}/>
<Tarifs mode={mode}/>
<About mode={mode}/>
<Footer mode={mode}/>
  </Layout>
}
