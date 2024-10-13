import "./BestSellingBook.css";
import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";
import TreeShape from "../../assets/treeShape.png";
import { sellingBooksData } from "../../Data/Data";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const BestSellingBook = () => {
  return (
    <>
      <section className="BestSellingBook">
        <div className="treeShape">
          <img src={TreeShape} alt="img" className="" />
        </div>
        {
          sellingBooksData.map(({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }, index) => {
            return (
              <div className="container bestselling-container" key={index}>
                <div className="selling-book-left">
                  <img src={img} alt="img" />
                </div>
                <div className="selling-book-right">
                  <TitleTypeTwo Title={"Best Selling Book"} className="sellingBookTitle" />
                  <div>{infoTitleTop}</div>
                  <h3>{infoTitle}</h3>
                  <p className="info-text">{desc}</p>
                  <h5><span>{price}</span></h5>
                  <Link to={shopbtnLink}>Shop It Now! <BsArrowRight /></Link>
                </div>
              </div>
            )
          })
        }
      </section>
    </>
  );
}

export default BestSellingBook;
