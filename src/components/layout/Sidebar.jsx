import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Collapse, Button } from 'reactstrap';
import { Link, useLocation } from 'react-router';
import {
  MdDashboard,
  MdBarChart,
  MdLocationOn,
  MdSwapHoriz,
  MdAssignment,
  MdAddCircleOutline,
  MdClose,
} from 'react-icons/md';

const Sidebar = ({isSidebarOpen, toggleSidebar}) => {
  const location = useLocation();
  const [isOpenNewMerchant, setIsOpenNewMerchant] = useState(false);

  const toggleNewMerchant = () => setIsOpenNewMerchant(!isOpenNewMerchant);

  const navItems = [
    {
      to: '/',
      icon: <MdDashboard className="me-2" />,
      text: 'Dashboard',
    },
    {
      to: '/summary-productivity',
      icon: <MdBarChart className="me-2" />,
      text: 'Summary Productivity',
    },
    {
      to: '/merchants',
      icon: <MdBarChart className="me-2" />,
      text: 'Top Merchants',
      count: 5,
    },
    {
      to: '/map',
      icon: <MdLocationOn className="me-2" />,
      text: 'Map',
    },
    {
      to: '/return-distribution',
      icon: <MdSwapHoriz className="me-2" />,
      text: 'Return Distribution',
    },
    {
      to: '/distribution',
      icon: <MdSwapHoriz className="me-2" />,
      text: 'Distribution',
    },
    {
      to: '/distribution-jo',
      icon: <MdAssignment className="me-2" />,
      text: 'Distribution JO',
    },
    {
      to: '/worklist',
      icon: <MdAssignment className="me-2" />,
      text: 'Worklist',
      count: 61,
    },
    {
      to: '/worklist-jo',
      icon: <MdAssignment className="me-2" />,
      text: 'Worklist JO',
      count: 3,
    },
    {
      label: 'New Merchant',
      icon: <MdAddCircleOutline className="me-2" />,
      count: 5,
      isDropdown: true,
      isOpen: isOpenNewMerchant,
      toggle: toggleNewMerchant,
      subItems: [
        { to: '/merchants/all', text: 'All', count: 2 },
        { to: '/merchants/kendala', text: 'Kendala', count: 9 },
        { to: '/merchants/approved', text: 'Approved', count: 6630 },
      ],
    },
  ];

  return (
    <div
      style={{ display: 'block', width: '250px', backgroundColor: '#f8f9fa', height: '100%', padding: '15px' }}
      className={`admin-sidebar ${isSidebarOpen  ? 'show' : 'hide-on-mobile'}`}
    >
      <div className="d-flex align-items-center justify-content-between pt-2 pb-3 mb-3 border-bottom d-md-none">
        <h3 className="text-primary mb-1">Faqih Board</h3>
        <Button close onClick={toggleSidebar}>
          {/* <MdClose size={24} /> */}
        </Button>
      </div>
      <div className="mb-4 text-center d-none d-md-block">
        <h3 className="text-primary">Faqih Board</h3>
      </div>
      <Nav vertical pills>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {!item.isDropdown ? (
              <NavItem>
                <NavLink
                  tag={Link}
                  to={item.to}
                  active={location.pathname === item.to}
                  className="d-flex align-items-center"
                >
                  {item.icon}
                  {item.text}
                  {item.count && (
                    <span className="badge bg-secondary ms-auto">{item.count}</span>
                  )}
                </NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink
                  href="#"
                  onClick={item.toggle}
                  className="d-flex align-items-center"
                  style={{ cursor: 'pointer' }}
                >
                  {item.icon}
                  {item.label}
                  {item.count && (
                    <span className="badge bg-secondary ms-auto">{item.count}</span>
                  )}
                  <span className="ms-auto">
                    {item.isOpen ? (
                      <i className="bi bi-chevron-up"></i>
                    ) : (
                      <i className="bi bi-chevron-down"></i>
                    )}
                  </span>
                </NavLink>
                <Collapse isOpen={item.isOpen}>
                  <Nav vertical className="ms-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <NavItem key={subIndex}>
                        <NavLink
                          tag={Link}
                          to={subItem.to}
                          active={location.pathname === subItem.to}
                          className="d-flex align-items-center"
                        >
                          {subItem.text}
                          {subItem.count && (
                            <span className="badge bg-secondary ms-auto">
                              {subItem.count}
                            </span>
                          )}
                        </NavLink>
                      </NavItem>
                    ))}
                  </Nav>
                </Collapse>
              </NavItem>
            )}
          </React.Fragment>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;