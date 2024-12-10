import {  useState } from 'react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';   
import { animateUseEffect } from '../../utils.js/animateUseEffect';



export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const Taofik_CV = '/TaofikCV.pdf';

    

const navigate = useNavigate();

   const  handleNavigateToContact = () => {
    navigate('/contact')
   }

   const handleClick = () => {
    setShowPreview(true);
  };

 animateUseEffect();

  return (
    <section id='home' className='home'>
      <div className='home_text-wrapper'>
        <h1 className='home_text'>
            Hello I'm Taofik
            <br />
            Software Engineer
        </h1>
      </div>
      
      <div  className={`home_contact-me ${isVisible ? 'show' : ''}`}>
        <button onClick={handleNavigateToContact} className='home_contact_button'>Hire Me</button>


        {/* Initial button to show preview */}
      {!showPreview && (
        <button className='home_contact_button1' onClick={handleClick}>
          Preview Resume
        </button>
      )}

      {/* Show preview and download button after preview is clicked */}
      {showPreview && (
        <div>
          {/* PDF preview */}
          <iframe 
            src={Taofik_CV} 
            style={{ width: '100%', height: '400px', marginTop: '20px' }} 
            title="CV Preview"
          ></iframe>
          <br />
          {/* Download button */}
          <a href={Taofik_CV} download="TaofikCV.pdf">
            <button className='home_contact_button2' disabled>My Resume😂</button>
          </a>
        </div>
      )}
        {/* <a href={Taofik_CV} download="TaofikCV.pdf"><button className='home_contact_button'>My Resume</button> </a> */}
      </div>
    </section>
  )
}
