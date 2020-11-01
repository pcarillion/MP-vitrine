import React from 'react'


const Nav = ({mode}) => {


    const bgNav = {
        backgroundColor: "#FCE7D5"
    }

    const fontColor = {
        color: '#207D85'
    }

    const lastBtn = {
        color: '#FCF3EB',
        backgroundColor: '#207D85',
        width: 'fitContent',
        textAlign: 'center',
        padding: '5px 20px',
        borderRadius: '90px'
    }

    if (mode === "Paul") {
        bgNav.backgroundColor = '#002C3B'
    } else if (mode == "Marine") {
        bgNav.backgroundColor = '#F7FDFE'
    }

    return (
        <div className='nav' style = { bgNav}>
            <div className='logo' style = { fontColor }>
                &lt;MP&gt;
            </div>
            <ul>
                <li style = { fontColor }>Nos services</li>
                <li style = { fontColor }>Notre travail</li>
                <li style = { fontColor }>Tarifs</li>
                <li style = { fontColor }>A propos</li>
                <li style = { lastBtn }>Demander un devis</li>
            </ul>
        </div>
    )
}

export default Nav
