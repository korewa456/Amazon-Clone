import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <div>
              <Header />
              <h1>Order</h1>
            </div>
          }
        />
        <Route
          path="/prime"
          element={
            <div>
              <Header />
              <h1>Prime</h1>
            </div>
          }
        />
        <Route
          path="/checkOut"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
