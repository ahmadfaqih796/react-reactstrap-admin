import React from 'react';
import { Outlet } from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const AdminLayout = () => {
  return (
    <div className="d-flex w-100">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <Container fluid className="page-content">
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default AdminLayout;