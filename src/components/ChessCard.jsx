import React from 'react'
import "../styles/ChessCard.css"
export const ChessCard = (props) => {
  return (
    <div class="chess-card" style={{width:`${props.width}`,height:`${props.height}`}}>
        <img src={props.img} class="chess-img"/>
        <p class="chess-p">{props.text}</p>
    </div>
  )
}

// https://imgur.com/lGwWmK1.png
// 
