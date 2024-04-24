import React from "react";
import PageHeaderContent from "../../component/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Line } from "rc-progress"
import { skillsData } from "./utils";
import { AnimateKeyframes } from "react-simple-animate";
import './styles.scss'

export default function Skills() {
  return (
    <div>
      <section id="skills" className="skills">
        <PageHeaderContent headerText="My Skills" icon={<BsInfoCircleFill size={40}/>} />
        <div className="skills_wrapper">
          {skillsData.map((item, key) => (
            <div key={key} className="skills_content">
              <h3 className="skills_content_cat">{item.label}</h3>
              <div className="skills_content_cat_progess">
                {item.data.map((skillItem, i) => (
                    <AnimateKeyframes
                     play
                     duration={1}
                     keyframes={["opaccity : 1", "opacity  : 0"]}
                     iterationCount="1"  
                     >
                  <div className="progressbar-wrapper" key={i}>
                    <p>{skillItem.name}</p>
                    <Line
                        percent={skillItem.percentage}
                        strokeWidth={2}
                        strokeColor="var(--theme-main-color)"
                        trailWidth={2}
                        strokeLinecap="square"
                      />
                  </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
