import React, {useState, useEffect} from "react"
import "./Cell.css"
import player1 from "../../image/player1.png"
import player2 from "../../image/player2.png"

const Cell = props =>{
    const {value,size} = props
    const [cellsize, setCellsize] = useState("0")

    useEffect(()=>{
        const tempSize = 40/size
        setCellsize(Math.floor(tempSize))
    },[size])
    return(
        <td className={value === 4 ? "can-move" : (value === 5 ? "can-shoot" : "")}
        style={{width: `${cellsize}vw`,height: `${cellsize}vw`}}  
        >
            {
                value === 1 ? 
                (<button className="button-cell">
                    <img className="chesspiece" src={player1} alt="Player1" />
                </button>) 
                : 
                (
                    value === 2 ? 
                    (<button className="button-cell">
                        <img className="chesspiece" src={player2} alt="Player2" />
                    </button>)
                    :
                    (
                        value !== 0 && 
                        (<button className="move"/>)
                    )
                )
                    
            }
        </td>
    )
}

export default Cell