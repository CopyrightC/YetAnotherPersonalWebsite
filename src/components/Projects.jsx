import React from 'react'
import {Projects2} from "./Projects2"
import "../styles/Projects.css"

export const Projects = (props) => {

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
        <Projects2  c={data}/>
        </>
    )
}