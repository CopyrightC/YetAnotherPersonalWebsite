import React from 'react'
import {Project} from "./Project"
import {Projects2} from "./Projects2"
import "../styles/Projects.css"

export const Projects = (props) => {

    const [data,setData] = React.useState([]);
    async function getData(){
        let data = await fetch('https://api.github.com/users/CopyrightC/repos', { 
            headers: {
                'Accept' : 'application/vnd.github.v3+json'
            }}).then(function(response){
                return response.json()
            })
        setData(data);
        return data
    }

    React.useEffect(
        ()=>{
            getData()
        }
        ,[])

    return (
        <Projects2  c={data}/>
    )
}