import React from 'react'
import {Projects} from "./Projects"
import "../styles/Projects.css"

export const ProjectsAPI = (props) => {

    const [data,setData] = React.useState([]);
    async function getData(){
        let resp = await fetch('https://api.github.com/users/CopyrightC/repos').then(function(response){
                return response.json()
            })
        setData(resp);
        console.log("dsoaqq");
        return resp
    }

    React.useEffect(
        ()=>{
            getData()
        }
        ,[])

    return (
        <>
        {console.log("wowowoowow")}
        <Projects  c={data}/>
        </>
    )
}