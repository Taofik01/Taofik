import React, { useEffect, useRef } from 'react';
import PageHeaderContent from '../../component/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';

const details = [
    { label: 'Location', value: 'Lagos, Nigeria' },
    { label: 'Email',    value: 'sulaimontaofik08@gmail.com' },
    { label: 'Phone',    value: '+234 8109515866' },
    { label: 'Status',   value: 'Open to remote roles' },
];

const services = [
    {
        number: '01',
        title: 'Fullstack Engineering',
        desc: 'End-to-end web applications — React/Next.js/TypeScript on the frontend, Node.js/Express/REST APIs on the backend. I own the full stack and ship production-ready systems.'
    },
    {
        number: '02',
        title: 'Fintech & Payments',
        desc: "Wallet systems, escrow platforms, payment integrations with Paystack and live transaction handling. I've built financial systems that handle real money safely."
    },
    {
        number: '03',
        title: 'Web App Delivery',
        desc: 'From Figma to deployment. I work closely with designers and product teams to ship applications that perform well across every device.'
    },
];

const stats = [
    { number: '4+',  label: 'Years Experience' },
    { number: '10+', label: 'Projects Shipped' },
    { number: '3',   label: 'Companies' },
    { number: '30%', label: 'Avg Performance Gain' },
];

export default function About() {
    useEffect(() => {
        const elements = document.querySelectorAll('.about__animate');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about__animate--visible');
                    }
                });
            },
            { threshold: 0.12 }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id='about' className='about'>
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            {/* ── Stats bar ── */}
            <div className='about__stats-bar'>
                {stats.map((s, i) => (
                    <div
                        key={i}
                        className='about__stat about__animate'
                        style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                        <span className='about__stat-n'>{s.number}</span>
                        <span className='about__stat-l'>{s.label}</span>
                    </div>
                ))}
            </div>

            <div className='about__body'>

                {/* ── Bio ── */}
                <div className='about__bio'>
                    <span className='about__label about__animate'>WHO I AM</span>

                    <h2 className='about__headline about__animate'>
                        Fullstack engineer building<br />
                        things that <em>actually ship.</em>
                    </h2>

                    <p className='about__text about__animate'>
                        I'm Taofik — a fullstack engineer with 4+ years of production experience,
                        based in Lagos. I specialise in React, Next.js and TypeScript on the frontend,
                        and Node.js, Express and REST APIs on the backend — shipping systems across
                        fintech, housing and automation platforms.
                    </p>

                    <p className='about__text about__animate'>
                        At Soft-Ace Technologies I cut API response times from 5 minutes to 3.1 seconds
                        on a live platform. At Sandwich AI I built a wallet and payments system handling
                        real transactions, and a full analytics dashboard from scratch. I care about
                        performance, clean code and shipping things that matter.
                    </p>

                    <ul className='about__details about__animate'>
                        {details.map((item, i) => (
                            <li key={i} className='about__detail-row'>
                                <span className='about__detail-label'>{item.label}</span>
                                <span className='about__detail-value'>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Services ── */}
                <div className='about__services'>
                    <span className='about__label about__animate'>WHAT I DO</span>
                    <div className='about__service-list'>
                        {services.map((s, i) => (
                            <div
                                key={i}
                                className='about__service about__animate'
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                <span className='about__service-num'>{s.number}</span>
                                <div className='about__service-content'>
                                    <h3 className='about__service-title'>{s.title}</h3>
                                    <p className='about__service-desc'>{s.desc}</p>
                                </div>
                                <span className='about__service-arrow'>↗</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}