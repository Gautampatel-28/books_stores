import "./LatestArticle.css"
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne"
import {lettestArticleData} from "../../Data/Data"
import { Link } from "react-router-dom"
import { ImFacebook } from "react-icons/im"
import { FiInstagram } from "react-icons/fi"
import { RiTwitterXLine } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"

const LatestArticle = () => {
  return (
    <>
        <section className="latestArticle">
            <div className="container latest-article-container">
                <TitleTypeOne Title={"Latest Article"} TitleTop={"Real our articles"}/>

                <div className="latest-article-content">
                    {
                        lettestArticleData.map(({title,titLink,date,instLink,fbLink,twitaLink,inspiration,image},index) => {
                            return(
                                <article key={index} className="latest-article">
                                    <div className="article-image">
                                        <img src={image} alt="" className="" />
                                    </div>
                                    <div className="article-info">
                                        <h5>{date}</h5>
                                        <Link to={titLink}>
                                            <h3>{title}</h3>
                                        </Link>
                                    </div>
                                    <div className="latest-article-social">
                                    <p>{inspiration}</p>
                                    <div className="article-social">
                                        <Link to={fbLink}><ImFacebook/></Link>
                                        <Link to={instLink}><FiInstagram/></Link>
                                        <Link to={twitaLink}><RiTwitterXLine/></Link>
                                    </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
                <Link to={"*"} className="btn btn-border">
                    Read All articles 
                    <BsArrowRight/>
                </Link>
            </div>  
        </section>
    </>
  )
}

export default LatestArticle