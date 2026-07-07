import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link to="/">
          <h1 className="text-3xl font-bold cursor-pointer">
            Redux Store
          </h1>
        </Link>

        <Link to="/cart">
          <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            🛒 Cart ({totalItems})
          </button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;