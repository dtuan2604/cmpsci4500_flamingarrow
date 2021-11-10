import React, {useState, useEffect} from "react"
import Cell from "../Cell/Cell"
import { initBoard } from "../../api/boardfunction"
import "./GameBoard.css"
import {possibleMove } from "../../api/boardfunction"

const GameBoard = props =>{
    const {size} = props
    const [board, setBoard] = useState([])
    const handleOperation = (x,y,object) =>{
        const temp = possibleMove(board,x,y,object,size)
        setBoard([...temp])
        console.log(board)
    }
    
    useEffect(()=>{
        setBoard(initBoard(size))
    },[size,setBoard])
    useEffect(()=>{
        console.log(board)
    },[board])
    return(
        <table>
            <tbody>
                {
                    board.map((row,xindex)=>{
                        return (
                            <tr key={xindex} className="board-row">
                                {row.map((cell,yindex)=>{
                                return (<Cell key={cell === 0 ? yindex : (yindex + cell*size)} 
                                            test={cell === 0 ? yindex : (yindex + cell*size)}
                                            x={xindex}
                                            y={yindex}
                                            value={cell} 
                                            size={size}
                                            handleOperation={handleOperation}
                                            />)
                                })
                                }
                            </tr>)
                    })
                }
            </tbody>
        </table>
    )
}

export default GameBoard