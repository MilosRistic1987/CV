import React from 'react'
import { NavLink } from "react-router-dom";
import { pushRotate as Menu } from 'react-burger-menu'
import logo from '../utilites/img/logo1.svg'

const NavBarBurger = (props) => {
    
    return (
        <div className='NavBarBurger'>
            <Menu right {...props}>
                <NavLink activeClassName='active' to="/home">Home</NavLink>
                <NavLink activeClassName='active' to="/projects">Projects</NavLink>
                <NavLink activeClassName='active' to="/interest">Interest</NavLink>
                <NavLink activeClassName='active' to="/about">About</NavLink>
                <img className='burgerLogo' src={logo} alt='logoImg'/>
            </Menu>
            </div>
    )
}

export default NavBarBurger
