import React, {useState, useEffect} from 'react'
import "./Timer.css"

const Timer = props =>{
    const {hoursMinSecs, compMove, currplayer} = props
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds])

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0){
            compMove()
        }else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })
    useEffect(()=>{
        reset()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currplayer])
    return(
        <p className="timer">{`${hrs.toString().padStart(2, '0')}:
        ${mins.toString().padStart(2, '0')}:
        ${secs.toString().padStart(2, '0')}`}</p> 
    )
}

export default Timer