import React from 'react';
import { NavLink,useHistory } from "react-router-dom";
import logo from '../utilites/img/logo1.svg'

const NavBar = () => {
    const history=useHistory()
    return (
        <div className='navBar'>
            <div className="nav">
                <div className="navLogo">
                    <img src={logo} alt='logo' onClick={()=>history.push('/')} />
                </div>
                <div className="navLinks">
                    <ul className='navList'>
                        <li> <NavLink  to="/">Home</NavLink></li>
                        <li> <NavLink  to="/projects">Projects</NavLink></li>
                        <li><NavLink  to="/interest">Interest</NavLink></li>
                        <li> <NavLink  to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar
