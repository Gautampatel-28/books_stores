import "./Brands.css"
import {brandsData} from "../../Data/Data"

const Brands = () => {
  return (
    <>
        <section className="Brands">
            <div className="container brands-container">
                {
                    brandsData.map(({img}, index) => {
                        return(
                            <div className="brand" key={index}>
                                <img src={img} alt="img" />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Brands