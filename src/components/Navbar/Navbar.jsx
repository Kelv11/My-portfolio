import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo-k.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-280px";
    }
  };

  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu(); // Close the menu after selection
  };

  // Add scroll event listener to track page position and update active menu item
  useEffect(() => {
    const handleScroll = () => {
      // Track if page is scrolled for navbar styling
      setScrolled(window.scrollY > 10);

      // Get all sections
      const sections = ["home", "about", "services", "work", "contact"];

      // Find the section that's currently visible
      // Starting from the bottom of the page (last section)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const currentPosition = window.scrollY + 200;

          if (currentPosition >= sectionTop) {
            setMenu(sections[i]);
            break;
          }
        }
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Initial call to set the correct section on page load
    // Wrap in setTimeout to ensure DOM is ready
    setTimeout(handleScroll, 100);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Remove menu from dependency array to prevent loop

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <img src={logo} alt="Logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open Menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuItemClick("home")}>Home</p>
          </AnchorLink>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuItemClick("about")}>About me</p>
          </AnchorLink>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleMenuItemClick("services")}>Services</p>
          </AnchorLink>
        </li>
        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleMenuItemClick("work")}>Portfolio</p>
          </AnchorLink>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuItemClick("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
