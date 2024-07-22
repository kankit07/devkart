import React from "react";

const Discount = () => {
  return (
    <div className="bg-gray-400 p-8 md:p-12">
      <h2 className="text-3xl font-semibold text-center  md:ml-8 lg:ml-16 mb-8">
        On Sale!
      </h2>

      <div className="flex flex-wrap justify-center gap-16  md:gap-32">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-200 p-4 rounded-lg shadow-lg w-full sm:w-64 md:w-72 lg:w-80"
          >
            <img
              src="image-url"
              alt={`Product ${item}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600">₹99.99</p>
            <span className="text-gray-600 line-through">₹129.99</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
