import React from 'react'
import { ProjectCard } from './ProjectCard';

export const Projects = (props) => {

    let data = props.c
    console.log(data);
    const [stars,setStars] = React.useState([])
    let starsCountValue = [];
    let starsCountKey = [];
    let langs = [];

    let descs = [
        "Get complete control of a pc remotely",
        "Solutions to all problems I solved on CodeForces",
        "Coolest chat app on the planet. Also known as Pychat2",
        "How good are you at rocket games?",
        "Play the role of a old school hacker and hack into big organisations!",
        "An e-commerce website built-in with ReactJs",
        "A crossplatform todo list app built-in React Native",
        "A cool website I made for my school project :)"
    ]

    for(let i = 0; i < props.c.length;i++){
        if(data[i].name == "HomeDecor" || data[i].name=="DogeChat"|| data[i].name == "School-Website-SEA" || data[i].name == "Codeforces-Solutions" || data[i].name == "React-native-To-do-list-app" || data[i].name == "Expert-Hacker" || data[i].name == "Escape" || data[i].name == "Advance-Hack-with-python"){
            starsCountValue.push(data[i].stargazers_count)
            starsCountKey.push(data[i].name)
            langs.push(data[i].language)
        }
    }
        return (
            <div className='projects'>
                <p className="projects-header">
                    {console.log(starsCountKey,"here")}
                    Here are some of my cool projects -
                </p>
                <div className="row">
                    <ProjectCard name= {starsCountKey[0]} stars={starsCountValue[0]} lang = {langs[0]} desc={descs[0]}/>
                    <ProjectCard name= {starsCountKey[1]}  stars={starsCountValue[1]} lang = {langs[1]} desc={descs[1]}/>
                </div>
                <div className="row">
                    <ProjectCard  name= {starsCountKey[2]} stars={starsCountValue[2]} lang = {langs[2]} desc={descs[2]}/>
                    <ProjectCard name= {starsCountKey[3]} stars={starsCountValue[3]} lang = {langs[3]} desc={descs[3]}/>
                </div>
                <div className="row">
                    <ProjectCard name= {starsCountKey[4]} stars={starsCountValue[4]} lang = {langs[4]} desc={descs[4]}/>
                    <ProjectCard name= {starsCountKey[5]} stars={starsCountValue[5]} lang = {langs[5]} desc={descs[5]}/>
                </div>
                <div className="row">
                    <ProjectCard name= {starsCountKey[6]} stars={starsCountValue[6]} lang = {langs[6]} desc={descs[6]}/>
                    <ProjectCard name= {starsCountKey[7]} stars={starsCountValue[7]} lang = {langs[7]} desc={descs[7]}/>
                </div>
            </div>
        )
}
