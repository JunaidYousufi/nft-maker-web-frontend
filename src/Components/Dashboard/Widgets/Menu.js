import React from "react"
import styles from "./menu.module.css"
import {NavLink} from "react-router-dom"

import {BiHomeAlt} from "react-icons/bi"
import {AiFillPlusCircle} from "react-icons/ai"
import {BsArrowsAngleContract} from "react-icons/bs"
const Menu = () => { 
    return(
        <>
        <div className={styles.menu__wrapper}>
            <div className={styles.menu__button}>
                <NavLink to=".." className={({ isActive }) => (isActive ? styles.active : "")}><BiHomeAlt/></NavLink>
                <button><AiFillPlusCircle/></button>
                <NavLink to="/transactions" className={({ isActive }) => (isActive ? styles.active  : "")}><BsArrowsAngleContract/></NavLink>
            </div>
        </div>
        </>
    )
}
export default Menu;                   