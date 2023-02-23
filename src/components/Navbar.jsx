import React from "react";
import {MenuData} from '../data';

const NavBar = () =>{

return (
    <nav className='app-navbar'>
        <h1>LOGO</h1>
        <u1 className='navbar-items'> 
            {MenuData.map((item)=> {
                return (
                    <li>
                        <a href={item.url} className="nav-links">
                            {item.title}
                        </a>

                    </li>
                );
            })}
        </u1>


        </nav>
)

};

export default NavBar;