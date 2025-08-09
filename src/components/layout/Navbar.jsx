import React from 'react';
import {
  Navbar as RSNavbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

const Navbar = () => {
  return (
    <RSNavbar color="white" light expand="md" className="shadow-sm p-3 mb-3 bg-white rounded">
      <NavbarBrand href="/">
        <span className="h4 mb-0 text-primary">MST BCA</span>
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img
              src="https://picsum.photos/200"
              alt="User Avatar"
              className="rounded-circle me-2"
              style={{ width: '30px', height: '30px' }}
            />
            Super Admin
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