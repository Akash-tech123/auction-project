// src/components/Logo.js

import React from 'react';

// You can replace 'auction-logo.png' with the name of your logo file
const Logo = () => {
  return (
    <div className="logo-container" style={styles.container}>
      <img src="/auction-logo.png" alt="Auction Logo" style={styles.logo} />
    </div>
  );
};

// Styles for the logo
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  logo: {
    width: '200px',  // You can adjust the size of the logo
    height: 'auto',
  },
};

export default Logo;
