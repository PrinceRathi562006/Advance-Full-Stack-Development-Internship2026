import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { clearCart } from "../features/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center mt-20">

        <h1 className="text-4xl font-bold mb-6">
          🛒 Your Cart is Empty
        </h1>

        <Link to="/">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Continue Shopping
          </button>
        </Link>

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2">

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

        {/* Summary */}
        <div className="bg-white shadow-xl rounded-xl p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Total Products</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total Quantity</span>
            <span>{totalItems}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-2xl font-bold mb-6">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
            Checkout
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
          >
            Clear Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;