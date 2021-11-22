import React from 'react'
import ReactDOM from 'react-dom'
import Menu from "./container/Menu/Menu";
import About from "./container/About/About"
import UserManual from "./container/UserManual/UserManual"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import GameConsole from "./container/GameConsole/GameConsole";
import GameBoard from "./component/GameBoard/GameBoard";
import Music from "./container/Music/Music";

const HomePage = () =>{
    return(
        <div id="App">

            <Router>
                <Routes>
                        <Route path="/" exact element={<Menu />} ></Route>
                        <Route path="/menu" element={<Menu/>} ></Route>
                        <Route path="/about" element={<About/>} ></Route>
                        <Route path="/usermanual" element={<UserManual/>} ></Route>
                        <Route path="/game" element={<GameConsole/>} ></Route>
                        <Route path="/board" element={<GameBoard/>} ></Route>
                </Routes>
            </Router>
            <div id="muzik">
                <Music></Music>
            </div>
        </div>
    )
}

ReactDOM.render(<HomePage />, document.querySelector('#root'))

