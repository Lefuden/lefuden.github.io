import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className='navigation-menu'>
      <li><NavLink className={({ isActive }) => isActive ? "active-page" : ""} to="/">home</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? "active-page" : ""} to="/about">about</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? "active-page" : ""} to="/cv">cv</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? "active-page" : ""} to="/contact">contact</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? "active-page" : ""} to="/portfolio">portfolio</NavLink></li>
    </ul>
  )
}

export default Navigation;