import { useState, useEffect } from "react";
import PageHeaderContent from "../../component/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image12.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import Image6 from "../../assets/Image6.png";
import Image7 from "../../assets/Image7.png";
import Image8 from "../../assets/Image8.png";
import Image9 from "../../assets/Image9.png";
import Image10 from "../../assets/Image10.png";
import Image11 from "../../assets/Image11.png";
import Image12 from "../../assets/Image12.png";
import Image13 from "../../assets/Image13.png";
import Image14 from "../../assets/Image14.png";
import Image15 from "../../assets/Image15.png";
import Image16 from "../../assets/Image16.png";
import Image17 from "../../assets/Image17.png";

import "./styles.scss";

const filters = [
  { id: "all",        label: "All" },
  { id: "react",      label: "React.js" },
  { id: "nextjs",     label: "Next.js" },
  { id: "vue",        label: "Vue.js" },
  { id: "wordpress",  label: "WordPress" },
  { id: "vanilla",    label: "Vanilla JS" },
];

const projects = [
  {
    id: "react",
    name: "Flatshare",
    tag: "Full-Stack · React · Node.js · MySQL",
    desc: "Housing platform — cut API load times from 5 mins to 3.1 seconds. Improved DB query efficiency by 30%.",
    image: Image10,
    link: "https://www.flatshare.ng",
    featured: true,
  },
  {
    id: "react",
    name: "SplitmateIt",
    tag: "React · Firebase · TailwindCSS",
    desc: "Real-time group expense tracker with live data sync across members.",
    image: Image3,
    link: "https://splitmateit.vercel.app/",
    featured: false,
  },
  {
    id: "nextjs",
    name: "ClassiCine",
    tag: "Next.js · Firebase · TMDB API",
    desc: "Movie discovery and bookmarking platform with strong focus on performance and UX.",
    image: Image11,
    link: "https://classiccine.vercel.app/signin",
    featured: true,
  },
  {
    id: "vue",
    name: "SKYQ Enterprise",
    tag: "Vue.js · Firebase",
    desc: "Corporate website built with Vue.js — boosted cross-device compatibility by 85% and organic traffic by 50%.",
    image: Image9,
    link: "https://www.skyqent.com/",
    featured: false,
  },
  {
    id: "react",
    name: "ThriveFuse",
    tag: "React · Node.js",
    desc: "Learning platform led at GDSC Solution Challenge",
    image: Image7,
    link: "#",
    featured: true,
  },
  {
    id: "react",
    name: "Ecommerce — Al Shedad",
    tag: "React · Node.js",
    desc: "Full e-commerce storefront with cart, checkout and product management.",
    image: Image2,
    link: "https://alshedad.vercel.app/",
    featured: false,
  },
  {
    id: "vanilla",
    name: "Food Recipe App",
    tag: "Vanilla JavaScript · API",
    desc: "Recipe discovery app consuming a public food API with search and filtering.",
    image: Image1,
    link: "https://food-recipe-theta-one.vercel.app/",
    featured: true,
  },
  {
    id: "vanilla",
    name: "Car Rental Services",
    tag: "Vanilla JavaScript",
    desc: "Responsive car rental landing page with booking UI.",
    image: Image4,
    link: "https://sixth-luxury.vercel.app/",
    featured: false,
  },
  {
    id: "vanilla",
    name: "Note App",
    tag: "Vanilla JavaScript",
    desc: "Clean note-taking app with local storage persistence.",
    image: Image8,
    link: "https://note-app-ten-puce.vercel.app/",
    featured: false,
  },
  {
    id: "vanilla",
    name: "C Documentation Page",
    tag: "HTML · CSS · Vanilla JS",
    desc: "Technical documentation site for the C programming language.",
    image: Image5,
    link: "https://c-documentation-new.vercel.app/",
    featured: false,
  },
  {
    id: "vanilla",
    name: "Dr. Borlaug Tribute",
    tag: "HTML · CSS",
    desc: "Tribute page project for Norman Borlaug.",
    image: Image6,
    link: "https://dr-borlaug.vercel.app/",
    featured: false,
  },
  { id: "react",
    name: "Yxb Clothing Store",
    tag: "React . Node.js . Firebase",
    desc: "E-commerce storefront with product listing, cart and checkout features for an International brand.",
    image: Image13,
    link: "https://www.yxbmaison.com/",
    featured: true,
  },
  {
    id: "nextjs",
    name: "Kazi",
    tag: "Next.js · Landing Page",
    desc: "Job marketplace landing page — connecting people to opportunities. Clean hero, feature sections and conversion-focused UI.",
    image: Image17,
    link: "https://kazi-nine.vercel.app/", 
    featured: false,
},
  // ── Add your WordPress projects below ──
  {
    id: "wordpress",
    name: "SexyB Hair Solutions",
    tag: "WordPress · WooCommerce · eCommerce",
    desc: "Full ecommerce store for a premium hair brand in Lagos — shop, product listings, cart and checkout with payment integration.",
    image: Image14,
    link: "https://sexybhairsolutions.com",
    featured: true,
},
{
    id: "wordpress",
    name: "Maplebridge Solutions",
    tag: "WordPress · Business · AI Tools",
    desc: "Corporate website for an SME-focused AI and software solutions company — services, about and contact sections.",
    image: Image15,
    link: "https://maplebridgesolutions.ca/",
    featured: false,
},
{
    id: "wordpress",
    name: "Soft-Ace Technologies",
    tag: "WordPress · Fintech · Payment Solutions",
    desc: "Fintech company website featuring payment solutions, POS, mobile banking and agency banking product pages.",
    image: Image16,
    link: "https://www.softacetechnology.com/",
    featured: false,
},
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.id === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className={`portfolio__body ${visible ? "portfolio__body--visible" : ""}`}>

        {/* ── Filter bar ── */}
        <div className="portfolio__filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`portfolio__filter-btn ${activeFilter === f.id ? "portfolio__filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="portfolio__grid">
          {filtered.map((item, i) => (
            <a
              key={`${item.name}-${i}`}
              href={item.link === "#" ? undefined : item.link}
              target={item.link !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              className={`portfolio__card ${item.featured ? "portfolio__card--featured" : ""}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {/* image */}
              <div className="portfolio__card-img">
                <img src={item.image} alt={item.name} />
                <div className="portfolio__card-overlay">
                  {item.link !== "#" && (
                    <span className="portfolio__card-visit">Visit ↗</span>
                  )}
                </div>
              </div>

              {/* info */}
              <div className="portfolio__card-info">
                <p className="portfolio__card-tag">{item.tag}</p>
                <h3 className="portfolio__card-name">{item.name}</h3>
                <p className="portfolio__card-desc">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}