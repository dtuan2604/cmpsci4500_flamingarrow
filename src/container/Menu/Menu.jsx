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
                    <DialogTitle>{"Amazon Challenger"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button onClick={()=>handleClose(0)}>Close</button>
                        <button onClick={handleStart}>Start</button>
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
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button onClick={()=>handleClose(1)}>Close</button>
                    </DialogActions>
                </Dialog>
           </div>
        </div>
    )
}

export default Menu