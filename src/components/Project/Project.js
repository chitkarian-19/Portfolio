import React from 'react'
import react_navigation from "../../images/react-navigation.png";
import todo_list from "../../images/todo-list.png";
import stopWatch from "../../images/stopwatch.png";
import passwordStrength from "../../images/password-strength.png";
import surveyForm from "../../images/survey-form.png";
import profilePage from "../../images/profile.png";
import ticTacToe from "../../images/tic-tac-toe.png";
import "./Project.css";
import { useState } from 'react';
export const Project = () => {

    const project_array = [
        {
            "id":1,
            "github_live_link":"https://chitkarian-19.github.io/react-navigation/",
            "thumbnail_image":react_navigation,
            "project_description":"A fundamental React Navigation component developed in React.js. This component is designed to be fully responsive and features a switch for toggling between dark and light modes.",
            "github_link":"https://github.com/chitkarian-19/react-navigation",
            "title":"React Navbar"
        },
        {
            "id":2,
            "github_live_link":"https://chitkarian-19.github.io/ToDoApp",
            "thumbnail_image":todo_list,
            "project_description":"A minimalistic todo app with HTML, CSS, and JavaScript, seamlessly utilizing local storage. Add tasks, check them off with visual strikethroughs, and delete items with ease.",
            "github_link":"https://github.com/chitkarian-19/ToDoApp",
            "title":"ToDo App"
        },
        {
            "id":3,
            "github_live_link":"https://chitkarian-19.github.io/StopWatch/",
            "thumbnail_image":stopWatch,
            "project_description":"Explore a simple stopwatch implemented with JavaScript's setInterval() function. To run the stopwatch, open the provided HTML file on your local machine. Once initiated, press the 'Lap' button to capture time intervals.",
            "github_link":"https://github.com/chitkarian-19/StopWatch",
            "title":"StopWatch"
        },
        {
            "id":4,
            "github_live_link":"https://github.com/chitkarian-19/Pasword-Strength-Indicator",
            "thumbnail_image":passwordStrength,
            "project_description":"A simple JavaScript-based web app that assesses password strength and visually communicates it through a progress bar.",
            "github_link":"https://chitkarian-19.github.io/Pasword-Strength-Indicator/",
            "title":"Password Analyzer"
        },
        {
            "id":5,
            "github_live_link":"https://chitkarian-19.github.io/Survey-Form/",
            "thumbnail_image":surveyForm,
            "project_description":"Discover the simplicity of a responsive survey form, thoughtfully crafted with Bootstrap and HTML5. The form adapts seamlessly to various screen sizes, ensuring a smooth user experience.",
            "github_link":"https://github.com/chitkarian-19/Survey-Form",
            "title":"Survey Form"
        },
        {
            "id":6,
            "github_live_link":"https://chitkarian-19.github.io/Profile-Page/",
            "thumbnail_image":profilePage,
            "project_description":"Explore a fundamental profile page featuring Albert Einstein, crafted using HTML5 and Bootstrap. This simple yet effective design offers a glimpse into the iconic figure's profile. ",
            "github_link":"https://github.com/chitkarian-19/Profile-Page",
            "title":"Profile Page"
        },
        {
            "id":7,
            "github_live_link":"https://chitkarian-19.github.io/Tic-tac-toe/",
            "thumbnail_image":ticTacToe,
            "project_description":"Delve into a classic Tic Tac Toe project designed without Bootstrap. This interactive game showcases the timeless appeal of HTML5 and JavaScript. Experience the thrill of strategy and competition as you engage in the game.",
            "github_link":"https://github.com/chitkarian-19/Tic-tac-toe",
            "title":"Tic Tac Toe"
        }
    ];

    const [projects,setProjects] = useState(project_array);
  return (
    <div className="project_div" id="projects">
        <div className="personal_projects_header">
            <div className="square_box">

            </div>
            <div className="header_line">
            Personal Projects I have worked on....
            </div>
            
        </div>
        <div className="projects_list">

            {
                projects.map((item,index)=>{
                    return (
                        <div className="project_item">
                            <div className="thumbnail_image">
                                
                                    <img src={item.thumbnail_image} alt="" />
                                    <div className="shadow_div ">
                                        <a target='blank' href={item.github_live_link}>
                                        <div class="icon-container">
                                            <svg class="ms-1 mb-1"  aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                                        </div>
                                        </a>
                                    </div>
                            </div>
                            
                            
                            <div className="project_description">
                                <div className="project_name">
                                    <div className="project_title">
                                     {item.title}
                                     </div>
                                
                                </div>
                            {item.project_description}
                            <div className="github_link">
                                <a href={item.github_link}>Github Link
                                    <svg class="ms-1 mb-1" width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                                </a>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
            

            
        </div>
    </div>
  )
}
