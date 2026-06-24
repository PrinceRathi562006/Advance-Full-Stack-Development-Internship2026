import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import MainLoanding from "./components/MainLoading.jsx";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item,
    0
  );

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        setShowCart={setShowCart}
      />

      <MainLoanding
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

      {/* Cart Modal */}
      {showCart && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "90%",
              maxWidth: "900px",
              maxHeight: "80vh",
              overflowY: "auto",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2>
                🛒 Cart ({totalItems} items)
              </h2>

              <button
                onClick={() => setShowCart(false)}
                style={{
                  border: "none",
                  background: "red",
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                ✕ Close
              </button>
            </div>

            {cartItems.length === 0 ? (
              <h3>Your cart is empty.</h3>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    padding: "15px",
                    marginBottom: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <h3>{item.title}</h3>

                    <p>
                      ⭐ {item.rating} | {item.category}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p>
                      Stock: {item.stock}
                    </p>

                    <p>{item.description}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <button
                      style={{
                        background: "#ff9900",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      ⚡ Buy Now
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      style={{
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;