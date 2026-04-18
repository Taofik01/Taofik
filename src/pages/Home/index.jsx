import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Taofik from '../../assets/taofik.jpg';
import './styles.scss';

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 80);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id='home' className={`home ${loaded ? 'home--loaded' : ''}`}>
            <div className="home__grid">

                {/* LEFT */}
                <div className="home__left">
                    <div className="home__available">
                        <span className="home__dot" />
                        Available for remote work
                    </div>

                    <h1 className="home__name">
                        <span className="home__name-first">TAOFIK</span>
                        <span className="home__name-last">SULAIMON</span>
                    </h1>

                    <div className="home__role-row">
                        <span className="home__rule" />
                        <span className="home__role">Software Engineer</span>
                    </div>

                    <p className="home__stack">React · Next.js · TypeScript · Node.js</p>

                    <p className="home__tagline">
                        4+ years shipping fintech systems,<br />
                        dashboards &amp; production-grade platforms.
                    </p>

                    <div className="home__buttons">
                        <button
                            className="home__btn home__btn--primary"
                            onClick={() => navigate('/contact')}
                        >
                            Hire Me
                        </button>
                        <a
                            href="/TaofikCV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="home__btn home__btn--secondary"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="home__right">
                    <div className="home__frame">
                        <div className="home__photo-wrap">
                            {/* ← replace with your actual photo */}
                            <img
                                src={Taofik}
                                alt="Taofik Sulaimon"
                                className="home__photo"
                                onError={e => (e.currentTarget.style.display = 'none')}
                            />
                            {/* fallback initials shown when no image */}
                            {/* <div className="home__initials" aria-hidden="true">TS</div> */}
                        </div>
                        <div className="home__frame-accent" />
                    </div>

                    <div className="home__stats">
                        <div className="home__stat">
                            <span className="home__stat-n">4+</span>
                            <span className="home__stat-l">Years exp.</span>
                        </div>
                        <div className="home__stat-divider" />
                        <div className="home__stat">
                            <span className="home__stat-n">10+</span>
                            <span className="home__stat-l">Projects shipped</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__scroll">
                <span className="home__scroll-label">scroll</span>
                <span className="home__scroll-line" />
            </div>
        </section>
    );
}