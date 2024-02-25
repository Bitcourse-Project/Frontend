import React from "react";
import TradingViewWidget from "./wizet/wizet.js"; // Make sure to provide the correct path to your TradingViewWidget file.

function App() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <TradingViewWidget />
      <h1 className="text-2xl font-bold">gd</h1>
    </div>
  );
}

export default App;
