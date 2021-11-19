import React,{useRef} from "react"
import styles from "./menu.module.css"
import {NavLink} from "react-router-dom"
import {Overlay,Tooltip} from "react-bootstrap"

import {BiHomeAlt} from "react-icons/bi"
import {AiFillPlusCircle} from "react-icons/ai"
import {BsArrowsAngleContract,BsArrowUpRight} from "react-icons/bs"
import {IoIosAdd} from "react-icons/io"
import { useSelector,useDispatch } from "react-redux"

const Menu = () => { 
    const dispatch = useDispatch()
    const tooltip_show = useSelector((state)=> state.menu__tooltip) //Defined in reducer function
    
    const target = useRef(null);
    return(
        <>
        <div className={styles.menu__wrapper}>
            <div className={styles.menu__button}>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}><BiHomeAlt/></NavLink>
                <button ref={target} className={`${tooltip_show ? styles.active : ""}`} onClick={() => dispatch({type:"toggle"})}><AiFillPlusCircle/></button>
                <NavLink to="/transactions" className={({ isActive }) => (isActive ? styles.active  : "")}><BsArrowsAngleContract/></NavLink>
            </div>

            <Overlay target={target.current} show={tooltip_show} placement="top">
                {(props) => (
                    <Tooltip className={styles.menu__nft__overlay} {...props}>
                        <button><span><IoIosAdd/></span> Create NFT</button>
                        <button><span><BsArrowUpRight/></span> Send NFT</button>
                    </Tooltip>
                )}
            </Overlay>
        </div>
        
        </>
    )
}
export default Menu;                   