import React, { useEffect } from 'react'
import "./PastExperience.css";
import { Glowdisc } from '../Glowdisc/Glowdisc';
import { useState } from 'react';
export const PastExperience = () => {
  
    const experience_details =[
        {
            "id":1,
            "job_title":"SDE 1",
            "company_name":"Sharpsell.ai",
            "company_link":"https://www.sharpsell.ai/",
            "timeline":"(Aug,2022 - Feb,2024)",
            "job_description":"Revitalized Launchpad application with automated user-manager alignment using Laravel and MongoDB, optimizing efficiency. Enhanced MSell App through Restless APIs (PHP, Java, MySQL) with SOAP for streamlined data transfer. Spearheaded Datadog integration, reducing debugging time and improving overall monitoring. Developed a MERN stack sales enablement web app, empowering data-driven decision-making, and implemented a Python cron job automating Azure data transfer for Star Health analytics."
        },
        {
            "id":2,
            "job_title":"SDE Intern",
            "company_name":"Enparadigm Performance Solutions",
            "company_link":"https://www.enparadigm.com/",
            "timeline":"(March,2021 - July,2022)",
            "job_description":"Implemented AES 256 Encryption in Java APIs, enhancing data security for client-server communication. Additionally, played a key role in developing a Progressive Web App (PWA) for the sales team, known as the Leadgen Tool. This PWA seamlessly integrates HTML, CSS, AJAX, jQuery, and AWS components, providing comprehensive insights to optimize the process of acquiring high-quality leads, thereby contributing to more effective insurance sales."
        }
        ,
        {
            "id":3,
            "job_title":"DSA Instructor",
            "company_name":"Coding Ninjas",
            "company_link":"https://www.codingninjas.com/",
            "timeline":"(Dec,2021 - April,2022)",
            "job_description":"Provided comprehensive assistance to students, addressing inquiries and clarifying concepts related to dynamic programming, graphs, trees, and arrays."
        }
      ];

  const [experience_array,setExperienceArray] = useState(experience_details);


  return (
    <div className='past_experience' id="experience">
        <div className="short_line">
            Where I have worked so far?
        </div>
        PastExperience
        
        <div className="experience-dashboard">
        
        
        {
            experience_array.map((item,index)=>{

                return (
                    <>
                    <Glowdisc></Glowdisc>
                    <div className="experience-item">
                
                        <div className='link-line'>
                   

                        </div>
                
                    <div className='job-description-div'>
                        <div className="job-details">
                            <div className="job-title">
                            {item.job_title}
                            </div>
                        <div className="job-meta">
                            <div className="job-name">
                                <a target="blank" href={item.company_link}>{item.company_name}</a>
                                
                            </div>
                        
                            <div className="job-date">
                                {item.timeline}
                            </div>
                        </div>
                        
                    </div>
                    <div className="job-description">
                        - {item.job_description}
                    </div>
                    
                </div>
                    </div>
                    </>
                );
            })
            
        }  
        </div>
    </div>
  )
}
