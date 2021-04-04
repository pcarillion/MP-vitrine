import React from 'react'
import {FaFacebook, FaTwitter, FaAlignCenter, FaInstagram} from 'react-icons/fa'

const Footer = ({mode}) => {
    const bg = {
        backgroundColor: '#FCE7D5'
    }
    const fontColor = {
        color: '#207D85'
    }
    const logoStyle = {
        color: '#207D85',
        backgroundColor: '#FCE7D5'
    }
    const hrStyle = {
        borderTop : 'solid 2px #207D85'
    }
    if (mode === 'Paul') {
        bg.backgroundColor= '#002C3B'
        fontColor.color = '#207D85'
        logoStyle.backgroundColor = '#002C3B'
    } else if (mode === 'Marine') {
        bg.backgroundColor= '#F7FDFE'
        logoStyle.backgroundColor = '#F7FDFE'
    }

    return (
        <footer style ={ bg }>
            <div id='footer-hr' style ={ hrStyle }>
                <div id='footer-logo' style ={ logoStyle }>
                    &lt; MP &gt;
                </div>
            </div>
            <div id='footer-container'>
                <div>
                    <p style= {fontColor}>Privacy policy</p>
                    <p style= {fontColor}>Terms & Conditions</p>
                    <p style= {fontColor}>All rights reserved P&M</p>
                </div>
                <div>
                    <div style= {fontColor}>
                        <FaFacebook/>
                    </div>
                    <div style= {fontColor}>
                        <FaInstagram/>
                    </div>
                    <div style= {fontColor}>
                        <FaTwitter/>
                    </div>
                </div>
                <div>
                    <p style= {fontColor}>m.and.p.web.agency@gmail.com</p>
                    <p style= {fontColor}>07 67 50 20 39</p>
                    <p style= {fontColor}>06 79 75 24 86</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
