import React from 'react'
import "../styles/Chess.css"
export const Chess = (props) => {
  return (
    props.data !== undefined ?
    <div className={props.dark?"chessDark" : "chessLight"} id="chessDiv"> 
        <p>Highest Rapid Rating : {props.data.chess_rapid.best.rating} </p>
        <p>Highest Bullet Rating : {props.data.chess_bullet.best.rating} </p>
        <p>Highest Puzzle Rush Score : {props.data.puzzle_rush.best.score} </p>
        <p>Highest Puzzles Rating : 2298</p>
    </div>
    :
    <h1 id="chessDiv">ds</h1>
  )
}