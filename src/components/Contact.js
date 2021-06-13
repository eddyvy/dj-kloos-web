import React from 'react'

export const Contact = () => {
    return (
        <div className="contact__main" id="contact">

            <h2>Get in touch with DJ Kloos !</h2>

            <div className="contact__links">
                <div className="contact__links-item">
                    <a href="https://www.facebook.com/kloos.music" target="_blank" rel="nofollow">
                        <span>Facebook</span>
                        <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="facebook icon" />
                    </a>
                </div>
                <div className="contact__links-item">
                    <a href="https://www.instagram.com/kloos.wav/" target="_blank" rel="nofollow">
                        <span>Instagram</span>
                        <img src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ" alt="instagram icon" />
                    </a>
                </div>
                <div className="contact__links-item">
                    <a href="https://twitter.com/itskloos" target="_blank" rel="nofollow">
                        <span>Twitter</span>
                        <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" alt="twitter icon" id="twitter-icon" />
                    </a>
                </div>
            </div>

            <div className="contact__links-item">
                <a href="mailto:kloos.info@gmail.com" target="_blank" rel="nofollow">
                    <span>Email me: <br/>kloos.info@gmail.com</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png" alt="gmail icon"/>
                </a>
            </div>

        </div>
    )
}
