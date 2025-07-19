import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ensure every item has quantity
    storedCart = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCart(storedCart);
    localStorage.setItem("cart", JSON.stringify(storedCart));
  }, []);

  const updateLocalStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateLocalStorage(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateLocalStorage(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateLocalStorage(updatedCart);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow p-4 text-center"
              >
                <img
                  src={product.imageUrl || "https://via.placeholder.com/100"}
                  alt={product.name}
                  className="mx-auto mb-2 w-20 h-20 object-contain"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-green-600 font-bold">
                  ₹{product.price.toFixed(2)} x {product.quantity}
                </p>

                <div className="flex justify-center items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(product.id)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                  >
                    ➖
                  </button>
                  <span className="font-semibold">{product.quantity}</span>
                  <button
                    onClick={() => increaseQty(product.id)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                  >
                    ➕
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>

            <button
              disabled={cart.length === 0}
              onClick={() => alert("✅ Order Placed! (Coming Soon)")}
              className={`mt-4 px-6 py-2 rounded text-white font-semibold ${
                cart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Place Order
            </button>

            <div className="mt-4">
              <Link to="/dashboard" className="text-blue-600 hover:underline">
                ← Back to Products
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
