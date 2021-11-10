import React, {useState, useEffect} from "react"
import "./Cell.css"
import player1 from "../../image/player1.png"
import player2 from "../../image/player2.png"


const Cell = props =>{
    const {test, value,x,y,size,handleOperation} = props
    const [cellsize, setCellsize] = useState("0")
    const can_move = 4
    // const handleOperation = value =>{
    //     setBoard(possibleMove(board,x,y,can_move,size))
    // }
    

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
                (<button className="button-chesspiece" onClick={()=>{handleOperation(x,y,can_move)}}>
                    <img className="chesspiece" src={player1} alt="Player1" />
                </button>) 
                : 
                (
                    value === 2 ? 
                    (<button className="button-chesspiece" onClick={()=>{handleOperation(x,y,can_move)}}>
                        <img className="chesspiece" src={player2} alt="Player2" />
                    </button>)
                    :
                    (
                        value !== 0 ?
                        (<button className={value === 4 ? "can-move" : (value === 5 ? "can-shoot" : "")}>
                            <span className="action">&nbsp;</span>
                        </button>)
                        :
                        (<span></span>)
                    )
                )
                    
            }
        </td>
    )
}

export default Cell