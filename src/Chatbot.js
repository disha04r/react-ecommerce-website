import React, { useState, useEffect, useRef } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage, or start with a default bot message
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [{ text: "Hi! How can I help you?", sender: "bot" }];
  });
  const [input, setInput] = useState('');

  const chatBoxRef = useRef();

  const generateResponse = (text) => {
    if (/price|cost|how much/i.test(text)) 
      return "You can check the prices on our website's product page!";
  
  if (/hello|hi|hey|good morning|good afternoon|good evening/i.test(text)) 
      return "Hello! How can I assist you today?";
  
  if (/shipping|delivery/i.test(text)) 
      return "We offer free shipping on orders over $50! Let me know if you need details.";
  
  if (/return|refund/i.test(text)) 
      return "You can initiate a return or refund request via our Returns page.";
  
  if (/discount|offer|sale/i.test(text)) 
      return "Check out our latest discounts and offers on the Deals page!";
  if (/track|order status/i.test(text)) 
    return "You can track your order in the 'Order Tracking' section on our website.";

if (/payment|pay|checkout/i.test(text)) 
    return "We accept various payment methods, including credit cards, debit cards, and digital wallets.";

if (/support|help|customer service/i.test(text)) 
    return "Our support team is here for you! Visit the 'Contact Us' page for assistance.";

if (/account|profile|login|sign up/i.test(text)) 
    return "You can manage your account details in the 'My Account' section. Need help signing up? Let me know!";

if (/product|details|specs/i.test(text)) 
    return "You can view detailed information about our products on the individual product pages.";

if (/store|location|where to buy/i.test(text)) 
    return "We are an online store, but if you’re looking for physical stores, please check our 'Store Locator' page.";

if (/warranty|guarantee/i.test(text)) 
    return "All our products come with a warranty. Check the product page for specific terms and conditions.";

if (/reviews|rating/i.test(text)) 
    return "Check out what our customers are saying about our products on the 'Reviews' section.";

if (/subscription|newsletter/i.test(text)) 
    return "Stay updated with our latest deals and news by subscribing to our newsletter.";

if (/thank you|thanks|thank u/i.test(text)) 
    return "You're welcome! Let me know if there's anything else I can assist with.";

if (/cancel|modify order/i.test(text)) 
    return "To cancel or modify your order, please visit the 'My Orders' section or contact our support team.";

    return "Please contact customer support.";
  };

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) {
      alert("Message cannot be empty");
      return;
    }
    const userMessage = { text: input, sender: "user" };
    const botMessage = { text: generateResponse(input.toLowerCase()), sender: "bot" };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div style={styles.chatContainer}>
      <h2>Chat with Us</h2>
      <div ref={chatBoxRef} style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'bot' ? styles.botMessage : styles.userMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        style={styles.input}
        aria-label="Chat input"
      />
      <button
        onClick={handleSend}
        style={styles.button}
        disabled={!input.trim()}
        aria-label="Send message"
      >
        Send
      </button>
    </div>
  );
}

const styles = {
  chatContainer: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "0 auto",
  },
  chatBox: {
    maxHeight: "300px", // Scrollable height
    overflowY: "auto", // Enable scrolling
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  botMessage: {
    backgroundColor: "#eee",
    padding: "8px",
    borderRadius: "8px",
    margin: "5px 0",
    textAlign: "left",
  },
  userMessage: {
    backgroundColor: "#3E2723",
    color: "#fff",
    padding: "8px",
    borderRadius: "8px",
    margin: "5px 0",
    textAlign: "left",
  },
  input: {
    width: "80%",
    padding: "8px",
    marginRight: "5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#3E2723",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin:5,
  },
};

export default Chatbot;
