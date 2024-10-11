import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { navLinks, navRight } from "../../Data/Data";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Nav = () => {
  const [isNavLinkShowing, setIsNavLinkShowing] = useState(false);

  if(innerWidth < 1024){
      window.addEventListener('scroll', () => {
        document.querySelector('.nav-links').classList.add("navLinksHide")
        setIsNavLinkShowing(false)
      })
  }

  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle("navShadow", window.scrollY > 0)
  });
  
  return (
    <>
      <nav>
        <div className="container nav-container">
          <Link to="/" className="Logo">
            <img src={Logo} alt="logo" />
          </Link>

          
          <ul className={`nav-links ${isNavLinkShowing ? 'navLinksShow' : 'navLinksHide'}`}>
            {navLinks.map(({ name, path }, index) => (
              <li key={index}>
                <NavLink 
                  to={path} 
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setIsNavLinkShowing(false)} 
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
