import React, {useState, useEffect} from "react"
import Cell from "../Cell/Cell"
import { initBoard } from "../../api/boardfunction"
import "./GameBoard.css"

const GameBoard = props =>{
    const {board, setBoard,size} = props

    useEffect(()=>{
        setBoard(initBoard(size))
    },[size,setBoard])
    return(
        <table>
            <tbody>
                {
                    board.map((row,xindex)=>{
                        return (
                            <tr key={xindex} className="board-row">
                                {row.map((cell,yindex)=>{
                                return (<Cell key={xindex + yindex} 
                                            value={cell} 
                                            size={size}/>)
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