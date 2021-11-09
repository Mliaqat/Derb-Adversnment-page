import React, { useState } from "react";

import { MenubarStyle, NavbarStyle } from "./Navbar.style";

const Menubar = () => {



  return (
    <MenubarStyle className="menu-tabs-wrapper">
      <li className="menu-tabs">
        <span className="menu-item-link">
          <p className="tab-text">Home</p>
        </span>
      </li>
      <li className="menu-tabs">
        <span className="menu-item-link">
          <p className="tab-text">Feature</p>
        </span>
      </li>
      <li className="menu-tabs">
        <span className="menu-item-link">
          <p className="tab-text">Prices</p>
        </span>
      </li>


    </MenubarStyle >
  );
};

function Navbar() {
  const [navbar, setnavbar] = useState(false);

  const changebg = () => {
    if (window.scrollY > 200) {
      setnavbar(true);
    }
    else {
      setnavbar(false)
    }
  }

  window.addEventListener('scroll', changebg)

  return (
    <NavbarStyle  >
      <article className={navbar ? 'active' : 'notactive'}>
        <section className="navbar-container" >
          <img
            src="/image/sitelogo.png"
            alt="Site Logo"
            className="site-logo"
          />
          <Menubar />
        </section>
      </article>
    </NavbarStyle>
  );
}

export default Navbar;
