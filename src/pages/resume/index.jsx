import React, { useEffect } from 'react';
import PageHeaderContent from '../../component/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { data } from './utils';
import './styles.scss';

export default function Resume() {

    useEffect(() => {
        const els = document.querySelectorAll('.resume__animate');
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('resume__animate--visible');
            }),
            { threshold: 0.1 }
        );
        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id='resume' className='resume'>
            <PageHeaderContent
                headerText="Resume"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className='resume__body'>

                {/* ── Experience ── */}
                <div className='resume__col'>
                    <div className='resume__col-header resume__animate'>
                        <span className='resume__label'>WORK HISTORY</span>
                        <h2 className='resume__col-title'>Experience</h2>
                    </div>

                    <div className='resume__timeline'>
                        {data.experience.map((item, i) => (
                            <div
                                key={i}
                                className='resume__item resume__animate'
                                style={{ transitionDelay: `${i * 0.08}s` }}
                            >
                                <div className='resume__item-dot' />
                                <div className='resume__item-content'>
                                    <div className='resume__item-top'>
                                        <div>
                                            <h3 className='resume__item-title'>{item.title}</h3>
                                            <p className='resume__item-company'>{item.company}</p>
                                        </div>
                                        <div className='resume__item-meta'>
                                            <span className='resume__item-period'>{item.period}</span>
                                            <span className='resume__item-location'>{item.location}</span>
                                        </div>
                                    </div>
                                    <ul className='resume__item-bullets'>
                                        {item.bullets.map((b, j) => (
                                            <li key={j}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Education ── */}
                <div className='resume__col'>
                    <div className='resume__col-header resume__animate'>
                        <span className='resume__label'>ACADEMIC</span>
                        <h2 className='resume__col-title'>Education</h2>
                    </div>

                    <div className='resume__timeline'>
                        {data.education.map((item, i) => (
                            <div
                                key={i}
                                className='resume__item resume__animate'
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className='resume__item-dot' />
                                <div className='resume__item-content'>
                                    <div className='resume__item-top'>
                                        <div>
                                            <h3 className='resume__item-title'>{item.title}</h3>
                                            <p className='resume__item-company'>{item.institution}</p>
                                            {item.note && (
                                                <span className='resume__item-note'>{item.note}</span>
                                            )}
                                        </div>
                                        <span className='resume__item-period'>{item.period}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Download CTA ── */}
                    <div className='resume__cta resume__animate'>
                        <p className='resume__cta-text'>Want the full picture?</p>
                        <a
                            href='/TaofikCV.pdf'
                            target='_blank'
                            rel='noreferrer'
                            className='resume__cta-btn'
                        >
                            Download Full CV ↗
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}