import { useState } from "react";

const Navbar = ({ cartItems = [], setShowCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <style>
        {`
          *{
            box-sizing:border-box;
          }

          .nav-link{
            color:white;
            text-decoration:none;
            font-weight:600;
            transition:0.3s ease;
            cursor:pointer;
          }

          .nav-link:hover{
            color:#00e5ff;
          }

          .desktop-menu{
            display:flex;
            align-items:center;
            gap:25px;
          }

          .desktop-buttons{
            display:flex;
            gap:12px;
          }

          .hamburger{
            display:none;
            font-size:2rem;
            color:white;
            cursor:pointer;
            user-select:none;
          }

          .signin-btn,
          .login-btn{
            padding:10px 18px;
            border-radius:8px;
            cursor:pointer;
            font-weight:600;
            transition:0.3s ease;
          }

          .signin-btn:hover,
          .login-btn:hover{
            transform:translateY(-2px);
          }

          .cart-badge{
            background:red;
            color:white;
            padding:2px 8px;
            border-radius:50%;
            font-size:12px;
            margin-left:5px;
          }

          @media (max-width:768px){

            .desktop-menu{
              display:none;
            }

            .desktop-buttons{
              display:none;
            }

            .hamburger{
              display:block;
            }

            .mobile-menu{
              position:fixed;
              top:80px;
              left:0;
              width:100%;
              background:#1e293b;
              display:flex;
              flex-direction:column;
              align-items:center;
              gap:20px;
              padding:25px 0;
              z-index:9999;
              box-shadow:0 8px 20px rgba(0,0,0,0.3);
              animation:slideDown 0.3s ease;
            }

            .mobile-btns{
              display:flex;
              flex-direction:column;
              width:80%;
              gap:12px;
            }
          }

          @keyframes slideDown{
            from{
              opacity:0;
              transform:translateY(-20px);
            }
            to{
              opacity:1;
              transform:translateY(0);
            }
          }
        `}
      </style>

      <nav
        style={{
          background: "linear-gradient(90deg,#0f172a,#1e293b)",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 25px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          position: "sticky",
          top: 0,
          zIndex: 9999,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "2rem" }}>🛒</span>

          <h2
            style={{
              color: "#00e5ff",
              margin: 0,
            }}
          >
            ShopEase
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="#" className="nav-link">
            Home
          </a>

          <a href="#" className="nav-link">
            Products
          </a>

          <a href="#" className="nav-link">
            About
          </a>

          <a href="#" className="nav-link">
            Contact
          </a>

          <span
            className="nav-link"
            onClick={() => setShowCart(true)}
          >
            🛒 Cart
            {totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
            )}
          </span>
        </div>

        {/* Desktop Buttons */}
        <div className="desktop-buttons">
          <button
            className="signin-btn"
            style={{
              background: "transparent",
              border: "2px solid #00e5ff",
              color: "#00e5ff",
            }}
          >
            Sign In
          </button>

          <button
            className="login-btn"
            style={{
              background: "#00e5ff",
              border: "none",
              color: "#0f172a",
            }}
          >
            Log In
          </button>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a
            href="#"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>

          <a
            href="#"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          <span
            className="nav-link"
            onClick={() => {
              setShowCart(true);
              setMenuOpen(false);
            }}
          >
            🛒 Cart ({totalItems})
          </span>

          <div className="mobile-btns">
            <button
              style={{
                background: "transparent",
                border: "2px solid #00e5ff",
                color: "#00e5ff",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>

            <button
              style={{
                background: "#00e5ff",
                border: "none",
                color: "#0f172a",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;