import React from 'react'
import "../styles/Home.css"
export const Home = () => {
  return (
    <div class="home">
        <div class="hi">Welcome</div>
        <div class="about-me">
            Hi, My name is Shourya. On the Internet I'm known as Copyright(C), I know that's a weird name!
            <br/>
            <p>
            I like programming, chess and cat memes a lot {"<"}3 . Here's one of them:
            </p>
            
            <br/>
            <img src="https://i.redd.it/qp896v8jbym81.jpg" class="meme"/>
            <br></br>
            <p id="img-desc">That was funny, wasn't it?</p>
        </div>
        <div class="topics">
            <p class="topic">
                <li class="li-topic">Programming</li>
                I've been programming for nearly 2 years now. I love making websites, mobile apps and also competitive programming.
                I've made several cool projects, you can check few of 'em <a href="/projects">here</a>
            </p>
            <hr/>
            <p class="topic">
                <li class="li-topic">Chess</li>
                I've been playing chess for about 8 years now. My dad taught me chess when I was 7. Here's my chess.com id.
                Head to <a href="/chess">chess</a> section to see my best chess moments!
            </p>
            <hr/>
            <p class="topic">
                <li class="li-topic">Interests</li>
                Apart from programming and chess I like studying deep about linux. I love to try different distros, and taking about distros did I tell you I use Arch?
            </p>
            <hr/>
            <p class="topic">
                <li class="li-topic"> Desktop Ricing</li>
                Everyone wants to have a cool desktop and I'm also one of them. I use <a href="https://www.xfce.org/" target="_blank">xfce</a> on my arch.
                <br/>
                Things I use :
                <ul>
                    <li>Conky</li>
                    <li>Xfce4-terminal</li>
                    <li>Plank dock</li>
                    <li>Ulauncher</li>
                    <li>Qogir Icon Themes</li>
                    <li>Xfce Panel</li>
                </ul>
                When you put all of it together it looks something like this - <br/>
                <div class="imgs">
                    <div class="row">
                        <img src="https://imgur.com/GAxJZKq.png" class="desktop"/>
                        <img src="https://imgur.com/JXcrRWB.png" class="desktop"/>
                    </div>
                    <div class="row">
                        <img src="https://imgur.com/zBsCulp.png" class="desktop"/>
                        <img src="https://imgur.com/qbTjWjT.png" class="desktop"/>
                    </div>
                </div>
            </p>
            
        </div>
    </div>
  )
}
