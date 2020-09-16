import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import logo from '../utilites/img/logo1.svg'

const NavBarBurger = (props) => {
    const history = useHistory();
    
    return (
        <div className='NavBarBurger'>
            <Menu right {...props}>
                <NavLink activeClassName='active' to="/home">Home</NavLink>
                <NavLink activeClassName='active' to="/projects">Projects</NavLink>
                <NavLink activeClassName='active' to="/interest">Interest</NavLink>
                <NavLink activeClassName='active' to="/about">About</NavLink>
                <img className='burgerLogo' onClick={() => history.push("/")} src={logo} alt='logoImg'/>
            </Menu>
            </div>
    )
}

export default NavBarBurger
