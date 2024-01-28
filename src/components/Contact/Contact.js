import React from 'react';
import "./Contact.css";
export const Contact = () => {
  return (
    <div className="contact_div" id="contact">
        <div className="contactHeader">
            You can contact me here
        </div>
        <div className="contact_details">
            <div className="email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"/>
                        <line x1="2" y1="6" x2="12" y2="18"/>
                        <line x1="22" y1="6" x2="12" y2="18"/>
                </svg>
                sakhauri.cse18@chitkarauniversity.edu.in
            </div>
            <div className="phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>



            +91-7015480564
            </div>
        </div>
        <div className="copyright_div">
                Copyright © 2024 "Sukrit Akhauri"
        </div>
    </div>
  )
}
