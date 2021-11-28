import React,{useEffect} from 'react'
import Sound from 'react-sound'
import musicUrl from '../../image/christmasMusic.mp3'

const Music = props => {
    const {playing} = props
    // const [playing, setPlaying] = useState(false)

    // const handleClick = event=>{
    //     setPlaying(!playing)
    // }
    useEffect(()=>{
        window.soundManager.setup({debugMode: false})
    },[])
    return(
        <div style={{display: 'none'}}>
            <Sound url={musicUrl} 
            playStatus={playing ? Sound.status.PLAYING : Sound.status.STOPPED} 
            loop={true}
            autoLoad={true}
            />
        </div>
    )
}

export default Music
