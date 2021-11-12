import React, {useState, useEffect} from "react"
import Cell from "../Cell/Cell"
import { initBoard } from "../../api/boardfunction"
import "./GameBoard.css"
import {possibleMove, clearPossiblemove, 
    movePiece, setFire, isLose, predictLoser} from "../../api/boardfunction"
import { addHistory } from "../../api/storage"
const can_move = 4
const can_shoot = 5
const fire = 3

const GameBoard = props =>{
    const {size, currplayer, setCurrplayer, 
        setWinner, setPotentialloser, setOver,
        player1, player2, setLoading} = props
    const [board, setBoard] = useState([])
    const [position, setPosition] = useState([-1,-1])
    const [action, setAction] = useState(currplayer)
    
    const handleOperation = (x,y,value) =>{
        var tempArray
        if(value === currplayer){
            if(currplayer === action){
                tempArray = possibleMove(board,x,y,can_move,size)
                setAction(can_move)
                setPosition([x,y])
            }
            else{
                tempArray = clearPossiblemove(board,can_move,size) 
                setAction(currplayer)
                setPosition([-1,-1])
            }
        }else if(value === can_move){
            const end = [x,y]
            tempArray = movePiece(board,position,end)
            tempArray = clearPossiblemove(board,can_move,size) 

            setPosition([x,y])
            tempArray = possibleMove(board,x,y,can_shoot,size)

            setAction(can_shoot)
        }else if(value === can_shoot){
            tempArray = setFire(board,x,y,fire)
            tempArray = clearPossiblemove(board,can_shoot,size)
            
            setPosition([-1,-1])

            const next_turn = currplayer === 1 ? 2 : 1;
            setAction(next_turn)
            setCurrplayer(next_turn)
        }
        setBoard([...tempArray])
    }
    
    useEffect(()=>{
        setBoard(initBoard(size))
    },[size,setBoard])

    useEffect(()=>{
        if(isLose(board,size,currplayer)){
            const winner = currplayer === 1 ? 2 : 1
            setWinner(winner)
            setOver(true)
            
            const gameresult = {
                player1,
                player2,
                result: winner
            }
            addHistory(setLoading,gameresult)
        }
        else{
            setPotentialloser(predictLoser(board,currplayer,size))   
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currplayer])

    return(
        <table>
            <tbody>
                {
                    board.map((row,xindex)=>{
                        return (
                            <tr key={xindex} className="board-row">
                                {row.map((cell,yindex)=>{
                                return (<Cell key={cell === 0 ? yindex : (yindex + cell*size)} 
                                            currplayer = {currplayer}
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