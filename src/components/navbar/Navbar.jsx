import { useState, useRef, useEffect } from "react";
import "./navbar.css"

export function Navbar() {
const ulWrap = useRef()
const burger = useRef()
let event
const openMenu = () => {
    event = document.body.addEventListener("click", (e) => {
        e.target !== ulWrap.current && e.target !== burger.current && closeMenu() 
    })
    setMenu("0px")
}
const closeMenu = () => {
    document.body.removeEventListener("click", event)
    setMenu("-200px")
}
const [menu, setMenu] = useState("-200px")
  return (
   <div className="nav">
    <div className="navWrap">
    <h1 style={{color:"white"}}>CV</h1>
    <div ref = {burger} className="burgerMenu" onClick={openMenu}>
    </div>
    <ul ref = {ulWrap} className="ulWrap" style={{right: `${menu}`}}>
        <li>
            <a href="#skills">Skills</a>
        </li>
        <li>
            <a href="#work">Work Experience</a>
        </li>
        <li>
            <a href="#edu">Education</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#contact">Contacts</a>
        </li>
    </ul>
    </div>
   </div>
  );
}