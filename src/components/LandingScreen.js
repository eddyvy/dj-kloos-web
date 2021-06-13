import React from 'react'

import { Navbar } from './Navbar'
import { Music } from './Music'
import { About } from './About'
import { Contact } from './Contact'
import { assetsImg } from '../helpers/assetsImg'


const backgImgStyle = {
    backgroundImage: `url(${assetsImg(`./kloos-fondo.jpg`).default})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '120%',
    height: '80vh',
    minHeight: '450px',
    opacity: '0.35',
    position: 'absolute',
    width: '100%',
    zIndex: '-1'
}


export const LandingScreen = () => {
    return (
        <main>
            <div style={ backgImgStyle }></div>
            <Navbar />
            <Music />
            <Contact />
            <About />
        </main>
    )
}
