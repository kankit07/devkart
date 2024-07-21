import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-4">
        <div className="pl-12 w-full md:grid md:grid-cols-3 md:gap-4 md:p-12 md:pl-24">
          <div className="mb-3">
            <h3 className=" text-2xl md:text-3xl md:mb-4" id="contact-us">
              Contact Us
            </h3>
            <p>123 Main St, City, Country</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl md:text-3xl md:mb-4">Follow</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl md:text-3xl md:mb-4">About Us</h3>
            <p className="text-wrap">Lorem ipsum dolor sit amet, elit.</p>
          </div>
        </div>
        <p className="text-center">&copy; 2024 DevKart</p>
      </footer>
    </div>
  );
};

export default Footer;
