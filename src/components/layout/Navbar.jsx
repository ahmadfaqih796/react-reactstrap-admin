import React from 'react';
import { MdMenu } from "react-icons/md";
import {
  Navbar as RSNavbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

const Navbar = ({ toggleSidebar }) => {
  return (
    <RSNavbar
      color="white"
      expand="md"
      className="admin-navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="d-flex align-items-center">
        <Button color="white" className="d-md-none me-3" onClick={toggleSidebar}>
          <MdMenu size={24} />
        </Button>
        <NavbarBrand href="/">
          <span className="h4 mb-0 text-primary">Faqih Board</span>
        </NavbarBrand>
      </div>
      <Nav navbar>
        <UncontrolledDropdown nav inNavbar direction='down'>
          <DropdownToggle nav caret>
            <img
              src="https://picsum.photos/200"
              alt="User Avatar"
              className="rounded-circle me-2"
              style={{ width: "30px", height: "30px" }}
            />
            <span className="d-none d-md-inline">Super Admin</span>
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </RSNavbar>
  );
};

export default Navbar;