import React, {useState} from "react";
import GameConsole from "../GameConsole/GameConsole"
import "./Menu.css"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { getHistory } from "../../api/storage";
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import crown1 from "../../image/crown1.png"
import crown2 from "../../image/crown2.png"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Menu = () =>{
    const [start, setStart] = useState(false)
    const [openstart, setOpenstart] = useState(false)
    const [openhis, setOpenhis] = useState(false)
    const [loading, setLoading] = useState(false)

    const [openIns, setOpenIns] = useState(false)
    const [player1,setPlayer1] = useState("")
    const [player2,setPlayer2] = useState("")
    const [size, setSize] = useState(6)
    const [history, setHistory] = useState([])

    const handleText1 = event=>{
        setPlayer1(event.target.value)
    }
    const handleText2 = event=>{
        setPlayer2(event.target.value)
    }
    const startGame = ()=>{
        setStart(true)
        setOpenstart(false)
    }

    const handleOpen = id=>{
        if(id===0){
            setOpenstart(true)
            setSize(6)
            setPlayer1("")
            setPlayer2("")
        }
        else{
            setOpenhis(true)
            var data = getHistory(setLoading)
            setHistory(data)
        }
    }

    const handleClose = id =>{
        if(id===0)
            setOpenstart(false)
        else
            setOpenhis(false)
    }

    const handleDelete = ()=>{
        setLoading(true)
        localStorage.clear()
        setLoading(false)
        setHistory(null)
    }
    return(
        <div id="main-page">
            {start ?
            (<GameConsole 
                player1={player1} 
                player2={player2} 
                size={size} 
                setStart={setStart}
                setLoading={setLoading}
                />)
            :
           (<div id="landing-page">
                <div id="title">
                    Flaming Arrow
                </div>
                {( openIns ? 
                (<div className="menu">
                    <Link to='/about' >
                        <button className="menu-button">
                            <span className="text-button">About</span>
                        </button>
                    </Link>
                    <Link to='/usermanual'>
                        <button className="menu-button">
                            <span className="text-button">Manual</span>
                        </button>
                    </Link>
                    <button className="menu-button" onClick={()=>setOpenIns(false)}>
                        <span className="text-button">Back</span>
                    </button>
                </div>)
                :
                (<div className="menu">
                    <button className="menu-button" onClick={()=>handleOpen(0)}>
                        <span className="text-button">Start Game</span>
                    </button>
                    <Dialog
                    sx={{
                        "& .MuiDialog-container": {
                          justifyContent: "center"
                        }
                      }} 
                    open={openstart}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={()=>handleClose(0)}
                    aria-describedby="alert-dialog-slide-description">
                        <DialogTitle>{"AMAZON CHALLENGER"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                <span className="text">Board Size:</span>
                                <span className="dotmenu">
                                    <span className="text-slider">{size}</span>
                                    <span className="dropdown-content">
                                        <button className="dropdown-button" onClick={()=>setSize(6)}>
                                            <span className="text-slider">6x6</span>
                                            </button>
                                        <button className="dropdown-button" onClick={()=>setSize(8)}>
                                            <span className="text-slider">8x8</span>
                                        </button>
                                        <button className="dropdown-button" onClick={()=>setSize(10)}>
                                            <span className="text-slider">10x10</span>
                                        </button>
                                    </span>
                                </span>
                                <br />
                                <span className="text">Player 1:</span>
                                <input type="input" value={player1} onChange={handleText1} />
                                <br />
                                <span className="text">Player 2:</span>
                                <input type="input" value={player2} onChange={handleText2} />

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <button className="slider-button" onClick={()=>handleClose(0)}>
                                <span className="slider-button-text">
                                    Close
                                </span>
                            </button>
                            <button className="slider-button" 
                            onClick={()=>startGame()}
                            disabled={player1 === "" || player2 === ""}> 
                                <span className="slider-button-text">
                                    Start
                                </span>
                            </button>
                        </DialogActions>
                    </Dialog>

                    <button className="menu-button" onClick={()=>setOpenIns(true)}>
                        <span className="text-button">Instruction</span>
                    </button>

                    <button className="menu-button"onClick={()=>handleOpen(1)}>
                    <span className="text-button">History</span>
                    </button>
                    <Dialog
                    open={openhis}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={()=>handleClose(1)}
                    aria-describedby="alert-dialog-slide-description">
                        <DialogTitle>{"History"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            
                            {loading ?
                            (<CircularProgress />) 
                            :
                            ((history !== null) && (history !== [])) ?
                            (<span style={{textAlign: 'center'}}>
                                {history.map((game,index)=>{
                                    return(
                                        <span key={index} className="game-history">
                                            <span>
                                                {game.player1}
                                                &nbsp;
                                                {game.result === 1 &&
                                                (<img className="crown" src={crown1} alt="black-crown" />)}
                                            </span>
                                            &nbsp;-&nbsp; 
                                            <span>
                                                {game.result === 2 &&
                                                (<img className="crown" src={crown2} alt="black-crown" />)}
                                                &nbsp;
                                                {game.player2}
                                            </span>
                                            <br />
                                        </span>
                                        
                                    )
                                })}
                            </span>)
                            :(
                                <span style={{fontFamily: "Revalia"}}>
                                    Let's start a game with us!!
                                </span>
                            )}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <button className="slider-button" onClick={()=>handleDelete()}>
                                <span className="slider-button-text">
                                    Delete
                                </span>
                            </button>
                            <button className="slider-button" onClick={()=>handleClose(1)}>
                                <span className="slider-button-text">
                                    Close
                                </span>
                            </button>
                        </DialogActions>
                    </Dialog>
                </div>))}
           </div>)}
        </div>
    )
}

export default Menu