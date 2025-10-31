// src/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 ShopMate. All rights reserved.</p>
      <p>
        Contact us: <a href="mailto:support@shopmate.com" style={styles.link}>support@shopmate.com</a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#3E2723",
    color: "#fff",
    textAlign: "center",
    borderRadius: "8px",
  },
  link: {
    color: "#ffd700",
    textDecoration: "none",
  },
};

export default Footer;
