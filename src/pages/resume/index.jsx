import React from 'react'
import PageHeaderContent from '../../component/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import { data } from './utils';
import './styles.css';
import { MdWork } from 'react-icons/md'
import { MdSchool } from 'react-icons/md'
export default function Resume() {
  return (
    <div>
      <section id='about' className='resume'>
        <PageHeaderContent
         headerText = "About Me"
         icon={ <BsInfoCircleFill size={40}/>}
        />

        <div className="timeline">
        <div className='timeline_experience'>
          <h3 className='experience_headet_text'>Experience</h3>
          <VerticalTimeline layout={'1-column'}
          lineColor="#f59400">
              {
                data.experience.map((item, key) => (
                  <VerticalTimelineElement key={key}
                  className='timeline_experience_vertical'
                   contentStyle={{
                    background: 'none',
                    color: 'var(--theme-sub-text-color)',
                    border: '1.5px solid var(--theme-main-color)',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 0px var(--theme-main-color)',
                   }}
                   icon={<MdWork />}
                   iconStyle={{
                    background: 'var(--theme-main-color)',
                    color: '#f59400',
                   }}
                  >
                      <div className='vertical-timeline-element-title-wrapper'>
                        <h3 className='vertical-timeline-element-title'>
                          {item.title}
                        </h3>
                        <h4 vertical-timeline-element-subtitle>
                          {item.subTitle}
                        </h4>
                      
                      </div>
                      <p  className='description'>{item.description}</p>
                  </VerticalTimelineElement>
                ))
              }
          </VerticalTimeline>
        </div>
        <div className='timeline_education'>
          <h3 className='education_headet_text'>Education</h3>
          <VerticalTimeline layout={'1-column'}
          lineColor="var(--myColor)">
              {
                data.education.map((item, key) => (
                  <VerticalTimelineElement key={key}
                  className='timeline_experience_vertical'
                  contentStyle={{
                    background: 'none',
                    color: 'var(--theme-sub-text-color)',
                    border: '1.5px solid var(--theme-main-color)',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 0px var(--theme-main-color)',
                   }}
                   icon={<MdSchool />}
                   iconStyle={{
                    background: 'var(--theme-main-color)',
                    color: 'var(--myColor)',
                   }}
                  >
                      <div className='vertical-timeline-element-title-wrapper'>
                        <h3 className='vertical-timeline-element-title'>
                          {item.title}
                        </h3> 
                        <h4 vertical-timeline-element-subtitle>
                          {item.subTitle}
                        </h4>
                       
                      </div>
                      <p className='description'>{item.description}</p>
                  </VerticalTimelineElement>
                ))
              }
          </VerticalTimeline>
        </div>
        </div>
      </section>
    </div>
  )
}
