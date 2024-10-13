import "./TitleTypeTwo.css"
import victor from "../../assets/victor.png"


const TitleTypeTwo = ({className, Title}) => {
  return (
    <>
        <div className={`titleTypeOne ${className}`}>
            <h2>{Title}</h2>
            <img src={victor} alt="img" className="victor" />
        </div>
    </>
  )
}

export default TitleTypeTwo