import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';

function ProductDetails({ product, addToCart ,setCurrentPage}) {
    
    const navigate = useNavigate();
    const { productId } = useParams();
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={styles.detailsContainer}>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <h2 style={styles.productName}>{product.name}</h2>
      <p style={styles.productPrice}>₹ {product.price} </p>
      <p style={styles.productPrice}> {product.star} </p>
      <p style={styles.productDescription}>
       {product.detail}
      </p>
      <button style={styles.addButton} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      {/* <button style={styles.backButton} onClick={() => setCurrentPage('home')}>
        Go Back
      </button> */}
    </div>

  );
}

const styles = {
  detailsContainer: {
    padding: "20px",
    background: "linear-gradient(to bottom, #ffffff, #f7f7f7)",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    margin: "30px auto",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "flex-start",
  },
  productImageContainer: {
    flex: "1 1 40%",
    background: "#f4f4f4",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  productImage: {
    maxWidth: "100%",
    maxHeight: "400px",
    objectFit: "contain",
    borderRadius: "8px",
  },
  productDetails: {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  productName: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#333",
    lineHeight: "1.4",
  },
  productPrice: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#E53935",
    margin: "10px 0",
  },
  productDescription: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#ff9800",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },
  addButton: {
    flex: "1",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#3E2723", // Updated to match your given color
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    textTransform: "uppercase",
  },
  addButtonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 4px 15px rgba(62, 39, 35, 0.4)", // Hover effect matches button color
  },
  backButton: {
    flex: "1",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    background: "#f1f1f1",
    border: "2px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    textTransform: "uppercase",
  },
  backButtonHover: {
    backgroundColor: "#ddd",
  },
};



export default ProductDetails;
