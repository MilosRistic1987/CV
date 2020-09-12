import React from 'react'
import { NavLink } from "react-router-dom";
import { scaleRotate as Menu } from 'react-burger-menu'

const NavBarBurger = () => {
    return (
        <div className='NavBarBurger'>
            <Menu right >
                <NavLink activeClassName='active' to="/home">Home</NavLink>
                <NavLink activeClassName='active' to="/projects">Projects</NavLink>
                <NavLink activeClassName='active' to="/interest">Interest</NavLink>
                <NavLink activeClassName='active' to="/about">About</NavLink>
            </Menu>
            </div>
    )
}

export default NavBarBurger
