import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our food ordering website! We are passionate about providing delicious and fresh food to our customers. Our mission is to deliver a delightful dining experience right to your doorstep.
        </p>
        <p className="text-lg mb-4">
          At our restaurant, we prioritize quality, flavor, and customer satisfaction. Our chefs work tirelessly to create mouthwatering dishes using the finest ingredients. We believe in offering a diverse menu that caters to various tastes and preferences.
        </p>
        <p className="text-lg mb-4">
          Whether you're craving a classic comfort meal or exploring new culinary adventures, we have something for everyone. Enjoy our user-friendly website, place your order, and let us take care of the rest.
        </p>
        <p className="text-lg mb-4">
          Thank you for choosing us as your food partner. We look forward to serving you soon!
        </p>
      </div>
    </div>
  );
};

export default About;
