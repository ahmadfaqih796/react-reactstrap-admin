import { MdMenu } from "react-icons/md";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavbarBrand,
  Navbar as RSNavbar,
  UncontrolledDropdown,
} from "reactstrap";
import { usePageContext } from "../../contexts/PageContext";

const Navbar = ({ toggleSidebar }) => {
  const { page } = usePageContext();
  return (
    <RSNavbar
      color="white"
      expand="sm"
      className="admin-navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="d-flex align-items-center">
        <Button
          color="white"
          className="d-md-none me-3"
          onClick={toggleSidebar}
        >
          <MdMenu size={24} />
        </Button>
        <NavbarBrand className="d-flex flex-column align-items-start">
          <h4 className="text-primary mb-0">{page?.title}</h4>
          {window.innerWidth >= 768 && (
            <p className="text-muted mb-0" style={{ fontSize: "0.8rem" }}>
              {page?.subtitle}
            </p>
          )}
        </NavbarBrand>
      </div>
      <Nav navbar>
        <UncontrolledDropdown nav inNavbar direction="down">
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
