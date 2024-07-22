import React from "react";
import Ratings from "./Ratings";
import { CartState } from "../../context/context";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
    <div className="max-w-sm bg-gray-200 overflow-hidden mb-8 p-4 rounded-lg shadow-lg w-full sm:w-64 md:w-80 lg:w-80">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-4 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700">
          ₹{product.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-md font-semibold text-gray-700 line-through">
          ₹{product.price + 100}
        </span>
        <span className="block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700">
          Rating: <Ratings rating={product.rating} />
        </span>
        <span className="block px-3 py-1">
          {product.fastDelivery ? "Fast Delivery" : "3 days minimum"}
        </span>

        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
            }}
            className="bg-red-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded mx-3"
          >
            {" "}
            Remove from Cart
          </button>
        ) : product.inStock > 0 ? (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
            }}
            className="bg-blue-200 hover:bg-gray-300 text-black font-bold py-2 px-4 mx-3 rounded"
          >
            {" "}
            Add to Cart
          </button>
        ) : (
          <span className="  px-3 py-1 text-red-500 text-md font-bold">
            Out of Stock
          </span>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
