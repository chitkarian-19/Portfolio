import React from 'react';
import './Info.css';
import portfolio from "../../images/Sukrit-Dev.jpeg";
import resume from "../../resume/resume.pdf";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
export const Info = ()=> {

  const [text] = useTypewriter({
    words:['Full Stack Developer', 'Designer', 'Photographer'],
    loop: {},
    typeSpeed : 120,
    deleteSpeed : 80
  });
  
  const handleDownload = ()=>{
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'SukritAkhauri.pdf'; // Set the desired filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className='info' id="info">
        <div className="left">
            Hii, My Name is <span className='purple'>Sukrit</span>
            <div>and I  am a passionate </div>
            <div className="typewriter">{text}<Cursor/></div>
            <div className="utility-buttons">
                <button className='download-button' onClick={handleDownload}>
                    Download Resume
                </button>
                <button className='github-button'>
                    <a href="https://github.com/chitkarian-19" target="blank">Visit Github</a>
                </button>
            </div>
        </div>
        <div className="right">
            <img src={portfolio} alt="" />
        </div>
    </div>
  )
}
