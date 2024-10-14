import "./CopyRights.css"
import { FootersLinksData } from "../../Data/Data"
import { Link } from "react-router-dom"

const CopyRights = () => {
  return (
    <>
        <div className="footer-copyright">
            <div className="container copyright-container">
                <p className="info-text">@ 2024 Gautam Patel. All Rights And Reserved.</p>
                <div className="footer-socials">
                    {
                        FootersLinksData.socials.map((item,index) => {
                            return(
                                <Link to={item.link} key={index}> <item.icon /></Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}
 
export default CopyRights