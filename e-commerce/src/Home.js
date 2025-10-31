// src/Home.js

import React, { useState, useEffect } from 'react';

const promotionalBanners = [
  { id: 1, image: 'https://cdn.shopify.com/s/files/1/2805/7564/files/Web_Banner_FR_1024x.jpg?v=1674597246' },
  { id: 2, image: 'https://images.bewakoof.com/uploads/category/mobilesite/bwkf-inside-banner-new-arrivals-msite-women-1583916923.jpg' },
  { id: 3, image: 'https://royaltail.in/cdn/shop/files/royaltail-buy-2-get-1-free-offer-banner-01_1400x.jpg?v=1689925674' },
];

const bestsellingProducts = [
  { id: 1, name: 'Amayra Womens Cotton Printed Straight Kurta with Pant and Dupatta Set', price: 700, image: 'https://m.media-amazon.com/images/I/61MwDfidGeL._SY741_.jpg',detail:'Top Fabric: Cotton Silk Jacquard || Bottom Type: Bottom Cotton Silk With Gota Work Lace || Dupatta: Banarasi Silk 2.25 Mtr' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 2, name: 'Church Dresses for Women 3/4 Sleeve Bodycon Ruffle Vintage Wear to Work Pencil Midi Dress', price: 400, image: 'https://m.media-amazon.com/images/I/51Mo-ExGy8L._AC_UL480_FMwebp_QL65_.jpg',detail:'Material :95% polyester and 5% spandex. The church dress is soft to the touch, elastic and very comfortable.' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 3, name: 'NIKE Sportswear Mens Pullover Club Hoodie', price: 1150, image: 'https://m.media-amazon.com/images/I/71x2pMk7MpL._AC_UL480_FMwebp_QL65_.jpg',detail:'Nike Therma fabric locks in heat to help keep you warm' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 4, name: '4 Pack Mens Athletic Quick Dry Long Sleeve Performance Activewear T-Shirt', price: 500, image: 'https://m.media-amazon.com/images/I/81Zi9GDS-lL._AC_UL480_FMwebp_QL65_.jpg',detail:'Moisture-Wicking & Quick-Dry Performance: Stay cool and comfortable with our mens athletic shirts, designed with moisture-wicking and quick-dry fabric. These long sleeve tees are ideal for intense workouts, whether at the gym, running, or hiking. Available in black, white, blue, and orange, perfect for both casual and activewear. The cool dry fit technology keeps you feeling fresh in all conditions.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 5, name: 'Lymio Men Cargo Pants(Cargo-09-12)', price: 650, image: 'https://m.media-amazon.com/images/I/61th0PbHfBL._SY741_.jpg',detail:'Product Features: These cargo pants feature an elastic waistband with a drawstring for adjustable comfort. The elastic cuffs add to the overall relaxed fit. Equipped with five front pockets, including one with a zipper, these pants provide ample storage options. (The design does not include back pockets.)' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 6, name: 'ANRABESS Womens Open Front Knit Lightweight Cardigan Casual Long Coatigan Sweater Lady Jacket Coat 2024 Fall Outerwear', price: 1000, image: 'https://m.media-amazon.com/images/I/81TmhuoMY+L._AC_SY550_.jpg',detail:'This cardi is such a perfect choice for cozy days! Warm and soft material, youre sure to love wearing this gorgeous style all day long!You can easily throw this cardigan on over jeans and a top, a cute dress, or a romper for a stylish look!' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 7, name: 'Marvel Spider-Man 4 Pack Pullover T-Shirts Toddler to Big Kid', price: 2000, image: 'https://m.media-amazon.com/images/I/81dNagEcg5L._AC_SY550_.jpg',detail:'Youth fashion tees with cool character designs your child will love to wear; made from soft clothing material that is safe on childrens skin' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 8, name: 'Carhartt Girls Long-Sleeve Half-Zip Hooded Sweatshirt', price: 1770, image: 'https://m.media-amazon.com/images/I/71X879n-z9L._AC_SX569_.jpg',detail:'Hooded half-zip sweatshirt with front pouch pocket' ,star:'⭐ ⭐ ⭐ ⭐' },

];

const offersMenswear = [
  { id: 1, offer: '20% off on all Mens T-shirts', image: 'https://m.media-amazon.com/images/I/51kOPHXEexL._AC_SY741_.jpg' },
  { id: 2, offer: 'Buy 1 Get 1 Free on selected hoodies', image: 'https://m.media-amazon.com/images/I/616TKl2GwKL._AC_SX569_.jpg' },
  { id: 3, offer: 'Flat 30% off on Blazers', image: 'https://m.media-amazon.com/images/I/7172E6EBZ1L._AC_SX679_.jpg' },
  { id: 4, offer: 'Flat 50% off on Menswear', image: 'https://m.media-amazon.com/images/I/71sWSzZ2cnL._AC_SX569_.jpg' },
];

const offersWomenswear = [
  { id: 5, offer: 'Buy 1 Get 1 Free on selected dresses', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/s/e/y/l-6104-sheetal-associates-original-imagmnekgrz42nc3.jpeg?q=70' },
  { id: 6, offer: 'Flat 30% off on selected Lehengas', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-lehenga-choli/1/k/u/free-3-4-sleeve-semi-stitched-16-lehenga-lehenga-for-women-original-imah2w2tgjy5ahyw.jpeg?q=70' },
  { id: 7, offer: 'Flat 50% off on selected Kurtis', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/a/n/q/m-ku858blu-mokshi-original-imagxux8xupnmf9p.jpeg?q=70' },
  { id: 8, offer: 'Upto 60% off on selected Dupattas', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dupatta/c/3/d/2-meters-10-raj-lace-pack-of-10-cotton-blend-nakoda-creation-original-imahfdfwn3v3egj6.jpeg?q=70' },
];

function Home({ addToCart, setCurrentPage ,setSelectedProduct}) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % promotionalBanners.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? promotionalBanners.length - 1 : prevIndex - 1
    );
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage("productDetails");
  };

  useEffect(() => {
    const interval = setInterval(nextBanner, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.homeContainer}>
      {/* Promotional Banner Section */}
      <div style={styles.bannerContainer}>
        <button onClick={prevBanner} style={styles.arrowButton}>❮</button>
        <img
          src={promotionalBanners[currentBannerIndex].image}
          alt="Promotional Banner"
          style={styles.bannerImage}
        />
        <button onClick={nextBanner} style={styles.arrowButton}>❯</button>
      </div>

      <h2 style={styles.heading}>Bestselling Products</h2>
      <div style={styles.productsGrid}>
        {bestsellingProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>	₹ {product.price}</p>
            <button style={styles.addButton} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button style={styles.viewDetailsButton} onClick={() => handleViewDetails(product)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      <h2 style={styles.heading}>Offers on Menswear</h2>
      <div style={styles.productsGrid}>
        {offersMenswear.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.offer} style={styles.productImage} />
            <h3 style={styles.productName}>{product.offer}</h3>
          </div>
        ))}
      </div>

      <h2 style={styles.heading}>Offers on Womenswear</h2>
      <div style={styles.productsGrid}>
        {offersWomenswear.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.offer} style={styles.productImage} />
            <h3 style={styles.productName}>{product.offer}</h3>
          </div>
        ))}
      </div>

      {/* Chat Bubble */}
      <div style={styles.chatBubble} onClick={() => setCurrentPage("chat")}>
        💬
      </div>
    </div>
  );
}

const styles = {
  homeContainer: {
    padding: "20px",
    textAlign: "center",
    background: "#ffffff", // set background color to white
  },
  bannerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  bannerImage: {
    width: '100%',
    maxWidth: '1500px',
    height: '450px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  arrowButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '30px',
    cursor: 'pointer',
    color: '#333',
    margin: '0 10px',
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    margin: "10px 0",
  },
  productPrice: {
    fontSize: "16px",
    color: "#888",
    marginBottom: "10px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#3E2723",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  chatBubble: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#3E2723",
    color: "#fff",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
  },
  viewDetailsButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#3E2723",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px", // Optional: Adds spacing between buttons
  },
};

export default Home;