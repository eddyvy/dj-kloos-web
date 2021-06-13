import React from 'react'

import { assetsImg } from '../helpers/assetsImg'


export const Navbar = () => {
    
    const cleanPadding = (music, contact, about) => {
        music.style.padding = 'inherit'
        contact.style.padding = 'inherit'
        about.style.padding = 'inherit'
    }

    const handleClick = (e) => {
        const selected = e.target.innerText.trim().toLowerCase()
        const music = document.getElementById('music')
        const contact = document.getElementById('contact')
        const about = document.getElementById('about')

        if (selected === 'music') {
            music.style.padding = '1px 0'

        } else if (selected === 'contact') {
            contact.style.padding = '1px 0'

        } else if (selected === 'about') {
            about.style.padding = '1px 0'
            
        }

        setTimeout(() => {
            cleanPadding(music, contact, about)
        }, 500);
    }

    return (
        <div
            className="nav__nav-box"
        >
            <picture className="nav__logo">
                <img src={ assetsImg(`./logo.svg`).default } alt="Logo web" id="logo" />
                <span>Kloos</span>
            </picture>
            <button
                className="nav__button"
                onClick={ handleClick }
            >
                <a href="#music">Music</a>
            </button>
            <button
                className="nav__button"
                onClick={ handleClick }
            >
                <a href="#contact">Contact</a>
            </button>
            <button
                className="nav__button"
                onClick={ handleClick }
            >
                <a href="#about">About</a>
            </button>
        </div>
    )
}
