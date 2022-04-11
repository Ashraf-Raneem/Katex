import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { Navbar, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import { BsGlobe2 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

const Navbar2 = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Navbar fixed={true} className="intro-navbar">
      <div className="container container-ld">
        <div className="intro-wrap">
          <div className="intro-logo">
            <a href="/" className="logo-link">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="intro-nav">
            <ul className="nav">
              <li className="nav-item intro-nav-item">
                <a href="#ecosystem" onClick={(ev) => ev.preventDefault()} className="link-to nav-link intro-nav-link">
                  Ecosystem
                </a>
              </li>
              <li className="nav-item intro-nav-item">
                <a href="#about" onClick={(ev) => ev.preventDefault()} className="nav-link intro-nav-link">
                  What is AK0?
                </a>
              </li>
              <li className="nav-item intro-nav-item">
                <a href="#buy" onClick={(ev) => ev.preventDefault()} className="nav-link intro-nav-link">
                  Buy
                </a>
              </li>
              <li className="nav-item intro-nav-item">
                <a href="#learn" onClick={(ev) => ev.preventDefault()} className="nav-link intro-nav-link">
                  Learn
                </a>
              </li>
              <li className="nav-item intro-nav-item">
                <a href="#community" onClick={(ev) => ev.preventDefault()} className="nav-link intro-nav-link">
                  Community
                </a>
              </li>
              <li className="nav-item intro-nav-item">
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
          <div className="intro-action">
            <IoMdMenu size="2rem" onClick={() => setCollapse(!collapse)} />
          </div>
          {collapse && (
            <div className="intro-nav-sm">
              <div className="intro-logo">
                <a href="/" className="logo-link">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <ul className="nav">
                <li className="nav-item intro-nav-item">
                  <a
                    href="#ecosystem"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setCollapse(!collapse);
                    }}
                    className="link-to nav-link intro-nav-link"
                  >
                    Ecosystem
                  </a>
                </li>
                <li className="nav-item intro-nav-item">
                  <a
                    href="#about"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setCollapse(!collapse);
                    }}
                    className="nav-link intro-nav-link"
                  >
                    What is AK0?
                  </a>
                </li>
                <li className="nav-item intro-nav-item">
                  <a
                    href="#buy"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setCollapse(!collapse);
                    }}
                    className="nav-link intro-nav-link"
                  >
                    Buy
                  </a>
                </li>
                <li className="nav-item intro-nav-item">
                  <a
                    href="#learn"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setCollapse(!collapse);
                    }}
                    className="nav-link intro-nav-link"
                  >
                    Learn
                  </a>
                </li>
                <li className="nav-item intro-nav-item">
                  <a
                    href="#community"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setCollapse(!collapse);
                    }}
                    className="nav-link intro-nav-link"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar2;
