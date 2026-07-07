import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white shadow-lg rounded-xl p-5 mb-5">

      {/* Product Image */}
      <div className="flex items-center gap-5">
        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 rounded-lg object-cover"
        />

        <div>
          <h2 className="text-xl font-bold">
            {item.name}
          </h2>

          <p className="text-green-600 font-bold text-lg mt-2">
            ₹{item.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Quantity Buttons */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="w-10 h-10 bg-gray-200 rounded-lg text-xl hover:bg-gray-300"
        >
          -
        </button>

        <span className="text-xl font-bold">
          {item.quantity}
        </span>

        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="w-10 h-10 bg-gray-200 rounded-lg text-xl hover:bg-gray-300"
        >
          +
        </button>

      </div>

      {/* Total */}
      <div>
        <p className="text-xl font-bold text-blue-600">
          ₹{(item.price * item.quantity).toLocaleString()}
        </p>
      </div>

      {/* Remove */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        Remove
      </button>

    </div>
  );
};

export default CartItem;