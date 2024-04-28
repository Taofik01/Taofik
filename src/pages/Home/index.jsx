import {  useState } from 'react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';   
import { animateUseEffect } from '../../utils.js/animateUseEffect';



export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    

const navigate = useNavigate();

   const  handleNavigateToContact = () => {
    navigate('/contact')
   }

 animateUseEffect();

  return (
    <section id='home' className='home'>
      <div className='home_text-wrapper'>
        <h1 className='home_text'>
            Hello I'm Taofik
            <br />
            Front end developer
        </h1>
      </div>
      <div className={`home_contact-me ${isVisible ? 'show' : ''}`}>
        <button onClick={handleNavigateToContact} className='home_contact_button'>Hire Me</button>
      </div>
    </section>
  )
}
