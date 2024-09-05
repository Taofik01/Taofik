import React, {useState} from 'react'
import PageHeaderContent from '../../component/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { FaPhp, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import  AboutProfile   from '../../assets/AboutProfile.svg';
import './styles.css'

const Details = [
    {
        label : "Name",
        value : "Sulaimon Taofik"
    },
    {
        label : "Address",
        value : "Lagos, Nigeria"
    },
    {
        label : "Email",
        value : "sulaimontaofik08@gmail.com",
    },
    {
        label : "Phone",
        value : "+234 8109515866",
    },
];

const about = 'Dynamic and innovative Software Engineer proficient in HTML, CSS, SASS, Bootstrap, Tailwind CSS, JavaScript, jQuery, React, PHP, MySql and C++. With a proven track record of crafting immersive digital experiences, I specialize in creating user-friendly interfaces and responsive designs. My passion for problem-solving and keen eye for detail drive me to excel in collaborative environments, where I leverage my expertise to create impactful solutions. I am dedicated to staying updated on emerging technologies and industry best practices to deliver cutting-edge solutions that exceed client expectations. Seeking opportunities to contribute my diverse skill set and drive success in a forward-thinking team.'

export default function About() {

    
  return (
    <div>
      <section id='about' className='about'>
        <PageHeaderContent
         headerText = "About Me"
         icon={<BsInfoCircleFill size={40} />}
        />
        <div className='about_content'>
            <div className='about_content_wrapper'>
                <h3>Software Developer</h3>
                <p>{about}</p>
            

                <h3 className='personal_header_text'>Personal Information</h3>
                <ul>
                    {Details.map((item, key) => (
                        <li key={key}>
                            <span className='title'>{item.label}</span>
                            <span className='value'>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='profile_container'>
                <div className='profile_container_innercontent'>

                <div><FaReact style={{fontSize: '3rem'}} /></div>
                <div><FaPhp style={{fontSize: '3rem'}} /></div>
                <div><SiJavascript style={{fontSize: '3rem'}} /></div>
                <div><SiMysql style={{fontSize: '3rem'}} /></div>
                </div>
                
            </div>

        </div>
      </section>
    </div>
  )
}
