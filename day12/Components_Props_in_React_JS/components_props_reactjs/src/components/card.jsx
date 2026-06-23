import { useState } from "react";

export const Card = ({ items, cartItems, setCartItems }) => {
  const [quantities, setQuantities] = useState(
    items.map((item) => Number(item.quantity))
  );

  const increaseQuantity = (index) => {
    const updated = [...quantities];
    updated[index] += 1;
    setQuantities(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = [...quantities];

    if (updated[index] > 0) {
      updated[index] -= 1;
      setQuantities(updated);
    }
  };

  const addToCart = (product, quantity) => {
    if (quantity <= 0) return;

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity,
        },
      ]);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill,minmax(280px,1fr))",
        gap: "25px",
        padding: "20px",
      }}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          style={{
            background: "#f8f9fa",
            borderRadius: "15px",
            padding: "15px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          {/* Stock Badge */}
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                right: "0",
                top: "0",
                background:
                  item.stock > 0
                    ? "#28a745"
                    : "#dc3545",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              {item.stock > 0
                ? "In Stock"
                : "Out of Stock"}
            </span>

            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
              }}
            />
          </div>

          <h3
            style={{
              color: "#1e3c72",
              minHeight: "50px",
            }}
          >
            {item.title}
          </h3>

          <p>
            ⭐ {item.rating} | {item.category}
          </p>

          <p>Product #{index + 1}</p>

          {/* Quantity Selector */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <button
              onClick={() =>
                decreaseQuantity(index)
              }
              style={{
                width: "35px",
                height: "35px",
                border: "none",
                borderRadius: "50%",
                background: "#dc3545",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              -
            </button>

            <span
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {quantities[index]}
            </span>

            <button
              onClick={() =>
                increaseQuantity(index)
              }
              style={{
                width: "35px",
                height: "35px",
                border: "none",
                borderRadius: "50%",
                background: "#28a745",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>

          {item.stock > 0 &&
            item.stock <= 5 && (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                🔥 Only {item.stock} Left!
              </p>
            )}

          <div
            style={{
              background: "#eef2f7",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h4>Product Details</h4>
            <p>{item.description}</p>
          </div>

          <p
            style={{
              color: "green",
              fontWeight: "bold",
            }}
          >
            🚚 Free Delivery
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <button
              onClick={() =>
                addToCart(
                  item,
                  quantities[index]
                )
              }
              disabled={
                item.stock <= 0 ||
                quantities[index] <= 0
              }
              style={{
                flex: 1,
                background:
                  item.stock > 0
                    ? "#1e3c72"
                    : "#999",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                cursor:
                  item.stock > 0
                    ? "pointer"
                    : "not-allowed",
              }}
            >
              🛒 Add Cart
            </button>

            <button
              disabled={item.stock <= 0}
              style={{
                flex: 1,
                background:
                  item.stock > 0
                    ? "#ff9900"
                    : "#999",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              ⚡ Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};