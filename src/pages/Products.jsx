import React from "react";
import { CartState } from "../context/context";
import SingleProduct from "../components/Products/SingleProducts";
import Filters from "../components/Products/Filters";

const Products = () => {
  const {
    state: { products },
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    filterDispatch,
  } = CartState();
  // console.log(products);

  const filteredProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => {
        if (sort === "lowToHigh") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((product) => product.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((product) => product.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (products) => products.rating >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  return (
    <div className="w-full flex flex-row  relative mt-4 lg:pl-[150px] lg:pr-[150px]">
      <div className="hidden md:flex justify-center pt-16  bg-gray-200 md:w-1/3">
        <Filters />
      </div>
      <div className="md:w-2/3 flex  p-8 flex-wrap justify-around">
        <div className="lg:hidden">
          <input
            type="text"
            placeholder="Search Products"
            className="p-4 rounded-lg bg-gray-200 w-[300px] mb-4"
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </div>
        {filteredProducts().map((product) => {
          return <SingleProduct key={product.id} product={product} />;
          // return <h1>{product.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default Products;
