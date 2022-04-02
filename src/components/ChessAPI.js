import React from 'react'
import { Chess } from './Chess'
import { Projects2 } from './Projects2';
export const ChessAPI = () => {
    const [data,setData] = React.useState();
    async function getData(){
        let resp = await fetch('https://api.chess.com/pub/player/copyrightc/stats')
            .then(function(response){
                return response.json()
            })
        setData(resp);
        return resp
    }

    React.useEffect(
        ()=>{
            getData()
        }
        ,[])

    return (
        <>
        {console.log("rednerd")}
        <Chess data={data}/>
        </>
    )
}
