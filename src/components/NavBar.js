import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const[click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div classname='header'>
        <Link to='/'><h1>WASHINGTON STATE UNIVERSITY</h1></Link>
        {/*if clicked show nav menu active class, else just nav nemu*/}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to='/about'>ABOUT</Link>
            </li>
            <li>
                <Link to='/contact'>CONTACT</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:'white'}}/>): (<FaBars size={20} style={{color:'white'}}/>)}
        </div>

    </div>
  )
}

export default NavBar