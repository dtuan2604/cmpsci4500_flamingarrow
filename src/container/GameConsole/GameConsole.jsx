import React, {useState} from "react";

const GameConsole = props=>{
    const [player1, player2] = props

    return(
        <div>
            Hello from GameConsole!
            Player 1 is {player1}
            Player 1 is {player2}
        </div>
    )
}