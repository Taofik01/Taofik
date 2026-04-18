import React, { useEffect } from 'react';
import PageHeaderContent from '../../component/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { techStack, certifications, projects } from './utils';
import './styles.scss';

export default function Skills() {

    useEffect(() => {
        const els = document.querySelectorAll('.skills__animate');
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('skills__animate--visible');
            }),
            { threshold: 0.1 }
        );
        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id='skills' className='skills'>
            <PageHeaderContent
                headerText="Skills"
                icon={<BsInfoCircleFill size={40} />}
            />

            {/* ── TECH STACK ── */}
            <div className='skills__section'>
                <div className='skills__section-header skills__animate'>
                    <span className='skills__label'>TECH STACK</span>
                    <h2 className='skills__section-title'>What I build with</h2>
                </div>

                <div className='skills__stack-grid'>
                    {techStack.map((group, i) => (
                        <div
                            key={i}
                            className='skills__group skills__animate'
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <h3 className='skills__group-title'>{group.category}</h3>
                            <div className='skills__tags'>
                                {group.skills.map((skill, j) => (
                                    <span key={j} className='skills__tag'>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── PROJECTS ── */}
            <div className='skills__section skills__section--dark'>
                <div className='skills__section-header skills__animate'>
                    <span className='skills__label'>PROJECTS</span>
                    <h2 className='skills__section-title'>Things I've shipped</h2>
                </div>

                <div className='skills__projects-grid'>
                    {projects.map((p, i) => (
                        <a
                            key={i}
                            href={p.link}
                            target='_blank'
                            rel='noreferrer'
                            className='skills__project skills__animate'
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className='skills__project-top'>
                                <h3 className='skills__project-name'>{p.name}</h3>
                                <span className='skills__project-arrow'>↗</span>
                            </div>
                            <p className='skills__project-stack'>{p.stack}</p>
                            <p className='skills__project-desc'>{p.desc}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* ── CERTIFICATIONS ── */}
            <div className='skills__section'>
                <div className='skills__section-header skills__animate'>
                    <span className='skills__label'>CERTIFICATIONS</span>
                    <h2 className='skills__section-title'>Verified credentials</h2>
                </div>

                <div className='skills__certs-grid'>
                    {certifications.map((cert, i) => (
                        <div
                            key={i}
                            className='skills__cert skills__animate'
                            style={{ transitionDelay: `${i * 0.06}s` }}
                        >
                            <span className='skills__cert-icon'>{cert.icon}</span>
                            <div className='skills__cert-info'>
                                <p className='skills__cert-title'>{cert.title}</p>
                                <p className='skills__cert-issuer'>{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}