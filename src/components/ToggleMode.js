import React, {useState} from 'react'

const ToggleMode = ({mode, callback}) => {

    const [displayBtns, setDisplayBtns] = useState(false);

    const displayed = {
        display : 'none'
    }

    if (displayBtns == true) {
        displayed.display = 'block'
    }


    // btn style

    const active = {
        backgroundColor: '#F46B47',
        color: 'white'
    }
    const inactive = {

    }

    if (mode === 'Paul') {
        inactive.color = 'white'
        active.color = '#207D85'
        active.backgroundColor = 'rgb(252, 243, 235)'
    }

     function toggleDisplay() {
        if (displayBtns == false) {
            setDisplayBtns(true)
        } else {
            setDisplayBtns(false)
        }
    }

    const handleMode = (e) => {
        if (e.target.innerHTML === 'M') {
            callback('Marine')
        } else if (e.target.innerHTML === 'MP') {
            callback('MP')
        } else if (e.target.innerHTML === 'P') {
            callback('Paul')
        }
    }

    return (
        <div className='toggle-btns-container'>
            <div id='main-toggle-btn' onClick={toggleDisplay} style = {active}>
                MP
            </div>
            <div id='toggle-btns' style={ displayed }>
                <div onClick={handleMode} style = {mode === 'Marine' ? active : inactive}>M</div>
                <div onClick={handleMode} style = {mode === 'MP' ? active : inactive}>MP</div>
                <div onClick={handleMode} style = {mode === 'Paul' ? active : inactive}>P</div>
            </div>
        </div>
    )
}

export default ToggleMode
