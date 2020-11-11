import React, {useEffect, useState} from 'react'


const Nav = ({mode, openModal}) => {



    const [isOpen, setNav] = useState(false)

    function nav_shadow() {
        if (window.pageYOffset > 10 ){
            document.getElementsByClassName('nav')[0].style.boxShadow = '0px 4px 20px 0px rgba(0,0,0,0.3)'
        } else if (window.pageYOffset < 10){
            document.getElementsByClassName('nav')[0].style.boxShadow = 'none'
        }
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', nav_shadow)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', nav_shadow)
            }
        }
    }, [])

    const menuMobileDiv = {}
    const menuMobileDiv1 = {}
    const menuMobileDiv2 = {}
    const menuMobileDiv3 = {}
    const menuList = {
        backgroundColor: "#FCE7D5"
    }
    const listElement = {}


    const bgNav = {
        backgroundColor: "#FCE7D5"
    }

    const fontColor = {
        color: '#207D85'
    }
    const toggleNav = () => {
        setNav(isOPen => !isOpen)
        console.log(isOpen)
    }
    // const lastBtn = {
    //     color: '#FCF3EB',
    //     backgroundColor: '#207D85',
    //     width: 'fitContent',
    //     textAlign: 'center',
    //     padding: '5px 20px',
    //     borderRadius: '90px'
    // }

    if (mode === "Paul") {
        bgNav.backgroundColor = '#002C3B'
        menuList.backgroundColor = '#002C3B'
    } else if (mode == "Marine") {
        bgNav.backgroundColor = '#F7FDFE'
        menuList.backgroundColor = '#F7FDFE'
    }

    if (typeof window !== 'undefined' && window.innerWidth < 700) {
    if (isOpen) {
        menuMobileDiv1.transform = 'rotate(-45deg)'
        menuMobileDiv1.top = 'calc(50% - 1px)'
        menuMobileDiv3.transform = 'rotate(45deg)'
        menuMobileDiv3.bottom = 'calc(50% - 1px)'
        menuMobileDiv2.opacity = '0'
        menuList.height = "350px"
        bgNav. boxShadow = '0px 4px 20px 0px rgba(0,0,0,0.3)'
        bgNav.height = "350px"
        listElement.opacity = '1'
    } if (!isOpen) {
        menuMobileDiv1.transform = ''
        menuMobileDiv1.top = '0'
        menuMobileDiv3.transform = ''
        menuMobileDiv3.bottom = '0'
        menuMobileDiv2.opacity = '1'
        menuList.height = "0"
        bgNav.height = ""
        // bgNav. boxShadow = 'none'
        listElement.opacity = '0'
    }

    }
    return (
        <div className='nav' style = { bgNav}>
            <div className='logo' style = { fontColor }>
                &lt;MP&gt;
            </div>
            <ul style={menuList}>
                <a style={listElement} href="javascript:document.getElementById('services-title').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});"><li style = { fontColor }>Nos services</li></a>
                <a style={listElement} href="javascript:document.getElementById('travail-id').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});"><li style = { fontColor }>Notre travail</li></a>
                <a style={listElement} href="javascript:document.getElementById('tarifs-title').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});"><li style = { fontColor }>Tarifs</li></a>
                <a style={listElement} href="javascript:document.getElementById('about-title').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});"><li style = { fontColor }>A propos</li></a>
                <li style={listElement} className='btn' onClick={() => openModal(true)}>Demander un devis</li>
            </ul>
                <div  style={menuMobileDiv}className='menu-mobile-div' onClick={toggleNav}>
                    <div style={menuMobileDiv1}></div>
                    <div style={menuMobileDiv2}></div>
                    <div style={menuMobileDiv3}></div>
                </div>
        </div>
    )
}

export default Nav
