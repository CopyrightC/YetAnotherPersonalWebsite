import React from 'react'
import { ScrollUp } from './ScrollUp'
import "../styles/Home.css"

export const Home = () => {
  return (
    <div className="home">
        <ScrollUp/>
        <div className="hi">Welcome !</div>
        <div className="about-me">
            Hi, My name is Shourya. On the Internet I'm known as Copyright(C), I know that's a weird name!
            <br/>
            <p>
            I like programming, chess and cat memes a lot {"<"}3 . Here's one of them:
            </p>
            
            <br/>
            <img src="https://i.redd.it/qp896v8jbym81.jpg" className="meme"/>
            <br></br>
            <p id="img-desc">That was funny, wasn't it?</p>
        </div>
        <div className="topics">
            <p className="topic">
                <li className="li-topic">Programming</li>
                I've been programming for nearly 2 years now. I love making websites, mobile apps and also competitive programming.
                I primarily code in C++, JavaScript and Python.
                I've made several cool projects, you can check few of 'em <a href="/projects">here</a>
            </p>
            <hr/>
            <p className="topic">
                <li className="li-topic">Chess</li>
                I've been playing chess for about 8 years now. My dad taught me chess when I was 7. <a href="https://www.chess.com/member/CopyrightC" target="_blank">Here's</a> my chess.com ID, we can be frens!
                Head to <a href="/chess">chess</a> section to see my best chess moments!
            </p>
            <hr/>

            <p className="topic">
                <li className="li-topic">Typing</li>
                I can type really fast. I average around 95-105wpm, my personal best being 120wpm. I practice regularly on <a href="https://monkeytype.com/" target="blank">monkeytype</a>
                <br/>
                <img src="https://imgur.com/hq5fOhJ.png" className="desktop"/>
            </p>
            <hr/>
            <p className="topic">
                <li className="li-topic">Interests</li>
                Apart from programming and chess I like studying deep about linux. I also love to try different distros, and taking about distros did I tell ya I use Arch?
            </p>
            <hr/>
            <p className="topic">
                <li className="li-topic"> Desktop Ricing</li>
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
                <div className="imgs">
                    <div className="row">
                        <img src="https://imgur.com/GAxJZKq.png" className="desktop"/>
                        <img src="https://imgur.com/JXcrRWB.png" className="desktop"/>
                    </div>
                    <div className="row">
                        <img src="https://imgur.com/zBsCulp.png" className="desktop"/>
                        <img src="https://imgur.com/qbTjWjT.png" className="desktop"/>
                    </div>
                </div>
            </p>
        </div>
    </div>
  )
}
