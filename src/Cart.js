// src/Cart.js

import React from 'react';
import { useOrders } from './OrderContext'; // Import the useOrders hook to access orders

function Cart({ cart, setCart }) {
  const { addOrder } = useOrders(); // Access the addOrder function to save orders

  // Increase the quantity of an item
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease the quantity of an item
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Handle placing an order
  const placeOrder = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      items: cart,
    };

    addOrder(newOrder); // Add the order to the global orders
    alert("Order Placed!"); // Show alert
    setCart([]); // Clear the cart after placing the order
  };

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.heading}>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul style={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.productImage} />
                <div style={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                  <div style={styles.quantityControls}>
                    <button onClick={() => decreaseQuantity(item.id)} style={styles.quantityButton}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} style={styles.quantityButton}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p style={styles.total}>Total Price: ${totalPrice}</p>
          <button onClick={clearCart} style={styles.clearButton}>Clear Cart</button>

          {/* Place Order button that appears only when cart has items */}
          <button onClick={placeOrder} style={styles.placeOrderButton}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  cartContainer: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  cartList: {
    listStyleType: "none",
    padding: 0,
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
  },
  productImage: {
    width: "80px",
    height: "80px",
    borderRadius: "8px",
    marginRight: "15px",
  },
  itemDetails: {
    flex: "1",
    textAlign: "left",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  quantityButton: {
    padding: "5px 10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  total: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  clearButton: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  placeOrderButton: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Cart;
