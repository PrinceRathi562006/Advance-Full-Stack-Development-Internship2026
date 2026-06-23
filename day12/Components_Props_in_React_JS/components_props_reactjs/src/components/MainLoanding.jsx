import { Card } from "./card.jsx";

const MainLoanding = ({ cartItems, setCartItems }) => {
  const products = [
    {
      id: 1,
      title: "Iphone15",
      category: "Smartphone",
      rating: 4.8,
      stock: 15,
      image:
        "https://m.media-amazon.com/images/I/61Brhn4WBIL._AC_UY327_FMwebp_QL65_.jpg",
      description: "iphone 15 white color",
      quantity: 0,
    },
    {
      id: 2,
      title: "Formal Shoes",
      category: "Fashion",
      rating: 4.2,
      stock: 12,
      image:
        "https://m.media-amazon.com/images/I/61w-Q38T2lL._AC_SY145_.jpg",
      description:
        "Black formal shoes for party and professional meeting",
      quantity: 0,
    },
    {
      id: 3,
      title: "Table Lamp",
      category: "Decorative Lights",
      rating: 4.5,
      stock: 25,
      image:
        "https://m.media-amazon.com/images/I/61jRUob8mhL._AC_SY145_.jpg",
      description:
        "Table lamp to decorate your study table",
      quantity: 0,
    },
    {
      id: 4,
      title: "Socks",
      category: "Fashion",
      rating: 3.8,
      stock: 18,
      image:
        "https://m.media-amazon.com/images/I/61b4iWTSp6L._AC_SY145_.jpg",
      description: "Comfortable cotton socks",
      quantity: 0,
    },
    {
      id: 5,
      title: "Casual Shirt",
      category: "Fashion",
      rating: 5,
      stock: 0,
      image:
        "https://m.media-amazon.com/images/I/6114oJ6wgoL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Stylish cotton blend casual shirt with dual flap pockets.",
      quantity: 0,
    },
    {
      id: 6,
      title: "IQOO Z10R 5G",
      category: "Smartphone",
      rating: 4.1,
      stock: 100,
      image:
        "https://m.media-amazon.com/images/I/61IOl0PvbFL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "32MP 4K Selfie Camera, AMOLED Display, 256GB Storage.",
      quantity: 0,
    },
    {
      id: 7,
      title: "Macbook Air M5",
      category: "Laptop",
      rating: 4.9,
      stock: 105,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lBrh0el7kH2m82ZgWLEiXWNAYWszHh0Ns8v_aqqJNR54BAwyqs4FhPK4&s=10",
      description:
        "Apple MacBook Air 13 inch with M5 chip and 16GB RAM.",
      quantity: 0,
    },
    {
      id: 8,
      title: "OnePlus Nord CE6",
      category: "Smartphone",
      rating: 4.4,
      stock: 1,
      image:
        "https://m.media-amazon.com/images/I/61Di24QT6GL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "8000mAh Battery, 144Hz AMOLED Display.",
      quantity: 0,
    },
    {
      id: 9,
      title: "Galaxy Book 6",
      category: "Laptop",
      rating: 4.8,
      stock: 7,
      image:
        "https://m.media-amazon.com/images/I/71efDx+EJBL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "Intel Core Ultra 7, 16GB RAM, Touchscreen.",
      quantity: 0,
    },
    {
      id: 10,
      title: "Lays",
      category: "Grocery",
      rating: 4.6,
      stock: 1000,
      image:
        "https://m.media-amazon.com/images/I/41Pco1+xsHL._SY300_SX300_QL70_FMwebp_.jpg",
      description:
        "American Style Cream & Onion Chips Pack.",
      quantity: 0,
    },
  ];

  return (
    <div>
      <Card
        items={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
};

export default MainLoanding;