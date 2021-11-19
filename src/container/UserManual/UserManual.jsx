import React from 'react'
import "./UserManual.css"
import move from "../../image/manual_img_move.png"
import fire from "../../image/manual_img_fire.png"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Paper} from "@mui/material"
import player1 from "../../image/player1.png"
import player2 from "../../image/player2.png"
import torch from "../../image/fire.png"
import player3 from "../../image/temporary.png"
const style={
    padding: '2%',
    width: '60%',
    margin: 'auto'
}

const UserManual = () => {
    return(
        <div id="usermanual" style={{width: '100%', height:'100%', overflow: 'hidden'}}>
            
            <Parallax pages={5} style={{ top: '0', left: '0' }}>

                <ParallaxLayer offset={0.3} speed={-0.3} style={{ opacity: 0.3 }}>
                    <img src={player3} alt="player3" style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={player1} alt="player1" style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={player2} alt="player2" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={torch} alt="torch" style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={player1} alt="player1" style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={player2} alt="player2" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={torch} alt="torch" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={player2} alt="player2" style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={player1} alt="player2" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={player1} alt="player1" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={player1} alt="player1" style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={player3} alt="player3" style={{ display: 'block', width: '20%', margin: 'auto' }} />
                    <img src={player2} alt="player2" style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={player2} alt="player2" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={torch} alt="torch" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={player3} alt="player3" style={{ display: 'block', width: '20%', marginRight: '40%' }} />
                    <img src={player2} alt="player2" style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={torch} alt="torch" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={player1} alt="player1" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 0, end: 3 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <h2>AMAZON INSTRUCTION</h2>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper elevation={10} style={style} id="material">
                        <h3>Material</h3>
                        <p>
                            This game can be played with different sized checkered grids. 
                            As the board grows larger, more pieces are incorporated which 
                            makes the game more difficult.
                            <br />
                            A standard game utilizes a regular chess board with different sizes. 
                            Depending on the chess board size, each player will have a certain number
                            of pawns. Throughout the game, player first moves, and then "fire". Players 
                            will be unable to move through the cell which was "fired". 
                        </p>
                        <h3>Setup</h3>
                        <p>
                            In order to set up the board, each player's pieces will be assigned randomly.
                            Once the board is set up, the game is ready to begin. The player 1 will play first.
                        </p>
                    </Paper>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#5CF666' }} />
                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    }}>
                    <Paper elevation={10} style={style}>
                        <h3>Movement</h3>
                        <img className="manual-img" src={move} alt="Moving" />
                        <p className="manual-text">
                            On a player's turn, they must move one of their game pieces. Game pieces can move vertically,
                            horizontally, diagonally. A piece can move as many spaces as it wishes, but they cannot move 
                            through another game piece or through a space that has been set on fire. 
                            <br />
                            Once a piece has been moved to its new location,
                            the second part of a player’s turn may take place.
                        </p>
                    </Paper>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#F85E5E' }} />
                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    }}>
                    <Paper elevation={10} style={style}>
                        <h3>Firing</h3>
                        <img className="manual-img" src={fire} alt="Firing" />
                        <p className="manual-text">
                            After a piece has been moved, it must fire a
                            flaming arrow. The arrow can also be fired in a
                            straight line in any direction as many spaces as the
                            player wishes. Arrows cannot be shot through an
                            opponent or through a space that has already been
                            burnt. Mark the space that has been set on fire
                            with a flame. Once a player has moved and fired,
                            their turn is over. It is now the opponent’s turn.
                            Play like this continues until the end of the game.
                        </p>
                    </Paper>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={2} style={{ backgroundColor: '#F1EC55' }} />
                <ParallaxLayer
                    offset={3}
                    speed={0.5}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    }}>
                    <Paper elevation={10} style={style}>
                        <h3>The Winner</h3>
                        <p>
                            A player wins when their opponent is no longer able to move 
                            any of their pieces.
                        </p>
                        <h3>Timer</h3>
                        <p>
                            Each player will have 1 minute and 30 seconds to make their move
                            and shoot an arrow. If the time passes and user have not finished
                            their move, the computer will automatically make a move.
                        </p>
                    </Paper>
                </ParallaxLayer>

                <ParallaxLayer offset={4} speed={2} style={{ backgroundColor: '#5489F3' }} />
                <ParallaxLayer
                    offset={4}
                    speed={0.5}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    }}>
                    <Paper elevation={10} style={style}>
                        <h3>Secret Tip</h3>
                        <p>
                            Are you curious about how we can predict a loser?
                        </p>
                        <p>
                            We would recommend you to be aware of the number of cells you 
                            have left to move. Also, be careful in your move, you might end up
                            blocking yourselves!!! 
                        </p>
                    </Paper>
                </ParallaxLayer>
            </Parallax>
        </div>
        
    )
}

export default UserManual