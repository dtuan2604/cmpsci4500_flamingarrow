import React, {useState} from "react"
import GameBoard from "../../component/GameBoard/GameBoard"
import Timer from "../../component/Timer/Timer"
import "./GameConsole.css"
import {allPosition, isStuck, possibleMove,
    movePiece, clearPossiblemove, setFire} from "../../api/boardfunction"
import icon1 from "../../image/player1.png"
import icon2 from "../../image/player2.png"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useTransition, animated} from 'react-spring'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const can_move = 4
const can_shoot = 5
const fire = 3

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))

const GameConsole = props=>{
    const {player1, player2, size, setStart, setLoading, start} = props

    const [currplayer, setCurrplayer] = useState(1)
    const [over, setOver] = useState(false)
    const [winner, setWinner] = useState(-1)
    const [potentialloser, setPotentialloser] = useState(-1) 
    const [board, setBoard] = useState([])
    const [automove, setAutomove] = useState(false)
    const [position, setPosition] = useState([-1,-1])
    const [action, setAction] = useState(currplayer)

    const hoursMinSecs = {hours:0, minutes: 1, seconds: 30}
    

    const compMove = async () =>{
        setAutomove(true)
        var moveBoard
        if(currplayer === action){
            var allposition = allPosition(board,size,currplayer)
            var tempposition = Math.floor(Math.random() * allposition.length)
            
            while(isStuck(board,size,allposition[tempposition])){
                allposition.splice(tempposition,1)
                tempposition = Math.floor(Math.random() * allposition.length)
            }

            moveBoard = possibleMove(board,allposition[tempposition][0],allposition[tempposition][1],can_move,size)
            setAction(can_move)
            setBoard([...moveBoard])

            await wait(500)

            const allmove = allPosition(board,size,can_move)
            const move_to = Math.floor(Math.random() * allmove.length)
            const end = allmove[move_to]
            
            moveBoard = movePiece(board,allposition[tempposition],end)
            moveBoard = clearPossiblemove(board,can_move,size) 
    
            moveBoard = possibleMove(board,end[0],end[1],can_shoot,size)
            setAction(can_shoot)
            setBoard([...moveBoard])
    
            await wait(500)

            const allshoot = allPosition(board,size,can_shoot)
            const shoot_at = allshoot[Math.floor(Math.random() * allshoot.length)]
            
            moveBoard = setFire(board,shoot_at[0],shoot_at[1],fire)
            moveBoard = clearPossiblemove(board,can_shoot,size)
            setPosition([-1,-1])
            const next_turn = currplayer === 1 ? 2 : 1;
            setAction(next_turn)
            setCurrplayer(next_turn)
            setBoard([...moveBoard])
            
        }else if(action === can_move){
            const allmove = allPosition(board,size,can_move)
            const move_to = Math.floor(Math.random() * allmove.length)
            const end = allmove[move_to]
            
            moveBoard = movePiece(board,position,end)
            moveBoard = clearPossiblemove(board,can_move,size) 
    
            moveBoard = possibleMove(board,end[0],end[1],can_shoot,size)
            setAction(can_shoot)
            setBoard([...moveBoard])
    
            await wait(500)

            const allshoot = allPosition(board,size,can_shoot)
            const shoot_at = allshoot[Math.floor(Math.random() * allshoot.length)]
            
            moveBoard = setFire(board,shoot_at[0],shoot_at[1],fire)
            moveBoard = clearPossiblemove(board,can_shoot,size)
            setPosition([-1,-1])
            const next_turn = currplayer === 1 ? 2 : 1;
            setAction(next_turn)
            setCurrplayer(next_turn)
            setBoard([...moveBoard])
        }else if(action === can_shoot){
            const allshoot = allPosition(board,size,can_shoot)
            const shoot_at = allshoot[Math.floor(Math.random() * allshoot.length)]
            
            moveBoard = setFire(board,shoot_at[0],shoot_at[1],fire)
            moveBoard = clearPossiblemove(board,can_shoot,size)
            setPosition([-1,-1])
            const next_turn = currplayer === 1 ? 2 : 1;
            setAction(next_turn)
            setCurrplayer(next_turn)
            setBoard([...moveBoard])
        }
        
        setAutomove(false)
    }

    const transition = useTransition(start,{
        from :{x: -800, y: 0, opacity: 0},
        enter: {x: 0, y: 0, opacity: 1},
        leave: {x:100, y:800, opacity: 0, display:'none'},
        delay: 300,
    })

    const handleCloseDialog = ()=>{
        setBoard([])
        setStart(false)
        setOver(false)
        setWinner(-1)
        setPotentialloser(-1)
    }

    return(
        <div id="game-console">
            {transition((style,item)=> item ?
            <animated.div style={style} className="transition-only">
            {winner !== -1 && 
            (<div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </div>)}
            <div id="game-info">
                <h3 style={{fontSize: '2vw', fontHeight: '2vw'}}>Welcome to the Amazon!</h3>
                <h3>Current Turn</h3>
                
                    {currplayer === 1 ? 
                    (
                        <div>
                            <span style={{fontWeight: 'bolder'}} className="player1">
                                <img className="icon" src={icon1} alt={player1} />
                                {player1}
                            </span>
                            <span style={{opacity: '0.5'}}className="player2">
                                <img className="icon" src={icon2} alt={player2} />
                                {player2}  
                            </span>
                        </div>)
                    :(<div>
                        <span style={{opacity: '0.5'}} className="player1">
                            <img className="icon" src={icon1} alt={player1} />
                            {player1}               
                        </span>
                        <span style={{fontWeight: 'bolder'}} className="player2">
                            <img className="icon" src={icon2} alt={player2} />
                            {player2}  
                        </span>
                    </div>)}
                <h3>Timer</h3>
                {!over && <Timer key={over} over={over} hoursMinSecs={hoursMinSecs} currplayer={currplayer}
                 compMove={compMove}/>}
                <h3>Announcement</h3>
                {potentialloser !== -1 && 
                    (<p className="warning-text">
                        WARNING: Watch out player {potentialloser === 1 ? player1 : player2}.
                        You are in danger, please be careful with your move 
                    </p>)
                }

            </div>
            <div id="board">
                <GameBoard 
                board={board}
                setBoard={setBoard}
                player1={player1}
                player2={player2}
                position={position}
                setPosition={setPosition}
                action={action}
                automove={automove}
                setAction={setAction}
                size ={size} 
                setWinner={setWinner}
                setPotentialloser={setPotentialloser}
                currplayer={currplayer}
                setCurrplayer={setCurrplayer}
                setOver={setOver}
                setLoading={setLoading}
                />
            </div>
            <Dialog
                sx={{
                    "& .MuiDialog-container": {
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginLeft: "5%",
                      marginTop:"10%"
                    }
                  }}  
                open={over}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"CONGRATULATION!!"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <span className="congrat-text">
                        You did a very great job {(winner === 1 )?player1:player2}!
                        Congratulation on your winning!! 
                        <br/>
                        If you are curious about how we can predict loser ahead,
                        please go to Instruction page for more information!!
                    </span>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className="slider-button" onClick={handleCloseDialog}>
                        <span className="slider-button-text">
                            Back
                        </span>
                    </button>
                </DialogActions>
            </Dialog>
            </animated.div>   
            :
            (<span></span>))}
        </div>
    )
}
export default GameConsole
