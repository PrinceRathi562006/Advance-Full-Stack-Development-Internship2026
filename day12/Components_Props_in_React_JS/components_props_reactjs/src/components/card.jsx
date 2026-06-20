export const Card = () => {
  return (
    <>
      <div
        style={{
          width: "520px",
          padding: "20px",
          margin: "30px",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#232f3e",
            fontSize: "28px",
          }}
        >
          Keep Shopping For...
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          {/* Item 1 */}
          <div
            style={{
              background: "#f8f9fa",
              borderRadius: "15px",
              padding: "12px",
              textAlign: "center",
              transition: "0.3s",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://m.media-amazon.com/images/I/417qDqDjimL._MCnd_AC_.jpg"
              alt="Cricket Shoes"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "16px",
                color: "#222",
                marginBottom: "5px",
              }}
            >
              Men's Cricket Shoes
            </h3>
            <p style={{ color: "#007185", fontWeight: "500" }}>
              6 viewed
            </p>
          </div>

          {/* Item 2 */}
          <div
            style={{
              background: "#f8f9fa",
              borderRadius: "15px",
              padding: "12px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://m.media-amazon.com/images/I/41WnZzmj80L._MCnd_AC_.jpg"
              alt="Desks"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3>Men's Cricket Shoes</h3>
            <p style={{ color: "#007185", fontWeight: "500" }}>
              3 viewed
            </p>
          </div>

          {/* Item 3 */}
          <div
            style={{
              background: "#f8f9fa",
              borderRadius: "15px",
              padding: "12px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://m.media-amazon.com/images/I/31YShIe0zDL._MCnd_AC_.jpg"
              alt="Bagpacks"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3>Men's Cricket Shoes</h3>
            <p style={{ color: "#007185", fontWeight: "500" }}>
              4 viewed
            </p>
          </div>

          {/* Item 4 */}
          <div
            style={{
              background: "#f8f9fa",
              borderRadius: "15px",
              padding: "12px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="https://m.media-amazon.com/images/I/41BIUrGIxVL._MCnd_AC_.jpg"
              alt="Cricket Gloves"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3>Men's Cricket Shoes</h3>
            <p style={{ color: "#007185", fontWeight: "500" }}>
              2 viewed
            </p>
          </div>
        </div>

        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#ff9900",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          View All Items
        </button>
      </div>
    </>
  );
};