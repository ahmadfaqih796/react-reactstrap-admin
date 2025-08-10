import React from "react";
import {
  MdAddCircleOutline,
  MdArrowDropDown,
  MdAssignment,
  MdBarChart,
  MdChevronRight,
  MdDashboard,
  MdLocationOn,
  MdSwapHoriz,
} from "react-icons/md";
import { Link, useLocation } from "react-router";
import { Button, Collapse, Nav, NavItem, NavLink, Tooltip } from "reactstrap";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  isSidebarCollapsed,
  toggleSidebarCollapse,
}) => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = React.useState([]);
  const [tooltipOpen, setTooltipOpen] = React.useState({});

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => {
      if (prev.includes(label)) {
        return prev.filter((item) => item !== label);
      } else {
        return [...prev, label];
      }
    });
  };

  const toggleTooltip = (id) => {
    setTooltipOpen({
      ...tooltipOpen,
      [id]: !tooltipOpen[id],
    });
  };

  const navItems = [
    {
      to: "/",
      icon: <MdDashboard className="me-2" />,
      text: "Dashboard",
    },
    {
      to: "/summary-productivity",
      icon: <MdBarChart className="me-2" />,
      text: "Summary Productivity",
    },
    {
      to: "/merchants",
      icon: <MdBarChart className="me-2" />,
      text: "Top Merchants",
      count: 5,
    },
    {
      to: "/map",
      icon: <MdLocationOn className="me-2" />,
      text: "Map",
    },
    {
      to: "/return-distribution",
      icon: <MdSwapHoriz className="me-2" />,
      text: "Return Distribution",
    },
    {
      to: "/distribution",
      icon: <MdSwapHoriz className="me-2" />,
      text: "Distribution",
    },
    {
      label: "New Merchant",
      icon: <MdAddCircleOutline className="me-2" />,
      count: 5,
      isDropdown: true,
      subItems: [
        { to: "/merchants/all", text: "All", count: 2, icon: <MdBarChart /> },
        {
          to: "/merchants/return",
          text: "Return",
          count: 9,
          icon: <MdLocationOn />,
        },
        {
          to: "/merchants/approved",
          text: "Approved",
          count: 6630,
          icon: <MdAssignment />,
        },
      ],
    },
    {
      label: "Merchant Visit",
      icon: <MdAddCircleOutline className="me-2" />,
      count: 5,
      isDropdown: true,
      subItems: [
        {
          to: "/merchants-visit/all",
          text: "All",
          count: 2,
          icon: <MdBarChart />,
        },
        {
          to: "/merchants-visit/return",
          text: "Return",
          count: 9,
          icon: <MdLocationOn />,
        },
        {
          to: "/merchants-visit/approved",
          text: "Approved",
          count: 6630,
          icon: <MdAssignment />,
        },
      ],
    },
    {
      label: "Menu 1",
      icon: <MdAddCircleOutline className="me-2" />,
      count: 5,
      isDropdown: true,
      subItems: [
        {
          to: "/menu/all",
          text: "All",
          count: 2,
          icon: <MdBarChart />,
        },
        {
          to: "/menu/return",
          text: "Return",
          count: 9,
          icon: <MdLocationOn />,
        },
        {
          to: "/menu/approved",
          text: "Approved",
          count: 6630,
          icon: <MdAssignment />,
        },
      ],
    },
  ];

  React.useEffect(() => {
    const currentPath = location.pathname;
    let newActiveDropdown = null;

    for (const item of navItems) {
      if (item.isDropdown && item.subItems) {
        if (item.subItems.some((subItem) => subItem.to === currentPath)) {
          newActiveDropdown = item.label;
          break;
        }
      }
    }

    if (newActiveDropdown && !openDropdowns.includes(newActiveDropdown)) {
      setOpenDropdowns([newActiveDropdown]);
    } else if (!newActiveDropdown && openDropdowns.length > 0) {
      setOpenDropdowns([]);
    }
  }, [location.pathname]);

  return (
    <div
      className={[
        "admin-sidebar",
        isSidebarOpen ? "show" : "",
        isSidebarCollapsed ? "collapsed" : "",
      ].join(" ")}
    >
      {/* Header mobile */}
      <div className="sidebar-header d-md-none">
        <h3 className="text-primary">Faqih Board xx</h3>
        <Button close onClick={toggleSidebar} />
      </div>

      {/* Header desktop */}
      <div className="sidebar-header d-none d-md-flex">
        <h3 className="text-primary">Faqih Board</h3>
        <Button
          color="white"
          onClick={toggleSidebarCollapse}
          className="toggle-btn"
        >
          <MdChevronRight
            size={24}
            style={{
              transform: !isSidebarCollapsed
                ? "rotate(180deg)"
                : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Button>
      </div>
      <main
        style={{
          overflowY: "auto",
          height: "calc(100vh - 70px)",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(21, 12, 190, 0.2) transparent",
          scrollBehavior: "smooth",
        }}
      >
        <Nav vertical pills className="p-3">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              {!item.isDropdown ? (
                <NavItem>
                  <NavLink
                    tag={Link}
                    to={item.to}
                    active={location.pathname === item.to}
                    className="d-flex"
                    onClick={
                      window.innerWidth <= 768 ? toggleSidebar : undefined
                    }
                    id={`tooltip-${index}`}
                  >
                    <div className="icon">{item.icon}</div>
                    <span className={[!isSidebarCollapsed && "ms-2"].join("")}>
                      {item.text}
                    </span>
                    {!isSidebarCollapsed && item.count && (
                      <span className="badge bg-secondary ms-auto">
                        {item.count}
                      </span>
                    )}
                  </NavLink>
                  {isSidebarCollapsed && (
                    <Tooltip
                      isOpen={tooltipOpen[`tooltip-${index}`]}
                      target={`tooltip-${index}`}
                      toggle={() => toggleTooltip(`tooltip-${index}`)}
                      placement="right"
                    >
                      {item.text}
                    </Tooltip>
                  )}
                </NavItem>
              ) : (
                <NavItem key={index}>
                  <NavLink
                    href="#"
                    onClick={() => toggleDropdown(item.label)}
                    className="d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                    id={`tooltip-${index}`}
                  >
                    <div className="icon">{item.icon}</div>
                    {!isSidebarCollapsed && (
                      <span className="ms-2">{item.label}</span>
                    )}
                    {!isSidebarCollapsed && item.count && (
                      <span className="badge bg-secondary ms-auto">
                        {item.count}
                      </span>
                    )}
                    <span
                      className="ms-auto"
                      style={{
                        transform: openDropdowns.includes(item.label)
                          ? "rotate(180deg) translateY(-4px)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    >
                      <MdArrowDropDown />
                    </span>
                  </NavLink>
                  {isSidebarCollapsed && (
                    <Tooltip
                      isOpen={tooltipOpen[`tooltip-${index}`]}
                      target={`tooltip-${index}`}
                      toggle={() => toggleTooltip(`tooltip-${index}`)}
                      placement="right"
                    >
                      {item.label}
                    </Tooltip>
                  )}
                  <Collapse isOpen={openDropdowns.includes(item.label)}>
                    <Nav vertical className={isSidebarCollapsed ? "" : "ms-4"}>
                      {item.subItems.map((subItem, subIndex) => (
                        <NavItem key={subIndex}>
                          <NavLink
                            tag={Link}
                            to={subItem.to}
                            active={location.pathname === subItem.to}
                            className={`d-flex align-items-center ${
                              isSidebarCollapsed ? "justify-content-start" : ""
                            }`}
                            onClick={
                              window.innerWidth <= 768
                                ? toggleSidebar
                                : undefined
                            }
                            id={`sub-tooltip-${index}-${subIndex}`}
                          >
                            <span className="d-flex align-items-center">
                              {subItem.icon}
                              <span className="ms-2">{subItem.text}</span>
                            </span>
                            {!isSidebarCollapsed && subItem.count && (
                              <span className="badge bg-secondary ms-auto">
                                {subItem.count}
                              </span>
                            )}
                          </NavLink>
                          {isSidebarCollapsed && (
                            <Tooltip
                              isOpen={
                                tooltipOpen[`sub-tooltip-${index}-${subIndex}`]
                              }
                              target={`sub-tooltip-${index}-${subIndex}`}
                              toggle={() =>
                                toggleTooltip(
                                  `sub-tooltip-${index}-${subIndex}`
                                )
                              }
                              placement="right"
                            >
                              {subItem.text}
                            </Tooltip>
                          )}
                        </NavItem>
                      ))}
                    </Nav>
                  </Collapse>
                </NavItem>
              )}
            </React.Fragment>
          ))}
        </Nav>
      </main>
    </div>
  );
};

export default Sidebar;
