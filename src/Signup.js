// src/Signup.js
import React, { useState } from 'react';

function Signup({ setCurrentPage, setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signup successful!");
    setLoggedIn(true);
    setCurrentPage("home");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Join Shop Smart</h1>
        <p style={styles.subtitle}>Create an account to start your style journey!</p>
      </header>

      <div style={styles.signupBox}>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            style={styles.input}
          />
          <button type="submit" style={styles.signupButton}>Signup</button>
        </form>
        <p>
          Already have an account? <span onClick={() => setCurrentPage("login")} style={styles.link}>Login here</span>
        </p>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Shop Smart. All rights reserved.</p>
        <p style={styles.footerText}>
          Need help? <span style={styles.footerLink}>Contact Us</span> | <span style={styles.footerLink}>Privacy Policy</span> | <span style={styles.footerLink}>Terms of Service</span>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#3E2723', // Rich blue for title
  },
  subtitle: {
    fontSize: '18px',
    color: '#3E2723', // Darker blue for subtitle
    fontStyle: 'italic',
  },
  signupBox: {
    padding: "20px",
    maxWidth: "350px",
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  signupButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#3E2723",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  link: {
    color: "#3E2723",
    cursor: "pointer",
    textDecoration: "underline",
  },
  footer: {
    marginTop: '30px',
    padding: '15px',
    backgroundColor: '#3E2723', // Dark blue background for footer
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    borderTop: '2px solid #1e88e5',
  },
  footerText: {
    margin: '5px 0',
  },
  footerLink: {
    color: 'white', // Lighter blue for clickable links
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Signup;
