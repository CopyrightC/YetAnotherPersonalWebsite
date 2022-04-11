import React from 'react'
import "../styles/Contact.css"

export const Contact = () => {
//   let heightNav = 
  return (
    <div id="contact">
        <p className="contact-header">Contact</p>

        <div className='socials'>
            <a href="https://www.youtube.com/watch?v=Ag1o3koTLWM" target={"_blank"}>
                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" className='socials-img'/>
            </a>
            <a href="https://discord.com/users/510444035349938186" target={"_blank"}>
                <img src="https://img.icons8.com/color/48/000000/discord-logo.png" className='socials-img'/>
            </a>
            <a href="https://github.com/CopyrightC" target={"_blank"}>
                <img src="https://img.icons8.com/plasticine/100/000000/github.png" className='socials-img'/>
            </a>
        </div>

        <p class="hangout">
            During my free time, I hangout <a href="https://discord.gg/python">here</a> in the offtopic channels with my friends
        </p>
    </div>
  )
}

