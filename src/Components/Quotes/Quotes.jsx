import "./Quotes.css"
import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo"
import {quoteData} from "../../Data/Data"


const Quotes = () => {
  return (
    <>
      <section className="Quote">
        <div className="container quote-container">
            <TitleTypeTwo Title={"Quote of the day"} className="quote-title" />

            <article>
              {
                quoteData.map(({quote, speakers},index) => {
                  return(
                    <article key={index}>
                      <p className="info-text">{quote}</p>
                      <h5>{speakers}</h5>
                    </article>
                  )
                })
              }
            </article>
        </div>
      </section>
    </>
  )
}

export default Quotes