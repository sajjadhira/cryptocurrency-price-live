import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Content from "./components/Content";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

export const globalContext = React.createContext();
const queryClinet = new QueryClient();

function App() {
  const context = {
    brand_name: "CryptoLive",
    support_email: "support@inihub.com",
  };

  return (
    <globalContext.Provider value={context}>
      <QueryClientProvider client={queryClinet}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Content children={<Home />} />} />
            <Route
              path="/cryptocurrency-price-live/"
              element={<Content children={<Home />} />}
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </globalContext.Provider>
  );
}

export default App;
