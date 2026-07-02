import { useState } from "react";
import products from "./Product";

const SortExample = () => {
  const [items, setItems] = useState(products);

  const sortLowToHigh = () => {
    const sorted = [...items].sort((a, b) => a.price - b.price);
    setItems(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...items].sort((a, b) => b.price - a.price);
    setItems(sorted);
  };

  return (
    <div>
      <button onClick={sortLowToHigh}>Low to High</button>
      <button onClick={sortHighToLow}>High to Low</button>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SortExample;