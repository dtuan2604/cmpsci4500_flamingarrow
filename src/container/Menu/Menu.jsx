import React, {useState} from "react";
import "./Menu.css"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Menu = () =>{
    const [start, setStart] = useState(false)
    const [openstart, setOpenstart] = useState(false)
    const [openhis, setOpenhis] = useState(false)

    const [player1,setPlayer1] = useState("")
    const [player2,setPlayer2] = useState("")
    const [size, setSize] = useState(6)

    const handleText1 = event=>{
        setPlayer1(event.target.value)
    }
    const handleText2 = event=>{
        setPlayer2(event.target.value)
    }

    const handleStart = ()=>{
        console.log("Start")
    }
    
    const handleOpen = id=>{
        if(id===0)
            setOpenstart(true)
        else
            setOpenhis(true)
    }

    const handleClose = id =>{
        if(id===0)
            setOpenstart(false)
        else
            setOpenhis(false)
    }

    return(
        <div>
            {start ?
           (<div>
                <div id="title">
                    Flaming Arrow
                </div>
                <div className="menu">
                    <button className="menu-button" onClick={()=>handleOpen(0)}>
                        <span className="text-button">Start Game</span>
                        </button>
                        <Dialog
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
                                <button className="slider-button" onClick={handleStart}> 
                                    <span className="slider-button-text">
                                        Start
                                    </span>
                                </button>
                            </DialogActions>
                        </Dialog>

                        <button className="menu-button">
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
                                Show history
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <button className="slider-button" onClick={()=>handleClose(1)}>
                                    <span className="slider-button-text">
                                        Close
                                    </span>
                                </button>
                            </DialogActions>
                        </Dialog>
                </div>
           </div>)
           :
           ()}
        </div>
    )
}

export default Menu