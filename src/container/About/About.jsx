import React from 'react'
import "./About.css"
import move from "../../image/manual_img_move.png"
import fire from "../../image/manual_img_fire.png"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Paper} from "@mui/material"
import player1 from "../../image/person1.jpg"
import player2 from "../../image/person2.jpg";
import player22 from "../../image/person2-2.jpg";
import player3 from "../../image/person3.jpg"
import player4 from "../../image/person4.jpg"
import player5 from "../../image/person5.jpg"
// import player1 from "../../image/player1.png"
// import player2 from "../../image/player2.png"
// import player3 from "../../image/temporary.png"
import torch from "../../image/fire.png"
// import person2 from "../../image/person2.jpg";

const style={
    padding: '2%',
    width: '60%',
    margin: 'auto'
}

const About = () => {
    return(
        <div id="usermanual" style={{width: '100%', height:'100%', overflow: 'hidden'}}>
            <Parallax pages={6} style={{ top: '0', left: '0' }}>

                <ParallaxLayer offset={0.3} speed={-0.3} style={{ opacity: 0.3 }}>
                    <img src={player4} alt="player3" style={{ width: '25%', marginLeft: '30%' }} />
                    <img src={player2} alt="player3" style={{ width: '35%', marginLeft: '50%' }} />
                    <img src={player3} alt="player3" style={{ width: '50%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={player1} alt="player1" style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={player2} alt="player2" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={player3} alt="player3" style={{ width: '10%', marginLeft: '30%' }} />
                    <img src={torch} alt="torch" style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={player1} alt="player1" style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={player2} alt="player2" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={player4} alt="player3" style={{ width: '50%', marginLeft: '0%' }} />
                    <img src={torch} alt="torch" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={player2} alt="player2" style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={player1} alt="player2" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={player1} alt="player1" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={player1} alt="player1" style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={player2} alt="player2" style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={player2} alt="player2" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={torch} alt="torch" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={player3} alt="player3" style={{ display: 'block', width: '40%', marginRight: '40%' }} />
                    <img src={player2} alt="player2" style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={torch} alt="torch" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={player1} alt="player1" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 0, end: 3 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <h2>ABOUT TEAM</h2>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper elevation={10} style={style} id="material">
                        <h3>Team 3</h3>
                        <p>
                            Our team was founded in second half of the fall semester 2022 to work on CMP 4500 project.
                            There are 5 members in our team who bring great contributions to the project:
                            <br />
                            <br />
                            Duong Tuan Hoang,
                            Erigent Zhupani,
                            Tyrese Robinson,
                            Warren Truong,
                            Zijian Huang
                        </p>
                        {/*<h3>Setup</h3>*/}
                        {/*<p>*/}
                        {/*    In order to set up the board, each player's pieces will be assigned randomly.*/}
                        {/*    Once the board is set up, the game is ready to begin. The player 1 will play first.*/}
                        {/*</p>*/}
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
                        <h3>Duong Tuan Hoang - Team Leader</h3>
                        <img className="manual-img" src={player1} alt="Moving" />
                        <p className="manual-text">
                            University: UMSL, Senior
                            <br/><br/>
                            Major: Computer Science
                            <br/><br/>
                            Hobbies: Enjoy coding, watching Kdrama in spare time and playing soccer
                            <br/><br/>
                            What do you like about our project?
                            <br/>
                            I like the logical problem in our game
                        </p>
                    </Paper>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#6c757d' }} />
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
                        <h3>Warren Truong - Software developer</h3>
                        <img className="manual-img" src={player22} alt="Firing" />
                        <p className="manual-text">
                            University: UMSL, Senior
                            <br/><br/>
                            Major: Computer Science
                            <br/><br/>
                            Hobbies: listening to music, driving, taking photo.
                            <br/><br/>
                            What do you like about our project?
                            <br/>
                            I like working as a team to build the project. Everyone is nice and friendly.
                            <br/>
                            They make the work easier.
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
                        <h3>LuhRese - Software Developer</h3>
                        <img className="manual-img" src={player3} alt="Moving" />
                        <p className="manual-text">
                            University: UMSL, Senior
                            <br/><br/>
                            Major: Computer Science with a minor in Information Systems
                            <br/><br/>
                            Hobbies: I enjoy shopping, helping others in needs and listening to music and what I like about our project is the home page.
                            <br/><br/>
                            What do you like about our project?
                            <br/>
                            I love the throwing arrow fast was implemented.
                            <br/>
                            I enjoy working with this group. It showed me sensibility of teamwork.
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
                        <h3>Zijian Huang - Software Devleloper</h3>
                        <img className="manual-img" src={player4} alt="Moving" />
                        <p className="manual-text">
                            University: UMSL, Senior
                            <br/><br/>
                            Major: Computer Science
                            <br/><br/>
                            Hobbies: Enjoy coding, designing algorithms.
                            <br/><br/>
                            Plays videos games a lot in spare time
                        </p>
                    </Paper>
                </ParallaxLayer>

                <ParallaxLayer offset={5} speed={2} style={{ backgroundColor: '#F85E5E' }} />
                <ParallaxLayer
                    offset={5}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                    }}>
                    <Paper elevation={12} style={style}>
                        <h3>Erigent Geli Zhupani- Software developer</h3>
                        <img className="manual-img" src={fire} alt="Firing" />
                        <p className="manual-text">
                            University: UMSL, Senior
                            <br/><br/>
                            Major: Computer Science
                            <br/><br/>
                            Hobbies: I enjoy playing soccer and coding
                            <br/><br/>
                        </p>
                    </Paper>
                </ParallaxLayer>
            </Parallax>
        </div>

    )
}

export default About
