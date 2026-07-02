// import { useReducer } from 'react'
// // import UserContext from './UserContext';
// // import Navbar from './Navbar';
// // import CounterUsingUseReducer from './CounterUsingUseReducer';
// import products from './components/Product';
// import CartReducer, { initialState } from "./components/CartReducer";
// const App = () => {
//   const [state,dispatch]= useReducer(cartReducer,initialState);
//   return (
//     <div>
//         <h1> Shopping Cart</h1>
//         <h2> Total : Rs {state.total}</h2>
//         {
//           products.map((product)=>(
//             <div key={product.id}
//              style={{
//               border:"1px solid gray",
//               padding:15,
//               marginBottom:15
//              }}
//             >

//               <h3>{product.name}</h3>
//               <p>{product.price}</p>
//               <button onClick={()=>dispatch({
//                 type:"ADD_ITEM",
//                 payload:product
//               })}>Add to Cart</button>
//             </div>
//           ))
//         }
//         <h2> Cart </h2>
//         {state.cart.map((item)=>(
//           <div key={item.id}>
//             {item.name}
//             {"-"}
//             Qty : {item.quantity}

//           </div>
//         ))}
//     </div>
//   )
// }

// export default App



import { useReducer, useState } from "react";
import products from "./components/Product";
import CartReducer, { initialState } from "./components/CartReducer";
import UseCallbackUseMemoExample from "./components/UseCallBackUseMemoExample";
import UseMemoExample from "./components/useMemoExample"
import SortExample from "./components/SortExample";

const App = () => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [coupon, setCoupon] = useState("");

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>🛒 Shopping Cart</h1>

      <hr />

      <h2>Total : ₹ {state.total.toFixed(2)}</h2>
      <h2>Discount : ₹ {state.discount.toFixed(2)}</h2>
      <h2>Final Total : ₹ {state.finalTotal.toFixed(2)}</h2>

      <br />

      <input
        type="text"
        placeholder="Enter Coupon"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        style={{
          padding: "8px",
          width: "220px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={() =>
          dispatch({
            type: "APPLY_COUPON",
            payload: coupon,
          })
        }
      >
        Apply Coupon
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() =>
          dispatch({
            type: "REMOVE_COUPON",
          })
        }
      >
        Remove Coupon
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() =>
          dispatch({
            type: "CLEAR_CART",
          })
        }
      >
        Clear Cart
      </button>

      <hr />

      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>
            <strong>Price:</strong> ₹ {product.price}
          </p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart Items</h2>

      {state.cart.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        state.cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              marginBottom: "15px",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>{item.name}</h3>

            <p>Price : ₹ {item.price}</p>

            <p>Quantity : {item.quantity}</p>

            <p>
              Subtotal : ₹ {(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "DECREMENT",
                  payload: item.id,
                })
              }
            >
              -
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                dispatch({
                  type: "INCREMENT",
                  payload: item.id,
                })
              }
            >
              +
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}

      <UseCallbackUseMemoExample />
      <UseMemoExample />
      <SortExample />
    </div>
  );
};

export default App;