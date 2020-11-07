import React, {useEffect} from 'react'


const Nav = ({mode}) => {
    function nav_shadow() {
        if (window.pageYOffset > 10 ){
            document.getElementsByClassName('nav')[0].style.boxShadow = '0px 4px 20px 0px rgba(0,0,0,0.3)'
        } else if (window.pageYOffset < 10){
            document.getElementsByClassName('nav')[0].style.boxShadow = 'none'
        }
    }
    console.log(window.location)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', nav_shadow)
        }
        return () => {
            window.removeEventListener('scroll', nav_shadow)
            console.log("cleaned")
        }
    }, [])


    
    console.log(window.location)

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
                <a href="javascript:document.getElementById('services-title').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});"><li style = { fontColor }>Nos services</li></a>
                <a href="javascript:document.getElementById('travail-id').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});"><li style = { fontColor }>Notre travail</li></a>
                <a href="javascript:document.getElementById('tarifs-title').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});"><li style = { fontColor }>Tarifs</li></a>
                <a href="javascript:document.getElementById('about-title').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});"><li style = { fontColor }>A propos</li></a>
                <li style = { lastBtn }>Demander un devis</li>
            </ul>
        </div>
    )
}

export default Nav
