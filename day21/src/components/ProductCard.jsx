import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-2xl font-bold text-green-600 mt-3">
          ₹{product.price.toLocaleString()}
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;