import React from "react";
import "./Menu.css"

const Menu = () =>{
    return(
        <div>
           <div id="title">
               Flaming Arrow
           </div>
           <div className="menu">
               <button className="menu-button">
                   <span class="text-button">Start Game</span>
                </button>
                <button className="menu-button">
                   <span class="text-button">Instruction</span>
                </button>
                <button className="menu-button">
                   <span class="text-button">History</span>
                </button>
           </div>
        </div>
    )
}

export default Menu