import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4 text-center">
                <img src={product.imageUrl} alt={product.name} className="mx-auto mb-2 w-20 h-20 object-contain" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-green-600 font-bold">₹{product.price}</p>
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
            <h2 className="text-2xl font-bold">Total: ₹{totalPrice}</h2>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
