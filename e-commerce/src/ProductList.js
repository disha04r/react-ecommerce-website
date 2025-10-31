import React, { useState, useRef } from 'react';

const products = [
  { id: 1, name: 'Noble Monk Mens Regular Fit Shirt', price: 1000, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/61x8lR9hB+L._SX569_.jpg',detail:'Easy Care: machine washable, lightweight, breathable fabric provides all-day comfort' ,star:'⭐ ⭐ ⭐ ⭐ ⭐'},
  { id: 2, name: 'Bebonnie Womens Long Sleeve Casual Lapel V Neck Tops with Buttons', price: 599, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/612w29xiJrL._AC_SY550_.jpg',detail:'60% Polyester, 35% Rayon, 5% Spandex. This notch collar button down dressy tunic tops is very comfortable and holds its shape due to the 5% spandex material. 35% rayon for soft touch, and 60% polyester for thickness and warmth. The fabric is stretchy and breathable, lightweight and fast dry, but not flimsy, bulky or see thru. Nice blend for comfort and fashion.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 4, name: 'J.VER Mens Wrinkle-Free Formal Shirt Business Casual Shirt', price: 255, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/51rkKPruYvL._AC_SX569_.jpg',detail:'Wrinkle Free: The combination of high-quality fabrics and special technology makes the solid dress shirt not easy to wrinkle, easy to care.The classic spread collar easily matches with a tie or bow tie' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 5, name: 'Arach&Cloz Womens 2024 Wool Lightweight Long Sleeve Top', price: 1800, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/71LcjAHVtdL._AC_SX466_.jpg',detail:'Open Front, V-Neck, Long Sleeves, Buttons, Chic Knit, Casual Style, Solid Plain Knit, Warm Knit Cardigan Sweater, Lightweight Womens Jacket. Made of stretchy and soft material, this lightweight cardigan is suitable for all body types, helping you create a charming outfit for any activity.' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 6, name: 'AUTOMET Womens Sweatshirts Half Zip Cropped Pullover Fleece Quarter Zipper Hoodies', price: 699, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/61hDQfyQtrL._AC_SY550_.jpg',detail:'womens fleece lined athletic hoodies, fall outfits for women, women pullover sweatshirt,teen girls y2k clothes, drop shoulder collar, kangaroo pockets, long sleeve with thumb holes, help keep your sleeves in place.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 7, name: 'LERUCCI Womens Casual Long Sleeves Solid V-Neck Tunics Shirt Tops with Pockets', price: 799, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/61d7c3etaZL._AC_SY550_.jpg',detail:'long shirts to wear with leggings,with pockets,soild color fall tee,tunic tops for women loose fit casual,basic workout tops' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 8, name: 'Nike Club Mens Training Joggers', price: 899, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/41x80i3XfSS._AC_SX679_.jpg',detail:'Premium brushed-back fleece feels soft, warm and comfortable' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 9, name: 'Hanes Mens Hoodie', price: 725, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/61JckjKagSL._AC_SX569_.jpg',detail:'FLEECE TO FEEL GOOD ABOUT - Hanes EcoSmart mens hoodie is made with cotton sourced from American farms.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 10, name: 'Nike Pro Hyperwarm Hydropull Hood', price: 745, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/81HHSNG-nhL._AC_SX569_.jpg',detail:'Pull-On closure, Hand wash only' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 11, name: 'Eghunooy Baby Girl Long Sleeve Floral Hoodie Sweatshirt Pants with Pocket Headband Outfit Sets', price:575, category: 'Kids', image: 'https://m.media-amazon.com/images/I/61k6RzbEX3L._AC_SX569_.jpg',detail:'Comfortable and breathable for your baby to wear.' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 12, name: 'Fommy Newborn Baby Boy Plaid Letter Print Long Sleeve Hoodies + Long Pants 2PCS Fall Winter Outfits Set', price: 499, category: 'Kids', image: 'https://m.media-amazon.com/images/I/71n-Cx5LDQL._AC_SY550_.jpg',detail:' Newborn boy outfits is made of the best quality natural cotton, soft, breathable and comfortable. It will not be allergic to the skin of newborns in the hospital. It is the newborn boy coming home outfits for hospital . It is the best for parents to give their babies Gift.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 13, name: 'Disney Lilo & Stitch Girls French Terry Crossover Hoodie Toddler to Big Kid', price: 890, category: 'Kids', image: 'https://m.media-amazon.com/images/I/61wxqIc+mpL._AC_SX569_.jpg',detail:'Officially licensed Disney little girls cute, comfy and stylish long sleeve graphic hooded sweatshirt' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 14, name: 'TTYAOVO Girls Applique Prom Gowns Luxury Princess Long Dresses', price: 490, category: 'Kids', image: 'https://m.media-amazon.com/images/I/61NYHqhIToL._AC_SX569_.jpg',detail:'Floor length design,with comfortable cotton lining clothing, Available Colors: champagne; Pink; Dark Blue; Red.Choosing it,It will bring your princess a new experience.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 15, name: 'Basoteeuo 3D Galaxy Hoodies for Boys Girls', price: 699, category: 'Kids', image: 'https://m.media-amazon.com/images/I/61y1r-g82mL._AC_SX522_.jpg',detail:'US Trademark "Basoteeuo" Brand Protection, Quality Assurance.' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 16, name: 'LOKTARC Boys Pull-On Slim Fit Camo Cargo Jogger Pants', price: 655, category: 'Kids', image: 'https://m.media-amazon.com/images/I/612XQLiz57L._AC_SX522_.jpg',detail:'Our boys midweight cargo pants are crafted from a 97% cotton and 3% spandex stretch twill fabric, offering a soft and breathable wear thats suitable for all seasons.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 17, name: 'NZRVAWS Baby Boy Clothes 6 12 18 24 Months 2 3 4T Toddler Kid Outfit Infant Letter Printed Hoodie Sweatsuit Denim Jeans', price: 599, category: 'Kids', image: 'https://m.media-amazon.com/images/I/71HrxVYANyL._AC_SX466_.jpg',detail:'Cotton blend, high quality, soft handling, comfortable and breathable to wearing, no any not irritating to your babys skin.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 18, name: 'adidas Boys Short Sleeve Aeroready Performance Logo Tee T-Shirt', price: 455, category: 'Kids', image: 'https://m.media-amazon.com/images/I/61bAN-63gBL._AC_SX569_.jpg',detail:'They are always growing and changing and their bodies are, too. Thats why we now offer kids extended sizing for our most popular apparel. Kids deserve great-fitting, functional gear they can feel confident wearing.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 19, name: 'Kids Boy Pu Leather Jackets Girl Faux Motorcycle Coats Teen Winter Biker Clothes', price: 799, category: 'Kids', image: 'https://m.media-amazon.com/images/I/71yX8JHLuVL._AC_SX569_.jpg',detail:'Soft PU Leather, nice hand feel, waterproof and windproof, suitable for spring and autumn, thin bomber Jackets, Sizes for boys and girls (3-12 Years).' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 20, name: 'Winter Coat For Baby Boys Girls Fleece Jacket Toddler Clothes', price: 1220, category: 'Kids', image: 'https://m.media-amazon.com/images/I/61ix4LAX-IL._AC_SX569_.jpg',detail:' the outer material is made of high-quality polyester, which not only well in touching, but also water resistancy; and the inner material is soft and warm, which even can touch babys skin' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 21, name: 'COZYEASE BoysZip Up Hoodies Pullover', price: 230, category: 'Kids', image: 'https://m.media-amazon.com/images/I/61dyAOI3K9L._AC_SY550_.jpg',detail:'Hoodies for boys, zip up hoodies, boys jackets, zipper hoodies for boys, boys hoodies size 10-12, lightweight hoodies for boys, spring tops, fall tops for teen boys' ,star:'⭐ ⭐ ⭐ ' },
  { id: 22, name: 'Vcansion Mens Classic Stand Collar Slim Fit Casual Knitted Sweater', price: 490, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/816MjmH6DtL._AC_SX466_.jpg',detail:' Made of high quality soft elastic fabric and thick material, lightweight and warm, fleece blend knitted, skin-friendly fully fleece lined, comfy to the touch' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 23, name: 'JMIERR Mens Chino Pants Casual Tapered Trousers with Pockets', price: 650, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/61fLRrhzkcL._AC_SY550_.jpg',detail:'Crafted with a modern slim fit design, these casual pants are tailored to flatter all body types. Featuring a front zipper and button closure, along with stylish D-ring details at the waist, these pants add a touch of sophistication to any outfit. The two side pockets and single back pocket offer practical storage for everyday essentials, making them perfect for various occasions.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 24, name: 'Shop Smart Essentials Mens Athletic-Fit Stretch Jean', price: 499, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/71oF5-0Kl8L._AC_SY550_.jpg',detail:'This product was previously sold as Goodthreads and now as Amazon Essentials.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 24, name: 'CHAOREN Mens Belt Leather Ratchet Belt(35mm)', price: 799, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/81inmnspZML._AC_SY550_.jpg',detail:' Achieve the perfect fit with our innovative rachette belt. Enjoy up to 1/5" adjustments, ensuring a comfortable and precise fit everywhere you go. The easily removable buckle allows you to cut the belt to your ideal size, making it tailored to your unique style. Sharp, sleek, and attractive - adjustable dress belt accentuates your personality with confidence!' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 26, name: 'COOFANDY Mens Casual Business Formal Waistcoat Vest', price: 399, category: 'Menswear', image: 'https://m.media-amazon.com/images/I/71LIApuw+SL._AC_SY550_.jpg',detail:'The mens business casual suit vest is made of high-quality twill fabric, which is skin friendly, durable, and wrinkle free. The back of the mens tailcoat fashionable formal vest is spliced with smooth satin material, giving you an elegant look and comfortable wearing experience' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 27, name: 'VIBRANCE Saree Ruffle Georgette Ethnic Indian Women Party Wear Sari Maroon', price: 899, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/51D0+8WHobL._AC_SY550_.jpg',detail:'Saree Ruffle Georgette Ethnic Indian Women Party Wear Frill Designer Border Sari' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 28, name: 'Amayra Womens Rayon Printed Anarkali Kurti with Palazzos and Dupatta Set', price: 455, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/81PtbFjdckL._AC_SX466_.jpg',detail:' Please choose a garment size that is two inches more than your body measurement. e.g:- for bust size -36 inch, select garment size - Medium (M). There might be slight variation in the actual color of the product due to different screen resolutions.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 29, name: 'Indian Womens Blue Foil Printed Poly Crepe Kurti With Palazzo', price: 518, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/713pRR-liZL._AC_SY550_.jpg',detail:'1 readymade Kurti and 1 Palazzo only.' ,star:'⭐ ⭐ ⭐ ⭐ ⭐' },
  { id: 30, name: 'Wedding Dresses for Bride 2024', price: 690, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/61SuqNfzs8L._AC_SX569_.jpg',detail:'his dress can be made to your measurement.Please choose "One Size" option and you will get a perfect custom made dress,Design Can be Customized.such as zipper back instead of lace pa back ,short sleeves or sleeveless instead of long sleeeves.' ,star:'⭐ ⭐ ⭐ ⭐' },
  { id: 31, name: 'Women’s Elegant Princess Dress', price: 650, category: 'Womenswear', image: 'https://m.media-amazon.com/images/I/718Ek2R1MGL._AC_SX466_.jpg',detail:'Suitable for dress-up party, stage performance, role play, movie cartoon cosplay party, photo props, Halloween Christmas cosplay, photography, masquerade ball, evening event, coronation, and so on.' ,star:'⭐ ⭐ ⭐ ⭐' },

];

const ProductList = ({ addToCart,setCurrentPage,setSelectedProduct }) => {
  const scrollRefs = useRef({}); // Ref object to handle multiple categories
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortOption, setSortOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
 

  const handleScroll = (direction, category) => {
    const scrollAmount = 300;
    scrollRefs.current[category].scrollBy({ 
      left: direction * scrollAmount, 
      behavior: 'smooth' 
    });
  };

  const handleSortOption = (option) => {
    setSortOption(option);
    setShowSortOptions(false);
  };

  const viewProductDetails = (product) => {
  
    setSelectedProduct(product);
    setCurrentPage("productDetails"); // Navigate to product details page
   
    console.log("Product details:", product);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'lowToHigh') return a.price - b.price;
    if (sortOption === 'highToLow') return b.price - a.price;
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ['Menswear', 'Womenswear', 'Kids'];

  return (
    <div style={styles.pageContainer}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.sortIconWrapper}>
        <button onClick={() => setShowSortOptions(!showSortOptions)} style={styles.sortButton}>☰</button>
        {showSortOptions && (
          <div style={styles.sortOptions}>
            <p onClick={() => handleSortOption('lowToHigh')} style={styles.sortOption}>Price: Low to High</p>
            <p onClick={() => handleSortOption('highToLow')} style={styles.sortOption}>Price: High to Low</p>
            <p onClick={() => handleSortOption(null)} style={styles.sortOption}>Reset Filter</p>
          </div>
        )}
      </div>
      {categories.map((category) => (
        <div key={category} style={styles.categorySection}>
          <h2 style={styles.heading}>{category}</h2>
          <div style={styles.scrollButtons}>
            <button onClick={() => handleScroll(-1, category)} style={styles.scrollButton}>◀</button>
            <button onClick={() => handleScroll(1, category)} style={styles.scrollButton}>▶</button>
          </div>
          <div 
            style={styles.scrollContainer} 
            ref={(el) => (scrollRefs.current[category] = el)}
          >
            {filteredProducts.filter((product) => product.category === category).map((product) => (
              <div key={product.id} style={styles.productCard}>
                <img src={product.image} alt={product.name} style={styles.productImage} />
                <div style={styles.productDetails}>
                  <p style={styles.productName}>{product.name}</p>
                  <p style={styles.productPrice}>	₹ {product.price}</p>
                  <button onClick={() => addToCart(product)} style={styles.addToCartButton}>Add to Cart</button>
                  <button style={styles.detailsButton} onClick={() => viewProductDetails(product)}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
    backgroundColor: '#f7f7f7',
  },
  searchInput: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sortIconWrapper: {
    position: 'relative',
    textAlign: 'right',
  },
  sortButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  sortOptions: {
    position: 'absolute',
    top: '40px',
    right: '0',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    width: '200px',
    zIndex: '100',
  },
  sortOption: {
    padding: '10px',
    cursor: 'pointer',
    color: '#333',
    fontSize: '14px',
    borderBottom: '1px solid #eee',
  },
  categorySection: {
    marginBottom: '40px',
    position: 'relative',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  scrollButtons: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    transform: 'translateY(-50%)',
  },
  scrollButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px 0',
    scrollBehavior: 'smooth',
    gap: '20px', // Adds consistent spacing between products
  },
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    margin: '10px', // Adds spacing between product cards
    textAlign: 'center', // Centers content inside the card
  },
  productImage: {
    width: '150px', // Adjust width for uniform size
    height: '150px', // Set a fixed height for consistency
    objectFit: 'contain', // Ensures images fit within the defined dimensions without distortion
    borderRadius: '8px', // Adds slight roundness to the edges
    marginBottom: '10px', // Space between image and text
  },
  productDetails: {
    textAlign: 'center',
  },
  productName: {
    fontSize: '16px',
    margin: '10px 0',
    fontWeight: '500',
  },
  productPrice: {
    fontSize: '18px',
    color: '#444',
    fontWeight: 'bold',
  },
  addToCartButton: {
    // marginTop: '10px',
    // padding: '10px 15px',
    // backgroundColor: '#007BFF',
    // color: '#fff',
    // border: 'none',
    // borderRadius: '4px',
    // cursor: 'pointer',
  
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#3E2723",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    
  },
  detailsButton:{
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#3E2723",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px", // Optional: Adds spacing between buttons
  }
};

export default ProductList;
