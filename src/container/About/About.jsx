import React from 'react'
import "./About.css"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Paper} from "@mui/material"
import duong from "../../image/duong.jpg"
import warren from "../../image/warren.jpg";
import zijian from "../../image/zijian.jpg";
import tyrese from "../../image/tyrese.jpg"
import erigent from "../../image/erigent.jpg"


const style={
    padding: '2%',
    width: '60%',
    margin: 'auto'
}

const About = () => {
    return(
        <div id="usermanual" style={{width: '100%', height:'100%', overflow: 'hidden'}}>
            <Parallax pages={6} style={{ top: '0', left: '0' }}>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.3 }}>
                    <img src={duong} alt="player3" style={{ display: 'block', width: '70%', marginLeft: '15%'}} />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.3 }}>
                    <img src={warren} alt="player1" style={{ display: 'block', width: '70%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.3 }}>
                    <img src={tyrese} alt="player3" style={{ display: 'block', width: '70%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={4} speed={0.8} style={{ opacity: 0.3 }}>
                    <img src={zijian} alt="player2" style={{ display: 'block', width: '70%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={5} speed={0.8} style={{ opacity: 0.3 }}>
                    <img src={erigent} alt="player2" style={{ display: 'block', width: '70%', marginLeft: '15%' }} />
                </ParallaxLayer>


                <ParallaxLayer
                    sticky={{ start: 0, end: 5 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <h2>ABOUT TEAM</h2>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2} style={{ background: 'linear-gradient(180deg, #010101 0%, rgba(255,0,0,0.55) 100%)' }} />
                <ParallaxLayer
                    offset={0}
                    speed={1.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper elevation={10} style={style}>
                        <h3>Team 3</h3>
                        <p>
                            Our team was founded in second half of the fall semester 2022 to work on CMP 4500 project.
                            There are 5 members in our team who bring great contributions to the project:
                            <br />
                            <br />
                            Duong Tuan Hoang<br />
                            Erigent Zhupani<br />
                            Tyrese Robinson<br />
                            Warren Truong<br />
                            Zijian Huang<br />
                        </p>
                    </Paper>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} />
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
                        <img className="manual-img" src={duong} alt="Moving" />
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

                <ParallaxLayer offset={2} speed={2} />
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
                        <img className="manual-img" src={warren} alt="Firing" />
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

                <ParallaxLayer offset={3} speed={2} />
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
                        <img className="manual-img" src={tyrese} alt="Moving" />
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

                <ParallaxLayer offset={4} speed={2} />
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
                        <img className="manual-img" src={zijian} alt="Moving" />
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

                <ParallaxLayer offset={5} speed={2} />
                <ParallaxLayer
                    offset={5}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                    }}>
                    <Paper elevation={10} style={style}>
                        <h3>Erigent Geli Zhupani- Software developer</h3>
                        <img className="manual-img" src={erigent} alt="Firing" />
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
