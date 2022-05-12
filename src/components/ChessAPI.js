import React from 'react'
import { Chess } from './Chess'

export const ChessAPI = (props) => {
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
       ()=> getData()
    ,[])

    return <Chess data={data} dark={props.dark}/>
}
