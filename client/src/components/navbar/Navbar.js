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
const NavbarComponent = () => {
  const [collpse, setCollapse] = useState(false);

  return (
    <div>
      <Navbar expand="sm" light color="faded" className="navbar-container">
        <div>
          <NavbarBrand href="/" className="me-auto">
            <img src={Logo} alt="logo" />
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={() => setCollapse(!collpse)} color="primary" />
        <Collapse isOpen={collpse} navbar>
          <Nav>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
