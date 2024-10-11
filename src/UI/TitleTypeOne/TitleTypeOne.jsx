import "./TitleTypeOne.css"
import victor from "../../assets/victor.png"

const TitleTypeOne = ({className, Title, TitleTop}) => {
  return (
    <>
        <div className={`titleTypeOne ${className}`}>
            <small>{TitleTop}</small>
            <div className="headingH">
                <div className="line"></div>
                <h2 className="title">{Title}</h2>
                <div className="line"></div> 
            </div>
            <img src={victor} alt="img" className="victor" />
        </div>
    </>
  )
}

export default TitleTypeOne