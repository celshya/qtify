import React from 'react'
import Button from '../Button/button'
import styles from "./NavBar.module.css"
import { Logo } from '../Logo/Logo'
import Search from '../SearchBar/search'
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
    <Logo/>
    <Search/>
    <Button children="Give feedback"/>
    </nav>
  )
}

export default NavBar