import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-gray-700">
      <div className="container mx-auto px-6 py-8 md:flex md:justify-between md:items-center">
        <div className="md:w-1/2 md:flex md:items-center">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0">Foodie Circle🍔🍕</h2>
          <div className="flex justify-center md:justify-start md:p-4 md:space-x-12 ml-0 md:ml-12 mt-4 md:mt-0 p-">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-gray-700 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-gray-700 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-gray-700 hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:contact@Foodie Circle.com">
              <FaEnvelope size={24} className="text-gray-700 hover:text-red-500 transition-colors" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:text-right mt-4 md:mt-0">
          <p className="mb-2">Contact us: +9876543243</p>
          <p className="mb-2">1234 Food Street, City, Country</p>
          <p className="text-sm">&copy; 2023 Foodie Circle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
