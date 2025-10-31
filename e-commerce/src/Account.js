// src/Account.js
import React, { useState, useEffect } from 'react';

function Account() {
  // Initial state for account details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Load account data (mocked for now, could be from local storage or API)
  useEffect(() => {
    // Simulating fetching user data (you can replace this with real API data)
    const storedName = localStorage.getItem('userName') || 'John Doe';
    const storedEmail = localStorage.getItem('userEmail') || 'john@example.com';
    
    setName(storedName);
    setEmail(storedEmail);
  }, []);

  // Save changes to local storage or API
  const handleSave = (e) => {
    e.preventDefault();

    // Save details to local storage (or update your API here)
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    // Note: password should be hashed and handled securely if using a real backend

    setMessage('Account details updated successfully!');
  };

  return (
    <div style={styles.container}>
      <h2>Account Settings</h2>
      <form onSubmit={handleSave} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.saveButton}>Save Changes</button>
        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  saveButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  message: {
    marginTop: '10px',
    color: 'green',
    fontWeight: 'bold',
  },
};

export default Account;
