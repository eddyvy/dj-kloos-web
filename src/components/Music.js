import React, { useContext } from 'react'

import ReactPlayer from 'react-player/soundcloud'

import { tracks } from '../data/tracks'

const playerProps = {
    width: '300px',
    height: '186px',
    style: {
        margin: '10px'
    }
}

export const Music = () => {
    return (
        <div className="music__container" id="music">
            <div className="music__title">
                <h1>Feel the music with DJ Kloos</h1>
            </div>
            <div className="music__tracks">
                {
                    tracks.map( ({ title, url }) => (

                        <div className="music__track"
                            key={ title }
                        >
                            <span>{ title }</span>
                            <ReactPlayer
                                url={ url }
                                { ...playerProps }
                            />
                        </div>

                    ))
                }
            </div>
            <div className="music__links">
                <div className="music__links-item">
                    <a href="https://soundcloud.com/kloos/tracks" target="_blank" rel="noreferrer">
                        <span>Listen Kloos in Soundcloud</span>
                        <img src="http://1000marcas.net/wp-content/uploads/2020/10/SoundCloud-Logo.png" alt="soundcloud icon" />
                    </a>
                </div>
                <div className="music__links-item">
                    <a href="https://open.spotify.com/artist/33OF0U1rvegDwnNwDZxY9X?si=3lhcWjpUScSvomWlBlwSFg&fbclid=IwAR1yvG8R_9NLOecpO7uJV0bvrTWJWNbhIvoVBfjIjqNhdSf1AFcApgSR63M&nd=1" target="_blank" rel="noreferrer">
                        <span>Listen Kloos in Spotify</span>
                        <img src="https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png" alt="spotify icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}
