import Header from "../Components/Header/Header"
import Brands from "../Components/Brands/Brands"
import FeaturesBooks from "../Components/FeaturesBooks/FeaturesBooks"
import BestSellingBook from "../Components/BestSellingBook/BestSellingBook"
import PopularBooks from "../Components/PopularBooks/PopularBooks"
import Quotes from "../Components/Quotes/Quotes"
import LatestArticle from "../Components/LatestArticle/LatestArticle"


const Home = () => {

  return (
    <>
      <Header/>
      <Brands/>
      <FeaturesBooks/>
      <BestSellingBook/>
      <PopularBooks />
      <Quotes/>
      <LatestArticle/>
    </>
  )
}

export default Home