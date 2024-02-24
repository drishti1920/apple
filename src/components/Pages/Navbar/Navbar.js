import React from 'react'
import classes from "./Navbar.module.css"
import NavbarLogo from '../../Assests/NavbarLogo.png'
import {ReactComponent as NavbarSearch} from '../../Assests/NavbarSearch.svg'
import {ReactComponent as NavbarShoppingBag} from '../../Assests/NavbarShoppingBag.svg'

const Navbar = () => {
  return (
    <>
    <nav className={classes.navbarMain}>

<ul className={classes.navbarList}>
    <li>
        <img src={NavbarLogo} alt="logo" />
    </li>
    <li>Store</li>
    <li>Mac</li>
    <li>iPad</li>
    <li>iPhone</li>
    <li>Watch</li>
    <li>Vision</li>
    <li>AirPods</li>
    <li>TV & Home</li>
    <li>Entertainment</li>
    <li>Accessories</li>
    <li>Support</li>
    <li>
        <NavbarSearch/>
    </li>
    <li>
        <NavbarShoppingBag/>
    </li>
</ul>

    </nav>
    </>
    
  )
}

export default Navbar