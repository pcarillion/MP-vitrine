import React from 'react'

const Services = () => {

    const mainBG = {
        backgroundColor: 'white'
    }

    const containerBG = {
        backgroundColor: '#F7FDFE'
    }

    const fonth2 = {
        color: '#F46B47',
        fontFamily: 'Alatsi',
        fontWeight: 400
    }

    const fontP = {
        color: 'black'
        // color: '#207D85'
    }


    return (
        <div id='services-main-container' style = {mainBG}>
            <div id='services-container' style={containerBG}>
                <h2 style = { fonth2 }>
                    Nos services
                </h2>
                <div id='services-cards'>
                    <section>
                        <h4>
                            UX/UI Design
                        </h4>
                        <div className="services-icone"></div>
                        <p style = { fontP}>
                            Lorem ipsum amet, consectetur adipiscing elit. Consectetur imperdiet congue nulla augue Donec tellus maecenas proin phasellus nec scelerisque. Faucibus libero vel. Eu scelerisque
                        </p>
                    </section>
                    <section>
                        <h4>
                            Développement
                        </h4>
                        <div className="services-icone"></div>
                        <p style = { fontP}>
                            Lorem ipsum amet, consectetur adipiscing elit. Consectetur imperdiet congue nulla augue Donec tellus maecenas proin phasellus nec scelerisque. Faucibus libero vel. Eu scelerisque
                        </p>
                    </section>
                    <section>
                        <h4>
                            Maintenance
                        </h4>
                        <div className="services-icone"></div>
                        <p  style = { fontP}>
                            Lorem ipsum amet, consectetur adipiscing elit. Consectetur imperdiet congue nulla augue Donec tellus maecenas proin phasellus nec scelerisque. Faucibus libero vel. Eu scelerisque
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Services
