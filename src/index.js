import React from 'react'
import ReactDOM from 'react-dom'
import Menu from "./container/Menu/Menu";
import './index.css'

const HomePage = () =>{
    return(
        <div id="App">
            <Menu />
        </div>
    )
}

ReactDOM.render(<HomePage />, document.querySelector('#root'))

