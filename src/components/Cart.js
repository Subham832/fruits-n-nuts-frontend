// src/components/Cart.js
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Remove single item
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4 max-w-xl mx-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white shadow p-4 rounded flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-12 h-12" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-green-600 font-bold">₹{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-xl font-bold text-gray-700">Total: ₹{total}</p>
            <button
              onClick={handleClearCart}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
