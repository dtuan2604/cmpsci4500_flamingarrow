import React from 'react'
import ReactDOM from 'react-dom'
import Menu from "./container/Menu/Menu";
import About from "./container/About/About"
import UserManual from "./container/UserManual/UserManual"
import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './index.css'
import GameConsole from "./container/GameConsole/GameConsole";
import GameBoard from "./component/GameBoard/GameBoard";


const HomePage = () =>{
    
    return(
        <div id="App">
            <Routes>
                    <Route path="/" exact element={<Menu />} ></Route>
                    <Route path="/menu" element={<Menu />} ></Route>
                    <Route path="/about" element={<About/>} ></Route>
                    <Route path="/usermanual" element={<UserManual/>} ></Route>
                    <Route path="/game" element={<GameConsole/>} ></Route>
                    <Route path="/board" element={<GameBoard/>} ></Route>
            </Routes>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
    <HashRouter>
        <HomePage />
    </HashRouter>
  </React.StrictMode>, document.querySelector('#root'))

