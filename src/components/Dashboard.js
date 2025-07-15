import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${product.name} added to cart! 🛒`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-600">🍊 Product Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 text-center">
            <img src={product.imageUrl} alt={product.name} className="mx-auto mb-2 w-20 h-20 object-contain" />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
