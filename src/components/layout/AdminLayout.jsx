import React from "react";
import { Outlet } from "react-router";
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(
    window.innerWidth > 768
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    if (window.innerWidth > 768) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
        setIsSidebarCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarCollapsed]);

  return (
    <div className="admin-dashboard-container">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebarCollapse={toggleSidebarCollapse}
      />

      <div
        className={[
          "main-content-wrapper",
          !isSidebarOpen ? "full-width" : "",
          isSidebarCollapsed ? "collapsed" : "",
        ].join(" ")}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <Container fluid className="page-content">
          <Outlet />
        </Container>
      </div>

      {isSidebarOpen && window.innerWidth <= 768 && (
        <div className="admin-sidebar-backdrop" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default AdminLayout;
