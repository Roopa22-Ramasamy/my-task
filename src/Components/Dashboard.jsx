
import React, { useState } from 'react';
import './Dashboard.css'; 


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const deltaX = currentX - startX;

    if (deltaX > 50) {
      setSidebarOpen(true);
    } else if (deltaX < -50) {
      setSidebarOpen(false);
    }

    setStartX(0);
    setCurrentX(0);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const dashboardStyle = {
    display: 'flex',
    overflowX: 'hidden',
    
  };

  const sidebarStyle = {
    width: '200px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
    
  };

  const logoStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
  };

  const menuStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const menuItemStyle = {
    marginBottom: '10px',
    cursor: 'pointer',
  };

  const mainContentStyle = {
    flex: '1',
    padding: '20px',
  };

  return (
    <div
      style={dashboardStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar}>&#9776; Toggle Sidebar</button>

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={logoStyle}>Your Logo</div>
        <ul style={menuStyle}>
          <li style={menuItemStyle}>Dashboard</li>
          <br/>
          <li style={menuItemStyle}>To-do list</li>
          <br/>
          <li style={menuItemStyle}>Goals</li>
          <br/>
          <li style={menuItemStyle}>Projects</li>
          <br/>
          <li style={menuItemStyle}>Budgets</li>
          <br/>
          <li style={menuItemStyle}>Calendar</li>
          <br/>
          <li style={menuItemStyle}>Reports</li>
          <br/>
        </ul>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Your main content goes here */}
        <h1>Dashboard</h1>
        <div >

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
