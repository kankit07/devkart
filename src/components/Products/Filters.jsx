import React, { useState } from "react";
import Ratings from "./Ratings";
import { CartState } from "../../context/context";

const Filters = () => {
  const {
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    filterDispatch,
  } = CartState();
  // console.log(sort, byStock, byFastDelivery, byRating, searchQuery);
  const [rate, setRate] = useState(3);
  const handleSortChange = (sortType) => {
    filterDispatch({
      type: "SORT_BY_PRICE",
      payload: sortType,
    });
  };

  return (
    <div className="text-lg">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold">Filter Products</h2>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-2xl mb-1">Sort</h3>
        <div>
          <label className="inline-flex items-center p-4">
            <input
              type="radio"
              className="form-radio"
              name="group1"
              value="lowToHigh"
              onChange={() => handleSortChange("lowToHigh")}
              checked={sort === "lowToHigh"}
            />
            <span className="lg:ml-2">Ascending</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center p-4">
            <input
              type="radio"
              className="form-radio"
              name="group1"
              value="highToLow"
              onChange={() => handleSortChange("highToLow")}
              checked={sort === "highToLow"}
            />
            <span className="lg:ml-2">Decending</span>
          </label>
        </div>
      </div>
      <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mb-4">
        <div>
          <label className="inline-flex items-center p-4">
            <input
              type="checkbox"
              name="group1"
              className="form-checkbox"
              onChange={() => {
                filterDispatch({
                  type: "FILTER_BY_STOCK",
                });
              }}
              checked={byStock}
            />
            <span className="lg:ml-2">Include Out Of Stock</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center p-4">
            <input
              type="checkbox"
              name="group1"
              className="form-checkbox"
              onChange={() => {
                filterDispatch({
                  type: "FILTER_BY_DELIVERY",
                });
              }}
              checked={byFastDelivery}
            />
            <span className="lg:ml-2">Fast Delivery Only</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-md font-medium">Rating</h3>
        <Ratings
          rating={byRating}
          onClick={(i) => {
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            });
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <button
          className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
          onClick={() =>
            filterDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
