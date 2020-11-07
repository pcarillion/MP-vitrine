import React, {useState, useEffect} from "react"
import Layout from '../components/Layout'
import TravailComposant from '../components/Travail'
import ToggleMode from '../components/ToggleMode'

const NotreTravail = () => {

    const [mode, setMode] = useState('MP')

    function handleMode (x) {
      setMode(x)
    }

    useEffect(() => {
        if (mode == 'Paul') {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#333333';
        }
        return () => {
            document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
        }
    }, mode)

    return (
        <Layout>
                <ToggleMode mode={mode} callback={handleMode}/>
                <TravailComposant mode={mode} composant={false}/>
        </Layout>
    )
}

export default NotreTravail
