import "../Header/Navbar.css";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <>
      <header className="fixed-header">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <nav className="navbar navbar-expand-lg col mt-4 op">
              <div className="container-fluid">
                <div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/"
                        className={`nav-link ${activeNavItem === 'Home' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('Home')}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/aboutus"
                        className={`nav-link ${activeNavItem === 'About' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('About')}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/events"
                        className={`nav-link ${activeNavItem === 'Book' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('Events')}
                      >
                        Events
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/gallery"
                        className={`nav-link ${activeNavItem === 'Gallery' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('Gallery')}
                      >
                       Gallery
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/team"
                        className={`nav-link ${activeNavItem === 'Team' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('Team')}
                      >
                        Team
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contactus"
                        className={`nav-link ${activeNavItem === 'Contact' ? 'active' : ''}`}
                        onClick={() => handleNavItemClick('Contact')}
                      >
                        Contact
                      </NavLink>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>
            <div className="col"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
