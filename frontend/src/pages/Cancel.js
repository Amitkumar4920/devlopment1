import React from "react";

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Payment Canceled</h1>
        <p className="text-lg text-gray-600 mt-4">
          We're sorry, your payment was canceled or encountered an error.
        </p>
      </div>
    </div>
  );
};

export default Success;
