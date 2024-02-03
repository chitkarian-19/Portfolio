import React from 'react'
import "./Navbar.css";
import { useState } from 'react';
export const Navbar = () => {

    const handleNavClick = (e,id)=>{
        e.preventDefault();
        const scrollTargetElement = document.querySelector("#"+id)
        //console.log("Michael "+id);
        if (scrollTargetElement) {
            scrollTargetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setDropdownVisible(false);
    }
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
            setDropdownVisible(!dropdownVisible);
    };
  return (
    <nav>
        <div className="left">
            Sukrit's Portfolio
        </div>
        <div className="right ">
            <ul className='item_list'>
            <li> <a href="#" onClick={(e)=>{handleNavClick(e,"info")}}>About</a></li>
            <li> <a href="#" onClick={(e)=>{handleNavClick(e,"experience")}}>Experience</a></li>
            <li> <a href="#" onClick={(e)=>{handleNavClick(e,"projects")}}>Projects</a></li>
            <li> <a href="#" onClick={(e)=>{handleNavClick(e,"contact")}}>Contact</a></li>
            </ul>
            <div className="dropdown-container">
                <button className="dropdown-button" onClick={toggleDropdown}>
                <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
                </button>
                {dropdownVisible && (
                    <ul className="dropdown-list">
                        <li> 
                            <a href="#" onClick={(e)=>{handleNavClick(e,"info")}}>
                                About
                            </a>
                        </li>
                        <li> 
                            <a href="#" onClick={(e)=>{handleNavClick(e,"experience")}}>
                                Experience
                            </a>
                        </li>
                        <li> <a href="#" onClick={(e)=>{handleNavClick(e,"projects")}}>Projects</a></li>
                        <li> <a href="#" onClick={(e)=>{handleNavClick(e,"contact")}}>Contact</a></li>
                    </ul>
                )}
            </div>
        </div>
    </nav>
  )
}
