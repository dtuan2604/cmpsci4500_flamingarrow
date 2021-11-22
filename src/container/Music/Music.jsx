import React from 'react'
import musicUrl from '../../image/christmasMusic.mp3'

const Music = () => {
    return(
        <div>
            {/*<p>Hello from iframae</p>*/}
            {/*<iframe src={musicUrl}*/}
            {/*        height="0"*/}
            {/*        width="0"*/}
            {/*        allowFullScreen*/}
            {/*></iframe>*/}
            {/*<iframe width="560" height="315"*/}
            {/*        src="https://www.youtuberepeater.com/watch?v=R7MVC8GIJ_U#gsc.tab=0" frameBorder="0"*/}
            {/*        allow='autoplay; encrypted-media'*/}
            {/*        allowFullScreen></iframe>*/}
            {/*<Sound*/}
            {/*    url={musicUrl}*/}
            {/*    playStatus={Sound.status.PLAYING}*/}
            {/*    playFromPosition={0}*/}
            {/*>*/}
            {/*</Sound>*/}

            {/*<iframe width="560" height="315"*/}
            {/*        src="https://www.youtuberepeater.com/watch?v=R7MVC8GIJ_U#gsc.tab=0" frameBorder="0"*/}
            {/*        allow='autoplay; encrypted-media'*/}
            {/*        allowFullScreen></iframe>*/}
            {/*<p>Hello From Music</p>*/}
            {/*<iframe width="1000" height="1000"*/}
            {/*        src="https://www.youtube.com/embed/R7MVC8GIJ_U?autoplay=1"*/}
            {/*        title="YouTube video player" frameBorder="0"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*        allowFullScreen></iframe>*/}

            {/*<iframe width="420" height="345" src="https://www.youtube.com/watch?v=hKUJmA9O6iAautoplay=1">*/}
            {/*</iframe>*/}
            {/*<iframe width="420" height="345" src="https://www.youtube.com/watch?v=hKUJmA9O6iAautoplay=1">*/}
            {/*</iframe>*/}
            <audio src={musicUrl} controls autoPlay={true} controlsList="nodownload noplaybackrate"></audio>
        </div>
    )
}

export default Music
