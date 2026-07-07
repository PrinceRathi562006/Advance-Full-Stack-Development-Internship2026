import products from "../data/Products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Latest Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </div>
  );
};

export default ProductList;