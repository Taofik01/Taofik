import React, { useState } from "react";
import PageHeaderContent from "../../component/pageHeader";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import Image6 from "../../assets/Image6.png";
import Image7 from "../../assets/Image7.png";
import Image8 from "../../assets/Image8.png";
import "./styles.scss";

import { BsInfoCircleFill } from "react-icons/bs";

const PortfolioData = [
  {
    id: 3,
    name: "Food Recipe",
    Image: Image1,
    link: "",
  },
  {
    id: 3,
    name: "Ecommerce",
    Image: Image2,
    link: "",
  },
  {
    id: 3,
    name: "Thrivefuse",
    Image: Image7,
    link: "",
  },
  {
    id: 3,
    name: "Expense Tracker",
    Image: Image3,
    link: "",
  },
  {
    id: 2,
    name: "Car Rental Services",
    Image: Image4,
    link: "",
  },
  {
    id: 2,
    name: "C Documentation",
    Image: Image5,
    link: "",
  },
  {
    id: 2,
    name: "Dr. Borlaug Page",
    Image: Image6,
    link: "",
  },
  {
    id: 2,
    name: "Note App",
    Image: Image8,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "ALL",
  },
  {
    filterId: 2,
    label: "Vanilla Javascript",
  },
  {
    filterId: 3,
    label: "React",
  },
];

export default function Portfolio() {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }
  const filteredItems =
    filteredValue === 1
      ? PortfolioData
      : PortfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredItems);

  function handleHover(index){
    setHoveredValue(index)
  }
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_filter_content">
          {filterData.map((item) => (
            <li className={item.filterId === filteredValue ? 'active' : ''} key={item.filterId} onClick={() => handleFilter(item.filterId)}>
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {filteredItems.map((item, index) => (
            <div className="portfolio_item" key={`cardItem${item.name.trim()}`}
            
             onMouseEnter={ ()  => handleHover(index)}
             onMouseLeave={() => handleHover(null)}>
              <div className="portfolio_item_img-wrapper">
                <a>
                  <img alt="project Images" src={item.Image} />
                </a>
              </div>
              <div className="overlay">
                {
                  index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
