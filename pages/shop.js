// pages/shop.js
import Link from 'next/link';

export default function Shop() {
  return (
    <div className="shop-container">
      {/* Header */}
      <header style={headerStyles}>
        <h1 style={headingStyles}>Shop - Handcrafted Haven</h1>
        <nav>
          <ul style={navListStyles}>
            <li style={navItemStyles}><Link href="/">Home</Link></li>
            <li style={navItemStyles}><Link href="/shop">Shop</Link></li>
            <li style={navItemStyles}><Link href="/sign-up">Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      {/* Shop Content */}
      <main style={mainContentStyles}>
        <h2 style={subHeadingStyles}>Our Shop</h2>
        <p style={paragraphStyles}>Explore our range of handmade products. Quality, craftsmanship, and care in every item.</p>

        <section className="product-cards" style={productCardsStyles}>
          <h3>Shop All Products</h3>
          <div style={productCardStyles}>
            <div className="product-card" style={cardStyles}>
              <img src="https://via.placeholder.com/220x220" alt="Handmade Basket" style={imageStyles} />
              <h3>Handmade Basket</h3>
              <p>$25.00</p>
              <button style={buttonStyles}>Add to Cart</button>
            </div>
            <div className="product-card" style={cardStyles}>
              <img src="https://via.placeholder.com/220x220" alt="Wooden Spoon Set" style={imageStyles} />
              <h3>Wooden Spoon Set</h3>
              <p>$18.00</p>
              <button style={buttonStyles}>Add to Cart</button>
            </div>
            <div className="product-card" style={cardStyles}>
              <img src="https://via.placeholder.com/220x220" alt="Handcrafted Pottery Mug" style={imageStyles} />
              <h3>Handcrafted Pottery Mug</h3>
              <p>$22.00</p>
              <button style={buttonStyles}>Add to Cart</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={footerStyles}>
        <p>&copy; 2024 Handcrafted Haven. All Rights Reserved. | <Link href="/privacy-policy" style={linkStyles}>Privacy Policy</Link></p>
      </footer>
    </div>
  );
}

// Styles for the shop page
const headerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const headingStyles = {
  fontSize: '2.5rem',
  marginBottom: '10px',
};

const navListStyles = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
};

const navItemStyles = {
  margin: '0 15px',
};

const mainContentStyles = {
  padding: '40px 20px',
  textAlign: 'center',
  backgroundColor: '#f8f8f8',
};

const subHeadingStyles = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const paragraphStyles = {
  fontSize: '1.2rem',
  marginBottom: '40px',
};

const productCardsStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
};

const productCardStyles = {
  width: '30%',
};

const cardStyles = {
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  backgroundColor: '#fff',
};

const imageStyles = {
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
};

const buttonStyles = {
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const footerStyles = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#333',
  color: '#fff',
};

const linkStyles = {
  color: '#fff',
  textDecoration: 'none',
};
