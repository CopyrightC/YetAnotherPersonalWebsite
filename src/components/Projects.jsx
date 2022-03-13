import React from 'react'
import {Project} from "./Project"
import "../styles/Projects.css"
export const Projects = () => {
  return (
    <div className='projects'>

        <p class="projects-header">
            Here's some of my cool projects -
        </p>

        <div class="row">
            <Project/>
            <Project/>
        </div>
        <div class="row">
            <Project/>
            <Project/>
        </div>
        <div class="row">
            <Project/>
            <Project/>
        </div>
        <div class="row">
            <Project/>
            <Project/>
        </div>
    </div>
  )
}
