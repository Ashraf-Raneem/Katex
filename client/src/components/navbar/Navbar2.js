import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { BsGlobe2 } from "react-icons/bs";

const Navbar2 = () => {
  const [collpse, setCollapse] = useState(false);
  return (
    <Navbar fixed={true} className="intro-navbar">
      <div className="container container-ld">
        <div className="intro-wrap">
          <div className="intro-logo">
            <a href="/" className="logo-link">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          {/* <NavbarToggler onClick={() => setCollapse(!collpse)} className="d-sm-none" /> */}
          <div className="intro-nav">
            <ul className="nav">
              <li className="nav-item intro-nav-item">
                <a href="#features" className="link-to nav-link intro-nav-link">
                  Ecosystem
                </a>
              </li>
              <li className="nav-item intro-nav-item">
                <a href="https://docs.dashlite.net/react/" target="_blank" className="nav-link intro-nav-link">
                  What is AK0?
                </a>
              </li>
              <li className="nav-item intro-nav-item">
                <a href="https://docs.dashlite.net/react/" target="_blank" className="nav-link intro-nav-link">
                  Buy
                </a>
              </li>
              <li className="nav-item intro-nav-item d-none d-lg-inline-flex">
                <a href="#learn" target="_blank" className="nav-link intro-nav-link">
                  Learn
                </a>
              </li>
              <li className="nav-item intro-nav-item d-none d-lg-inline-flex">
                <a href="#learn" target="_blank" className="nav-link intro-nav-link">
                  Community
                </a>
              </li>
              <li className="nav-item intro-nav-item d-none d-lg-inline-flex">
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    <BsGlobe2 color="#000000" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar2;
