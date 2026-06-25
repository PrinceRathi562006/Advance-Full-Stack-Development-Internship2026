import { useState, useEffect } from "react";

const UserFetch = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        fontFamily: "Segoe UI, sans-serif",
        padding: "20px",
        background: "linear-gradient(to right, #f0f4ff, #6bbbe0ac)",
        minHeight: "100vh",
      }}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name 🔍"
        style={{
          height: "40px",
          width: "400px",
          borderRadius: "8px",
          border: "1px solid lightgray",
          textAlign: "center",
          fontSize: "16px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      />

      <h1 style={{ color: "blue", marginBottom: "10px" }}>User Data</h1>

      {
        filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "20px",
              width: "500px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              textAlign: "left",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <h2 style={{ color: "#333", marginBottom: "10px" }}>{user.name}</h2>
            <p>
              <strong style={{ color: "red" }}>ID:</strong>{" "}
              <span style={{ color: "green" }}>{user.id}</span>
            </p>
            <p>
              <strong style={{ color: "red" }}>Username:</strong>{" "}
              <span style={{ color: "green" }}>{user.username}</span>
            </p>
            <p>
              <strong style={{ color: "red" }}>Email:</strong>{" "}
              <span style={{ color: "green" }}>{user.email}</span>
            </p>
            <p>
              <strong style={{ color: "red" }}>Phone:</strong>{" "}
              <span style={{ color: "green" }}>{user.phone}</span>
            </p>
            <p>
              <strong style={{ color: "red" }}>Website:</strong>{" "}
              <span style={{ color: "green" }}>{user.website}</span>
            </p>
            <p>
              <strong style={{ color: "red" }}>Address:</strong>{" "}
              <span style={{ color: "green" }}>
                {user.address.street}, {user.address.suite}, {user.address.city}{" "}
                ({user.address.zipcode})
              </span>
            </p>
            <p>
              <strong style={{ color: "red" }}>Company:</strong>{" "}
              <span style={{ color: "green" }}>
                {user.company.name} – "{user.company.catchPhrase}"
              </span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default UserFetch;
