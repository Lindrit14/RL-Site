import React, { useState, useEffect } from 'react';

const CoinFlip = () => {
  const [result, setResult] = useState('');
  const [highlight, setHighlight] = useState(false);

  const flipCoin = () => {
    const random = Math.random();
    const newResult = random < 0.5 ? 'Rina' : 'Lind';
    setResult(newResult);
    setHighlight(true);
  };

  useEffect(() => {
    let timeoutId;
    if (highlight) {
      timeoutId = setTimeout(() => {
        setHighlight(false);
      }, 1500); // Highlight duration in milliseconds (1.5 seconds)
    }

    return () => clearTimeout(timeoutId);
  }, [highlight]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Decision Maker - Coin Flip</h1>
      <button
        onClick={flipCoin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300"
      >
        Flip Coin
      </button>
      {result && (
        <p className={`text-xl ${highlight ? 'text-green-500 font-bold' : ''}`}>
          The result is: {result}
        </p>
      )}
    </div>
  );
};

export default CoinFlip;
