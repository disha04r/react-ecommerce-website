// src/App.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Chatbot from './Chatbot';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import YourOrders from './YourOrders';
import Account from './Account';
import { OrderProvider } from './OrderContext';  // Import OrderProvider
import ProductDetails from './ProductDetails'; // New component

function App() {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item

        );
        
       
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
        
      }
      
    });
    alert("Added to cart");
    
  };

  return (
    <OrderProvider>  {/* Wrap everything in OrderProvider */}
      <div style={styles.container}>
        {loggedIn && <NavBar setCurrentPage={setCurrentPage} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        
        <div style={styles.pageContent}>
          {!loggedIn ? (
            <>
              {currentPage === "login" && <Login setCurrentPage={setCurrentPage} setLoggedIn={setLoggedIn} />}
              {currentPage === "signup" && <Signup setCurrentPage={setCurrentPage} setLoggedIn={setLoggedIn} />}
            </>
          ) : (
            <>
                {currentPage === "home" && (
                <Home
                  addToCart={addToCart}
                  setCurrentPage={setCurrentPage}
                  setSelectedProduct={setSelectedProduct}
                />
              )}
                          {currentPage === "products" && <ProductList addToCart={addToCart} setCurrentPage={setCurrentPage} setSelectedProduct={setSelectedProduct}/>}

              {currentPage === "cart" && <Cart cart={cart} setCart={setCart} />}
              {currentPage === "chat" && <Chatbot />}
              {currentPage === "orders" && <YourOrders />}
              {currentPage === "account" && <Account />}
              {currentPage === "productDetails" && (
                <ProductDetails
                  product={selectedProduct}
                  addToCart={addToCart}
                  setCurrentPage={setCurrentPage}
                  
                />
              )}
            </>
          )}
        </div>
        <Footer />
      </div>
    </OrderProvider>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  pageContent: {
    flex: "1",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  },
};

export default App;