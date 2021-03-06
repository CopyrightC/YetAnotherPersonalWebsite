import React from 'react'
import "../styles/ProjectCard.css"

export const ProjectCard = (props) => {
  let color = "red"
  if(props.lang === "Python") color = "rgb(101, 103, 209)"
  else if(props.lang === "JavaScript") color = "yellow"
  else if (props.lang === "C#") color = "green"
  else if (props.lang === "C++") color = "rgb(255,105,180)"
  return (
    <a className={props.dark ? 'project-card-dark' : 'project-card'} id="card" href={props.url} target="_blank">
      <div >
        <h3 className={props.dark ? "header-dark" : "header"}>{props.name}</h3>
        <p className="proj-desc">
          {props.desc}
        </p>
        <div className="langs">
          <div className="lang-color" style={{backgroundColor : `${color}`}} />
          <p className="language" >{props.lang}</p>
          <img src="https://img.icons8.com/office/16/000000/star--v1.png" className="star"/>
          <p className="stars">{props.stars}</p>
        </div>
      </div>
    </a>
  )
}
