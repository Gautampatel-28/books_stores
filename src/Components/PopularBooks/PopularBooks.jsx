import "./PopularBooks.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { galleryData } from "../../Data/Data";
import { useState } from "react";

const PopularBooks = () => {
  const [activeButton, setActiveButton] = useState('all');

  const handleFilterChange = (category) => {
    setActiveButton(category);
  };

  const filterItems =
    activeButton === "all"
      ? galleryData
      : galleryData.filter((item) => {
          return item.category === activeButton;
        });

  return (
    <>
      <section className="PopularBooks">
        <div className="container popularbooks-container">
          <TitleTypeOne
            TitleTop={"Some quality items"}
            Title={"Popular Books"}
            className={"Popularbooks-title"}
          />
        </div>

        <div className="filterbuttons">
          <button className={activeButton === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All</button>
          <button className={activeButton === 'business' ? 'active' : ''} onClick={() => handleFilterChange('Business')}>Business</button>
          <button className={activeButton === 'technology' ? 'active' : ''} onClick={() => handleFilterChange('Technology')}>Technology</button>
          <button className={activeButton === 'adventure' ? 'active' : ''} onClick={() => handleFilterChange('Adventure')}>Adventure</button>
          <button className={activeButton === 'romantic' ? 'active' : ''} onClick={() => handleFilterChange('Romantic')}>Romantic</button>
          <button className={activeButton === 'fictional' ? 'active' : ''} onClick={() => handleFilterChange('Fictional')}>Fictional</button>
        </div>

        <div className="gallery">
          {
            filterItems.map(({ name, price, image, writer }, index) => {
              return (
                
                <div className="galleryitems" key={index}>
                  <div className="popularbook-image">
                    <img src={image} alt={name} className="" />
                  </div>
                  <div className="popularbooks-info">
                    <h4>{name}</h4>
                    <div>
                      <small>{writer}</small>
                    </div>
                    <h5><span>{price}</span></h5>
                  </div>
                </div>
                
              );
            })
          }
        </div>
      </section>
    </>
  );
};

export default PopularBooks;
