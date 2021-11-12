import React, {useState} from "react"
import GameBoard from "../../component/GameBoard/GameBoard"
import "./GameConsole.css"
import icon1 from "../../image/player1.png"
import icon2 from "../../image/player2.png"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const GameConsole = props=>{
    const {player1, player2,size,setStart,setLoading} = props
    const [currplayer, setCurrplayer] = useState(1)
    const [over, setOver] = useState(false)
    const [winner, setWinner] = useState(-1)
    const [potentialloser, setPotentialloser] = useState(-1) 

    const handleCloseDialog = ()=>{
        setStart(false)
        setOver(false)
        setWinner(-1)
        setPotentialloser(-1)
    }
    return(
        <div id="game-console">
            {winner !== -1 && 
            (<div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </div>)}
            <div id="game-info">
                <h3>Welcome to the Amazon!</h3>
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
                player1={player1}
                player2={player2}
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
        </div>
    )
}
export default GameConsole