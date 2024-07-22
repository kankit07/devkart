import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  const navigate = useNavigate();

  if (!orderDetails) {
    return <div>No order details available.</div>;
  }

  const { formData, orderedProducts, totalAmount } = orderDetails;

  return (
    <>
      <div className="container mx-auto p-12 mt-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Customer Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Address:</strong> {formData.address}
            </p>
            <p>
              <strong>City:</strong> {formData.city}
            </p>
            <p>
              <strong>Postal Code:</strong> {formData.postalCode}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Ordered Products</h3>
          <ul className="divide-y divide-gray-200">
            {orderedProducts.map((product) => (
              <li key={product.id} className="py-4 flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded lg:mr-4"
                />
                <div className="flex-grow">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-gray-600">Quantity: {product.qty}</p>
                </div>
                <p className="font-medium">
                  ₹{(product.price * product.qty).toFixed(2)}
                </p>
              </li>
            ))}
            <li className="py-4 flex items-center">
              <div className="flex-grow">
                <h4 className="font-medium">Shipping:</h4>
              </div>
              <p className="font-medium">₹100.00</p>
            </li>
          </ul>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold">
            Total Amount: ₹{totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="container mx-auto ">
        <button
          className="bg-yellow-300 container hover:bg-yellow-400 text-black  p-8 mt-4 rounded-lg shadow-md"
          onClick={() => {
            navigate("/products");
          }}
        >
          {" "}
          Continue Shopping
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
