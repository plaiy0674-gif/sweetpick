import React from 'react'
import logoImg from "../assets/logo2.png"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h1 className="logo">
            <Link to='/'>
            <img src={logoImg} alt="logo" /> <span>SWEETPICK</span>
            </Link>
        </h1>

        <nav className="gnb">
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/artist'>ARTIST</NavLink>
            <NavLink to='/search'>SEARCH</NavLink>
            <NavLink to='/playlist'>PLAYLIST</NavLink>
            <NavLink to='/mypage'>MYPAGE</NavLink>
        </nav>
    </header>
  )
}

export default Navbar