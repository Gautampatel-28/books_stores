import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { navLinks, navRight } from "../../Data/Data";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Nav = () => {
  const [isNavLinkShowing, setIsNavLinkShowing] = useState(false);

  return (
    <>
      <nav>
        <div className="container nav-container">
          <Link to="/" className="Logo">
            <img src={Logo} alt="logo" />
          </Link>

          {/* Use the state value here, not the setter */}
          <ul className={`nav-links ${isNavLinkShowing ? 'navLinksShow' : 'navLinksHide'}`}>
            {navLinks.map(({ name, path }, index) => (
              <li key={index}>
                <NavLink 
                  to={path} 
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setIsNavLinkShowing(false)} // Close menu after clicking a link
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            {navRight.managements.map((item, index) => (
              <Link
                key={index}
                className="management-icons"
                to={item.link}
              >
                <item.icon />
              </Link>
            ))}

            {/* Toggle button for showing and hiding the menu */}
            <button className="menu-button" onClick={() => setIsNavLinkShowing(!isNavLinkShowing)}>
              {isNavLinkShowing ? <GrClose /> : <VscMenu />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
//30:07