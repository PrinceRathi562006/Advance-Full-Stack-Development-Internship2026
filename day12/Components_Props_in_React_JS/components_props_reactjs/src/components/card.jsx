// // import React from 'react'

// export const Card = ({ items }) => {
//   return (
//     <>
//       <div
//         style={{
//           width: "520px",
//           padding: "20px",
//           margin: "30px",
//           background: "#ffffff",
//           borderRadius: "20px",
//           boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
//         }}
//       >
//         <h1
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             color: "#232f3e",
//             fontSize: "28px",
//           }}
//         >
//           Keep Shopping For...
//         </h1>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2, 1fr)",
//             gap: "15px",
//           }}
//         >
//           {items.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 background: "#f8f9fa",
//                 borderRadius: "15px",
//                 padding: "12px",
//                 textAlign: "center",
//                 transition: "0.3s",
//                 cursor: "pointer",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{
//                   width: "100%",
//                   height: "120px",
//                   objectFit: "contain",
//                   marginBottom: "10px",
//                 }}
//               />

//               <h3
//                 style={{
//                   fontSize: "16px",
//                   color: "#222",
//                   marginBottom: "5px",
//                 }}
//               >
//                 {item.title}
//               </h3>

//               <p
//                 style={{
//                   color: "#007185",
//                   fontWeight: "500",
//                 }}
//               >
//                 {item.views} viewed
//               </p>
//             </div>
//           ))}
//         </div>

//         <button
//           style={{
//             marginTop: "20px",
//             width: "100%",
//             padding: "12px",
//             border: "none",
//             borderRadius: "10px",
//             background: "#ff9900",
//             color: "#fff",
//             fontSize: "16px",
//             fontWeight: "600",
//             cursor: "pointer",
//           }}
//         >
//           View All Items
//         </button>
//       </div>
//     </>
//   );
// };

export const Card = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
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
            src={item.image}
            alt={item.title}
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
            {item.title}
          </h3>

          <h3
            style={{
              fontSize: "16px",
              color: "#222",
              marginBottom: "5px",
            }}
          >
            {item.rating}
          </h3>

          <p
            style={{
              color: "#007185",
              fontWeight: "500",
            }}
          >
            {item.lastMonthSell}
          </p>

          <p
            style={{
              color: "#007185",
              fontWeight: "500",
            }}
          >
            {item.price}
          </p>

          <p
            style={{
              color: "#007185",
              fontWeight: "500",
            }}
          >
            {item.DeliveryDetails}
          </p>
        </div>
      ))}
    </>
  );
};