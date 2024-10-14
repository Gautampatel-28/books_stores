import "./Footer.css";
import { FootersLinksData } from "../../Data/Data";
import { Link } from "react-router-dom";
import CopyRights from "../CopyRights/CopyRights";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-container">
          <div>
            <h4>About Us!</h4>
            <ul className="about-params param-links">
              {FootersLinksData.Aboutus.map(({ linkname, link }, index) => {
                return (
                  <li key={index}>
                    <Link to={link}>{linkname}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4>Discover !</h4>
            <ul className="discover-params param-links">
              {FootersLinksData.Discover.map(({ linkname, link }, index) => {
                return (
                  <li key={index}>
                    <Link to={link}>{linkname}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4>MyAccount !</h4>
            <ul className="MyAccount-params param-links">
              {FootersLinksData.Myaccount.map(({ linkname, link }, index) => {
                return (
                  <li key={index}>
                    <Link to={link}>{linkname}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4>Help !</h4>
            <ul className="help-params param-links">
              {FootersLinksData.Help.map(({ linkname, link }, index) => {
                return (
                  <li key={index}>
                    <Link to={link}>{linkname}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <CopyRights/>
      </footer>
    </>
  );
};

export default Footer;
