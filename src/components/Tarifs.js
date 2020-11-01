import React from 'react'

const Tarifs = () => {
    return (
        <div id='tarifs-main-container'>
            <h2>Nos Tarifs</h2>
            <div id='tarifs-container'>
                <section>
                    <h4>Site Vitrine</h4>
                    <p className='services-description'>
                        Lorem ipsum amet, consectetur adipiscing elit. Consectetur imperdiet congue nulla augue Donec tellus maecenas proin phasellus nec scelerisque. Faucibus libero vel. Eu scelerisque
                    </p>
                    <p className='orange'>à partir de</p>
                    <p className="price">1000€</p>
                    <p className="btn">Demander un devis</p>
                </section>
                <section>
                    <h4>Website complet</h4>
                    <p className='services-description'>
                        Lorem ipsum amet, consectetur adipiscing elit. Consectetur imperdiet congue nulla augue Donec tellus maecenas proin phasellus nec scelerisque. Faucibus libero vel. Eu scelerisque
                    </p>
                    <p className='orange'>à partir de</p>
                    <p className="price">200€ <span>/jour</span></p>
                    <p className="btn">Demander un devis</p>
                </section>
                <section>
                    <h4>Maintenance</h4>
                    <p className='services-description'>
                        Lorem ipsum amet, consectetur adipiscing elit. Consectetur imperdiet congue nulla augue Donec tellus maecenas proin phasellus nec scelerisque. Faucibus libero vel. Eu scelerisque
                    </p>
                    <p className='orange'>à partir de</p>
                    <p className="price">150€ <span>/jour</span></p>
                    <p className="btn">Demander un devis</p>
                </section>
            </div>
        </div>
    )
}

export default Tarifs
