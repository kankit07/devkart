import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../context/context";

const CheckoutModal = ({ isOpen, onClose, totalAmount, dispatch }) => {
  const {
    state: { cart },
  } = CartState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic here
    console.log("Payment submitted", formData);
    const orderDetails = {
      formData,
      orderedProducts: cart,
      totalAmount,
    };

    dispatch({
      type: "CLEAR_CART",
    });
    navigate("/order-summary", { state: { orderDetails } });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto lg:p-12 p-6  border w-96 lg:w-[550px] shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-bold mb-4">Checkout Details</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <div className="text-right mb-4">
            <span className="font-bold">Total: ₹{totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-black rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
