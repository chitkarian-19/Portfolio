import React from 'react'
import "./Navbar.css";
export const Navbar = () => {

    const handleNavClick = (e,id)=>{
        //e.preventDefault();
        const scrollTargetElement = document.querySelector("#"+id)

        if (scrollTargetElement) {
            scrollTargetElement.scrollIntoView({ behavior: 'smooth' });
        }
        
    }
  return (
    <nav>
        <div className="left">
            Sukrit's Portfolio
        </div>
        <div className="right">
            <ul>
            <li> <a href="#" onClick={(e)=>{handleNavClick(e,"info")}}>About</a></li>
            <li> <a href="#" onClick={(e)=>{handleNavClick(e,"experience")}}>Experience</a></li>
            <li> <a href="#" onClick={(e)=>{handleNavClick(e,"projects")}}>Projects</a></li>
            <li> <a href="#" onClick={(e)=>{handleNavClick(e,"contact")}}>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
