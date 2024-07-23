import { useState, useEffect } from "react";
import { CartState } from "../context/context";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Ratings from "../components/Products/Ratings";
import CheckoutModal from "../components/Checkout/CheckoutModal";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="lg:m-12 p-8 bg-slate-300 lg:flex">
      {cart.length === 0 ? (
        <>
          {" "}
          <div className="lg:w-2/3 lg:pr-8">Your Cart is Empty</div>
        </>
      ) : (
        <>
          <div className="lg:w-2/3 lg:pr-8">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex-shrink-0 w-24 h-24 mr-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover p-4 rounded-full"
                  />
                </div>
                <div className="flex flex-grow">
                  <div className="flex flex-col justify-center w-1/3">
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-end w-2/3 pr-4">
                    <div className="flex items-center mb-2">
                      {product.qty === 1 ? (
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            })
                          }
                          className="bg-gray-200 rounded-full p-1 mr-2 hover:bg-gray-300"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            dispatch({
                              type: "DECREMENT_CART_QTY",
                              payload: product,
                            })
                          }
                          className="bg-gray-200 rounded-full p-1 mr-2 hover:bg-gray-300"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                      )}

                      <span className="font-semibold">{product.qty}</span>
                      <button
                        onClick={() => {
                          if (product.qty < product.inStock) {
                            dispatch({
                              type: "INCREMENT_CART_QTY",
                              payload: product,
                            });
                          } else {
                            alert("Sorry, this product is out of stock.");
                          }
                        }}
                        className="bg-gray-200 rounded-full p-1 ml-2 hover:bg-gray-300"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          });
                        }}
                        className="px-4"
                      >
                        <TrashIcon className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">
                        <Ratings rating={product.rating} />
                      </span>
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 lg:pl-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold lg:mb-4">Order Summary</h2>
              <div className="flex justify-between lg:mb-2">
                <span>Subtotal:</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between lg:mb-2">
                <span>Shipping:</span>
                <span>₹100.00</span>
              </div>
              <div className="flex justify-between lg:mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">
                  ₹{(totalAmount + 100).toFixed(2)}
                </span>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => {
                  cart.length > 0
                    ? setIsModalOpen(true)
                    : alert("Your cart is empty");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <CheckoutModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            totalAmount={totalAmount + 100}
            dispatch={dispatch}
          />
        </>
      )}
    </div>
  );
};

export default Cart;
