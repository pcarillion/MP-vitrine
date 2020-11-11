import React from 'react'

const Tarifs = ({mode, openModal}) => {

    const mainBG = {
        backgroundColor : 'white'
    }

    const fonth2 = {
        color: '#207D85',
    }

    const sectionBG = {
        backgroundColor: '#F7FDFE'
    }

    if (mode === 'Paul') {
        mainBG.backgroundColor= '#333333'
        fonth2.color = '#F46B47'
        sectionBG.backgroundColor = '#FCF3EB'
    } else if (mode === "Marine") {
        sectionBG.backgroundColor = '#FCF3EB'
    }

    return (
        <div id='tarifs-main-container' style = {mainBG}>
            <h2 style = {fonth2} id='tarifs-title'>Nos Tarifs</h2>
            <div id='tarifs-container'>
                <section style = { sectionBG }>
                    <h4>Site Vitrine</h4>
                    <p className='services-description'>
                        Site web fait sur mesure, composé d'une à plusieurs pages, avec la possibilité d'avoir un dashboard intuitif qui permet d'administrer et d'éditer le contenu du site. 
                    </p>
                    <p className='orange'>à partir de</p>
                    <p className="price">1000€</p>
                    <p className="btn" onClick={() => openModal(true)}>Demander un devis</p>
                </section>
                <section style = { sectionBG }>
                    <h4>Website complet</h4>
                    <p className='services-description'>
                        Site web complet avec un dashboard pour l'administration, des plugins d'e-commerce pour la vente de produits. Conception graphique et accompagnement dans la prise en main. 
                    </p>
                    <p className='orange'>à partir de</p>
                    <p className="price">200€ <span>/jour</span></p>
                    <p className="btn" onClick={() => openModal(true)}>Demander un devis</p>
                </section>
                <section style = { sectionBG }>
                    <h4>Maintenance</h4>
                    <p className='services-description'>
                        Que votre site ait été conçu ou non par nos soins, nous pouvons réparer les bugs ou répondre aux besoins qui sont les vôtres en fonction de l'évolution de votre activité. 
                    </p>
                    <p className='orange'>à partir de</p>
                    <p className="price">150€ <span>/jour</span></p>
                    <p className="btn" onClick={() => openModal(true)}>Demander un devis</p>
                </section>
            </div>
        </div>
    )
}

export default Tarifs
