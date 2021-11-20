import React, {useState, useEffect} from "react"
import "./Cell.css"
import player1 from "../../image/player1.png"
import player2 from "../../image/player2.png"
import fire from "../../image/fire.png"

const Cell = props =>{
    const {value,x,y,size,handleOperation,
        currplayer, automove} = props
    const [cellsize, setCellsize] = useState(0)


    useEffect(()=>{
        const tempSize = 40/size
        setCellsize(Math.floor(tempSize))
    },[size])


    return(
        <td className={value === 4 ? "can-move" : (value === 5 ? "can-shoot" : "blank")}
        style={{width: `${cellsize}vw`,height: `${cellsize}vw`}}  
        >
            {
                (value === 0 || value === 3) ? 
                (
                    value === 0 ? 
                    (<span></span>)
                    : <img className="fire" src={fire} alt="Fire" />
                ) 
                : 
                (
                    <button className={(value === 1 || value === 2) ? "button-chesspiece" : "action"}
                            onClick={()=>{handleOperation(x,y,value)}}
                            disabled={(automove || ((value === 1 || value === 2) && (currplayer !== value)))}>
                        {value === 1 ?
                        (<img className="chesspiece" src={player1} alt="Player1" />)
                        :
                        (
                            value === 2 ? 
                            (<img className="chesspiece" src={player2} alt="Player2" />)
                            :
                            (<span>&nbsp;</span>)
                        )}
                    </button>
                )
                    
            }
        </td>
    )
}

export default Cell