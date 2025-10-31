// src/Orders.js

import React from 'react';
import { useOrders } from './OrderContext';

function Orders() {
  const { orders } = useOrders();

  return (
    <div style={styles.container}>
      <h2>Your Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} style={styles.orderCard}>
            <h3>Order ID: {order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Total: ₹{order.total}</p>
            <h4>Items:</h4>
            <ul style={styles.itemsList}>
              {order.items.map((item, index) => (
                <li key={index} style={styles.item}>
                  <img src={item.image} alt={item.name} style={styles.productImage} />
                  <div>
                    <p>{item.name} - ₹{item.price} x {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  orderCard: {
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  itemsList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  },
  productImage: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
    borderRadius: '4px',
  },
};

export default Orders;
