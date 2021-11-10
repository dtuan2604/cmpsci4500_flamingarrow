import React, {useState} from "react"
import GameBoard from "../../component/GameBoard/GameBoard"
import "./GameConsole.css"


const GameConsole = props=>{
    const {player1, player2,size} = props
    const [currplayer, setCurrplayer] = useState(1);

    return(
        <div id="game-console">
            <div id="game-info">
                <h3>Welcome to the Amazon!</h3>
                <h3>Current Turn</h3>
                
                    {currplayer === 1 ? 
                    (
                        <div>
                            <span style={{fontWeight: 'bolder'}} className="player1">
                                {player1}
                            </span>
                            <span style={{opacity: '0.5'}}className="player2">
                                {player2}
                            </span>
                        </div>)
                    :(<div>
                        <span style={{opacity: '0.5'}} className="player1">
                            {player1}
                        </span>
                        <span style={{fontWeight: 'bolder'}} className="player2">
                            {player2}
                        </span>
                    </div>)}
                
                <h3>Announcement</h3>
                <p>
                    Print something
                </p>
            </div>
            <div id="board">
                <GameBoard 
                size ={size} />
            </div>
        </div>
    )
}
export default GameConsole