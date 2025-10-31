// src/NavBar.js
import React, { useState, useEffect } from 'react';

function NavBar({ setCurrentPage, loggedIn, setLoggedIn }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true; 
      recognitionInstance.interimResults = false; 
      recognitionInstance.lang = 'en-US'; 
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        handleVoiceCommand(transcript);
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn("Speech Recognition is not supported by this browser.");
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  const handleVoiceCommand = (command) => {
    // Define actions based on recognized commands
    if (command.includes("home")) {
      setCurrentPage("home");
    } else if (command.includes("products")) {
      setCurrentPage("products");
    } else if (command.includes("cart")) {
      setCurrentPage("cart");
    } else if (command.includes("chat")) {
      setCurrentPage("chat");
    } else if (command.includes("login") && !loggedIn) {
      setCurrentPage("login");
    } else if (command.includes("logout") && loggedIn) {
      handleLogout();
    } else if (command.includes("scroll")) {
      handleScrollCommand(command);
    }
  };

  const handleScrollCommand = (command) => {
    if (command.includes("up")) {
      window.scrollBy({ top: -200, behavior: "smooth" });
    } else if (command.includes("down")) {
      window.scrollBy({ top: 200, behavior: "smooth" });
    } else if (command.includes("top")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (command.includes("bottom")) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentPage("login");
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo} onClick={() => setCurrentPage("home")}>Shop Smart</h1>
      
      <div style={styles.navLinks}>
        {loggedIn ? (
          <>
            <button onClick={() => setCurrentPage("home")} style={styles.navButton}>Home</button>
            <button onClick={() => setCurrentPage("products")} style={styles.navButton}>Products</button>
            <button onClick={() => setCurrentPage("cart")} style={styles.navButton}>Cart</button>
            <button onClick={() => setCurrentPage("chat")} style={styles.navButton}>Chatbot</button>
            
            {/* Profile Icon with Dropdown */}
            <div style={styles.profileContainer} onClick={() => setShowDropdown((prev) => !prev)}>
              <span style={styles.profileIcon}>👤</span>
              {showDropdown && (
                <div style={styles.dropdownMenu}>
                  <button style={styles.dropdownItem} onClick={() => setCurrentPage("orders")}>
                    Your Orders
                  </button>
                  <button style={styles.dropdownItem} onClick={() => setCurrentPage("account")}>
                    Account Settings
                  </button>
                  <button style={{ ...styles.dropdownItem, ...styles.logoutItem }} onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <button onClick={() => setCurrentPage("home")} style={styles.navButton}>Home</button>
            <button onClick={() => setCurrentPage("login")} style={styles.loginButton}>Login</button>
          </>
        )}
      </div>

      {/* Voice Control Buttons */}
      <div style={styles.voiceButtonContainer}>
        <button onClick={startListening} style={styles.voiceButton}>🎤 Start Voice</button>
        <button onClick={stopListening} style={styles.voiceButton}>🔇 Stop Voice</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#3E2723",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    cursor: "pointer",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  navButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
  loginButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  profileContainer: {
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '&:hover .profileIcon': {
      color: "white", // Light grey for hover effect
    },
   
  },
  profileIcon: {
    fontSize: "24px",
    color: "#FFD700", // Bright yellow
    backgroundColor: "white", // Semi-transparent black background
    borderRadius: "50%", // Circular background
    padding: "5px",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    zIndex: 1000,
  },
  dropdownItem: {
    width: "100%",
    padding: "10px 20px",
    textAlign: "left",
    backgroundColor: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "#333",
  },
  logoutItem: {
    color: "#dc3545", // Red color for the Logout button
    fontWeight: "bold",
  },
  voiceButtonContainer: {
    display: "flex",
    gap: "0", // Removes any gap between buttons
   
  },
  voiceButton: {
    backgroundColor: "#ff9800",
   backgroundColor:'yellow',
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px 0 0 4px", // Adjust border-radius for the first button
    cursor: "pointer",
    margin:5
  },
  voiceButtonNext: {
    backgroundColor: "#ff9800",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "0 4px 4px 0", // Adjust border-radius for the second button
    cursor: "pointer",
  }
};

export default NavBar;
