import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Container } from 'reactstrap';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="admin-dashboard-container">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div 
        className={`main-content-wrapper ${!isSidebarOpen ? 'full-width' : ''}`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <Container fluid className="page-content">
          <Outlet />
        </Container>
      </div>

      {isSidebarOpen && window.innerWidth <= 768 && (
        <div
          className="admin-sidebar-backdrop"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;