import React, {useState} from 'react'

const ToggleMode = ({mode, callback}) => {

    const [displayBtns, setDisplayBtns] = useState(false);

    // btn style

    const main = {
        backgroundColor: '#F46B47',
        color: 'white',
        boxShadow: 'inset 0px 0px 6px 0px rgba(0,0,0,0.45)',
    }
    const active = {
        backgroundColor: '#F46B47',
        color: 'white',
        boxShadow: 'inset 0px 0px 6px 0px rgba(0,0,0,0.45)',
    }
    const inactive = {
        // visibility : 'hidden',
        // opacity: '0',
    }


    
    // if (displayBtns == true) {
    //     active.visibility = 'visible'
    //     active.opacity = '1'
    //     inactive.visibility = 'visible'
    //     inactive.opacity = '1'
    // }

    if (mode === 'Paul') {
        inactive.color = 'white'
        active.color = '#207D85'
        active.backgroundColor = 'rgb(252, 243, 235)'
    }

     function toggleDisplay() {
         const btns = document.querySelectorAll('#toggle-btns div')
        if (displayBtns == false) {
            setDisplayBtns(true)
            setTimeout(() => {
                btns[0].style.opacity = '1';
                btns[0].style.visibility = 'visible';
            }, 100); 
            setTimeout(() => {
                btns[1].style.opacity = '1';
                btns[1].style.visibility = 'visible';
            }, 200); 
            setTimeout(() => {
                btns[2].style.opacity = '1';
                btns[2].style.visibility = 'visible';
            }, 300); 
        } else {
            setDisplayBtns(false)
            setTimeout(() => {
                btns[2].style.opacity = '0';
                btns[2].style.visibility = 'hidden';
            }, 100); 
            setTimeout(() => {
                btns[1].style.opacity = '0';
                btns[1].style.visibility = 'hidden';
            }, 200); 
            setTimeout(() => {
                btns[0].style.opacity = '0';
                btns[0].style.visibility = 'hidden';
            }, 300); 
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
            <div id='main-toggle-btn' onClick={toggleDisplay} style = {main}>
                MP
            </div>
            <div id='toggle-btns'>
                <div onClick={handleMode} style = {mode === 'Marine' ? active : inactive}>M</div>
                <div onClick={handleMode} style = {mode === 'MP' ? active : inactive}>MP</div>
                <div onClick={handleMode} style = {mode === 'Paul' ? active : inactive}>P</div>
            </div>
        </div>
    )
}

export default ToggleMode
